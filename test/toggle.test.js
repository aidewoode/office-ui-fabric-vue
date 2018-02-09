import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import Toggle from '../src/components/toggle/Toggle.vue';

describe('Toggle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Toggle, {
      propsData: {
        description: 'description'
      },

      slots: {
        default: 'checkbox'
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
    expect(wrapper.contains('.ms-Toggle')).toBeTruthy();
    expect(wrapper.find('.ms-Toggle-description').text()).toBe('description');
  })

  test('should return a value when toggled', () => {
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);

    wrapper.setProps({ value: false });
    wrapper.find('.ms-Toggle-trigger').trigger('click');
    expect(inputEvent).toBeCalledWith(true);

    wrapper.setProps({ value: true });
    wrapper.find('.ms-Toggle-trigger').trigger('click');
    expect(inputEvent).toBeCalledWith(false);
  });

  test('should can set selected status by value', () => {
    wrapper.setProps({ value: true });
    expect(wrapper.find('label').classes()).toContain('is-selected');

    wrapper.setProps({ value: false });
    expect(wrapper.find('label').classes()).not.toContain('is-selected');
  });

  test('should can be disabled', () => {
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);
    wrapper.setProps({ disabled: true });

    wrapper.find('.ms-Toggle-trigger').trigger('click');
    expect(inputEvent).not.toBeCalled();
  });
});
