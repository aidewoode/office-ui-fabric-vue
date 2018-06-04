import { mount, createLocalVue } from 'vue-test-utils';

import ListItem from '../src/components/list/ListItem.vue';
import ListActions from '../src/components/list/ListActions.vue';
import ListActionItem from '../src/components/list/ListActionItem.vue';

describe('ListItem', () => {
  const defaultSlot = `
    <list-actions>
      <list-action-item icon='Add'></list-action-item>
    </list-actions>
  `;

  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    localVue.component('list-actions', ListActions);
    localVue.component('list-action-item', ListActionItem);

    wrapper = mount(ListItem, {
      slots: {
        default: defaultSlot
      },

      propsData: {
       primaryText: 'primaryText',
       secondaryText: 'secondaryText',
       tertiaryText: 'tertiaryText',
       metaText: 'metaText'
      },

      localVue
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-ListItem')).toBeTruthy();
    expect(wrapper.contains('.ms-ListItem-actions')).toBeTruthy();
    expect(wrapper.contains('.ms-ListItem-action')).toBeTruthy();
    expect(wrapper.contains('.ms-Icon')).toBeTruthy();

    expect(wrapper.find('.ms-ListItem-primaryText').text()).toEqual('primaryText');
    expect(wrapper.find('.ms-ListItem-secondaryText').text()).toEqual('secondaryText');
    expect(wrapper.find('.ms-ListItem-tertiaryText').text()).toEqual('tertiaryText');
    expect(wrapper.find('.ms-ListItem-metaText').text()).toEqual('metaText');
  });

  test('should can set image src when type is image', () => {
    wrapper.setProps({ type: 'image',  imageSrc: 'example.png' });
    expect(wrapper.find('.ms-ListItem-image').attributes().src).toBe('example.png');
  });

  test('should return a value when toggled selectable list item', () => {
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);
    wrapper.setProps({ isSelectable: true });

    wrapper.setProps({ value: false });
    wrapper.find('.ms-ListItem-selectionTarget').trigger('click');
    expect(inputEvent).toBeCalledWith(true);

    wrapper.setProps({ value: true });
    wrapper.find('.ms-ListItem-selectionTarget').trigger('click');
    expect(inputEvent).toBeCalledWith(false);
  });

  test('should can set selected status by value when list item is selectable', () => {
    wrapper.setProps({ value: true });
    expect(wrapper.find('.ms-ListItem').classes()).toContain('is-selected');

    wrapper.setProps({ value: false });
    expect(wrapper.find('.ms-ListItem').classes()).not.toContain('is-selected');
  });
});
