import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import Checkbox from '../src/components/checkbox/Checkbox.vue';

describe('Checkbox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: false
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
    expect(wrapper.contains('.ms-CheckBox')).toBeTruthy();
    expect(wrapper.find('.ms-Label').text()).toBe('checkbox');
  });

  test('should return a value when toggled', () => {
    const inputEvent = jest.fn();
    wrapper.vm.$on('input', inputEvent);

    wrapper.find('label').trigger('click');
    expect(inputEvent).toBeCalledWith(true);

    wrapper.find('label').trigger('click');
    expect(inputEvent).toBeCalledWith(false);
  });

  test('should can set checked status by value', () => {
    wrapper.setProps({ value: true });
    expect(wrapper.find('label').classes()).toContain('is-checked');

    wrapper.setProps({ value: false });
    expect(wrapper.find('label').classes()).not.toContain('is-checked');
  });

  test('should can be disabled', () => {
    const inputEvent = jest.fn();
    wrapper.vm.$on('input', inputEvent);
    wrapper.setProps({ disabled: true });

    wrapper.find('label').trigger('click');
    expect(inputEvent).not.toBeCalled();
  });
});
