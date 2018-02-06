import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import Dialog from '../src/components/dialog/Dialog.vue';

describe('Dialog', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Dialog, {
      propsData: {
        title: 'title',
        subText: 'subText'
      },

      slots: {
        actions: 'actions'
      },

      mocks: {
        $fabric: fabric
      },

      // Because Dialog component will add overlay on parentElement,
      // so set attachToDocument to true let Dialog component have parentElement.
      attachToDocument: true
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-Dialog')).toBeTruthy();
    expect(wrapper.find('.ms-Dialog-title').text()).toBe('title');
    expect(wrapper.find('.ms-Dialog-subText').text()).toBe('subText');
    expect(wrapper.find('.ms-Dialog-actions').text()).toBe('actions');
  });

  test('should control the visibility of dialog using value', () => {
    wrapper.setProps({ value: true });
    expect(wrapper.find('.ms-Dialog').classes()).toContain('is-open');

    wrapper.setProps({ value: false });
    expect(wrapper.find('.ms-Dialog').classes()).not.toContain('is-open');
  });

  test('should return false when click overlay to close the dialog', () => {
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);
    wrapper.setProps({ value: true });
    wrapper.vm.$el.parentElement.querySelector('.ms-Overlay').click();

    expect(inputEvent).toBeCalledWith(false);
  });

  test('should can not click overlay to close the dialog when is blocking dialog', () => {
    wrapper.setProps({ type: 'blocking' });
    wrapper.setProps({ value: true });

    expect(wrapper.find('.ms-Dialog').classes()).toContain('is-open');

    wrapper.vm.$el.parentElement.querySelector('.ms-Overlay').click();
    expect(wrapper.find('.ms-Dialog').classes()).toContain('is-open');
  });
});
