import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import Callout from '../src/components/callout/Callout.vue';

describe('Callout', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Callout, {
      slots: {
        default: "<button id='trigger-button'></button>"
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
    wrapper.setProps({ title: 'title', content: 'content' });

    expect(wrapper.contains('.ms-Callout')).toBeTruthy();
    expect(wrapper.contains('#trigger-button')).toBeTruthy();

    expect(wrapper.find('.ms-Callout-title').text()).toBe('title');
    expect(wrapper.find('.ms-Callout-subText').text()).toBe('content');
  });

  test('should display callout when click trigger', () => {
    expect(wrapper.find('.ms-Callout').classes()).toContain('is-hidden');

    wrapper.find('#trigger-button').trigger('click');
    expect(wrapper.find('.ms-Callout').classes()).not.toContain('is-hidden');
  });
});
