import { mount, createLocalVue } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import ChoiceFieldGroup from '../src/components/choice_field_group/ChoiceFieldGroup.vue';
import ChoiceField from '../src/components/choice_field_group/ChoiceField.vue';

describe('ChoiceFieldGroup', () => {
  const defaultSlot = [
    '<choice-field value=0 />',
    '<choice-field value=1 />',
    '<choice-field value=2 disabled />',
  ]

  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.component('choice-field', ChoiceField);

    wrapper = mount(ChoiceFieldGroup, {
      slots: {
        default: defaultSlot,
        title: 'title'
      },

      mocks: {
        $fabric: fabric
      },

      localVue
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-ChoiceFieldGroup')).toBeTruthy();
    expect(wrapper.find('.ms-ChoiceFieldGroup-title').text()).toBe('title');
    expect(wrapper.findAll('.ms-RadioButton').length).toBe(defaultSlot.length);
  });

  test('should render a value when selected', () => {
    const inputEvent = jest.fn();
    wrapper.vm.$on('input', inputEvent);

    wrapper.findAll('.ms-RadioButton label').at(0).trigger('click')
    expect(inputEvent).toBeCalledWith('0');

    wrapper.findAll('.ms-RadioButton label').at(1).trigger('click')
    expect(inputEvent).toBeCalledWith('1');
  });

  test('should can set selected status by value', () => {
    wrapper.setProps({ value: '1' });
    expect(wrapper.findAll('.ms-RadioButton label').at(1).classes()).toContain('is-checked');
    expect(wrapper.findAll('.ms-RadioButton label').at(0).classes()).not.toContain('is-checked');

    wrapper.setProps({ value: '0' });
    expect(wrapper.findAll('.ms-RadioButton label').at(0).classes()).toContain('is-checked');
    expect(wrapper.findAll('.ms-RadioButton label').at(1).classes()).not.toContain('is-checked');
  });

  test('should can set choice_field to be disabled', () => {
    const inputEvent = jest.fn();
    wrapper.vm.$on('input', inputEvent);

    wrapper.findAll('.ms-RadioButton label').at(2).trigger('click')
    expect(inputEvent).not.toBeCalled();
  });
});
