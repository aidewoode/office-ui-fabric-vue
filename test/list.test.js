import { mount, createLocalVue } from 'vue-test-utils';
import fabric from '../lib/office-ui-fabric';

import List from '../src/components/list/List.vue';
import ListItem from '../src/components/list/ListItem.vue';
import ListActions from '../src/components/list/ListActions.vue';
import ListActionItem from '../src/components/list/ListActionItem.vue';

describe('List', () => {
  let wrapper;

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    const localVue = createLocalVue();

    localVue.component('list-item', ListItem);
    localVue.component('actions', ListActions);
    localVue.component('action-item', ListActionItem);

    wrapper = mount(List, {
      slots: {
        default: `
          <list-item
            primaryText='Primary'
            secondaryText='Secondary'
            tertiaryText='Tertiary'
            metaText='Meta'>
            <actions>
                <action-item>ActionItem1</action-item>
                <action-item>ActionItem2</action-item>
            </actions>
          </list-item>
        `
      },

      mocks: {
        $fabric: fabric
      },

      localVue
    });

    expect(wrapper.contains('.ms-List')).toBeTruthy();
    expect(wrapper.contains('.ms-ListItem')).toBeTruthy();
    expect(wrapper.contains('.ms-ListItem-actions')).toBeTruthy();
    expect(wrapper.contains('.ms-ListItem-action')).toBeTruthy();

    expect(wrapper.find('.ms-ListItem-primaryText').text()).toEqual('Primary');
    expect(wrapper.find('.ms-ListItem-secondaryText').text()).toEqual('Secondary');
    expect(wrapper.find('.ms-ListItem-tertiaryText').text()).toEqual('Tertiary');
    expect(wrapper.find('.ms-ListItem-metaText').text()).toEqual('Meta');
  });
});
