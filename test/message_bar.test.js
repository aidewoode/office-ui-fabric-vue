import { mount } from 'vue-test-utils';

import MessageBar from '../src/components/message_bar/MessageBar.vue';

describe('MessageBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MessageBar, {
      slots: {
        default: 'MessageBar'
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-MessageBar')).toBeTruthy();
    expect(wrapper.find('.ms-MessageBar-text').text()).toBe('MessageBar');
  });

  test('should can add icon', () => {
    wrapper.setProps({ icon: 'Add' });
    expect(wrapper.contains('.ms-Icon')).toBeTruthy();
  });
});
