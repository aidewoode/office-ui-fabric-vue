import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import Overlay from '../src/components/overlay/Overlay.vue';

describe('Overlay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Overlay, {
      mocks: {
        $fabric: fabric
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-Overlay')).toBeTruthy();
  });

  test('should can control the visibility of overlay by value', () => {
    wrapper.setProps({ value: true });
    expect(wrapper.find('.ms-Overlay').classes()).toContain('is-visible');

    wrapper.setProps({ value: false });
    expect(wrapper.find('.ms-Overlay').classes()).not.toContain('is-visible');
  });

  test('should return false when click overlay to close it', () => {
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);
    wrapper.setProps({ value: true });
    wrapper.trigger('click');

    expect(inputEvent).toBeCalledWith(false);
  });
});
