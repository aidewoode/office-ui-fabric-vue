import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import Panel from '../src/components/panel/Panel.vue';

describe('Panel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Panel, {
      propsData: {
        title: 'title'
      },

      slots: {
        default: 'panel'
      },

      mocks: {
        $fabric: fabric
      },

      attachToDocument: true
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-Panel')).toBeTruthy();
    expect(wrapper.find('.ms-Panel-headerText').text()).toBe('title');
    expect(wrapper.find('.ms-Panel-content').text()).toBe('panel');
  });

  test('should can control the visibility of panel by value', () => {
    wrapper.setProps({ value: true });
    expect(wrapper.find('.ms-Panel').classes()).toContain('is-open');
    expect(wrapper.find('.ms-Panel').classes()).not.toContain('animate-out');

    wrapper.setProps({ value: false });
    expect(wrapper.find('.ms-Panel').classes()).toContain('animate-out');
  });

  test('should return false when click overlay to close panel', () => {
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);
    wrapper.setProps({ value: true });
    wrapper.vm.$el.parentElement.querySelector('.ms-Overlay').click();

    expect(inputEvent).toBeCalledWith(false);
  });

  test('should return false when click close button to close panel', () => {
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);
    wrapper.setProps({ value: true });
    wrapper.find('.ms-Panel-closeButton').trigger('click');

    expect(inputEvent).toBeCalledWith(false);
  });
});
