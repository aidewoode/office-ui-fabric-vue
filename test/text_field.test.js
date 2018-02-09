import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import TextField from '../src/components/text_field/TextField.vue';

describe('TextField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TextField, {
      propsData: {
        label: 'label'
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
    expect(wrapper.contains('.ms-TextField')).toBeTruthy();
    expect(wrapper.contains('input')).toBeTruthy();
    expect(wrapper.find('.ms-Label').text()).toBe('label');
  });

  test('should be textarea when type is multiline ', () => {
    wrapper.setProps({ type: 'multiline' });

    expect(wrapper.contains('input')).toBeFalsy();
    expect(wrapper.contains('textarea')).toBeTruthy();
  });

  test('should return value when input text', () => {
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);
    wrapper.find('.ms-TextField-field').element.value = 'input';
    wrapper.find('.ms-TextField-field').trigger('input');

    expect(inputEvent).toBeCalledWith('input');
  });

  test('should can set input text by value', () => {
    wrapper.setProps({ value: 'input' });

    expect(wrapper.find('.ms-TextField-field').element.value).toBe('input');
  });
});
