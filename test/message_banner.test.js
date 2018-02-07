import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import MessageBanner from '../src/components/message_banner/MessageBanner.vue';

describe('MessageBanner', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MessageBanner, {
      slots: {
        default: 'MessageBanner',
        actions: 'actions'
      },

      mocks: {
        $fabric: fabric
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-MessageBanner')).toBeTruthy();
    expect(wrapper.find('.ms-MessageBanner-clipper').text()).toBe('MessageBanner');
    expect(wrapper.find('.ms-MessageBanner-action').text()).toBe('actions');
  });
});
