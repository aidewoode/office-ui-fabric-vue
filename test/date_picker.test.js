import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import DatePicker from '../src/components/date_picker/DatePicker.vue';

describe('DatePicker', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(DatePicker, {
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
    expect(wrapper.contains('.ms-DatePicker')).toBeTruthy();
    expect(wrapper.find('.ms-Label').text()).toBe('label');
  });

  test('should return date when select a date', () => {
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);
    wrapper.setProps({ value: '2018-01-01'});
    wrapper.element.querySelector('.ms-DatePicker-table tbody tr:first-child td:last-child div').click();

    expect(inputEvent).toBeCalledWith('2018-01-06');
  });

  test('should can set date by value', () => {
    wrapper.setProps({ value: '2018-01-01'});
    expect(wrapper.find('.ms-TextField-field').element.value).toBe('1 January, 2018');

    wrapper.setProps({ value: ''});
    expect(wrapper.find('.ms-TextField-field').element.value).toBe('');
  });

  test('should can change date format', () => {
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);
    wrapper.setProps({ format: 'yyyy/mm/dd'});
    wrapper.setProps({ value: '2018-01-01'});

    expect(inputEvent).toBeCalledWith('2018/01/01');
  });
});
