import { mount, createLocalVue } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import Dropdown from '../src/components/dropdown/Dropdown.vue';
import DropdownItem from '../src/components/dropdown/DropdownItem.vue';

describe('Dropdown', () => {
  const defaultSlot = [
    '<dropdown-item value=0 >0</dropdown-item>',
    '<dropdown-item value=1 >1</dropdown-item>',
    '<dropdown-item value=2 >2</dropdown-item>',
  ];

  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.component('dropdown-item', DropdownItem);

    wrapper = mount(Dropdown, {
      propsData: {
        label: 'label'
      },

      slots: {
        default: defaultSlot
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
    expect(wrapper.contains('.ms-Dropdown')).toBeTruthy();
    expect(wrapper.find('.ms-Label').text()).toBe('label');
    expect(wrapper.findAll('.ms-Dropdown-select option').length).toBe(defaultSlot.length);
  });

  test('should return a value when selected', () => {
    const rootElement = wrapper.element;
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);
    rootElement.querySelectorAll('.ms-Dropdown-item')[1].click();

    expect(rootElement.querySelector('.ms-Dropdown-title').textContent).toBe('1');
    expect(inputEvent).toBeCalledWith('1');
  });

  test('should can set selected status by value', () => {
    wrapper.setProps({ value: '1' });
    const dropdownItems = wrapper.element.querySelectorAll('.ms-Dropdown-item');

    expect(wrapper.element.querySelector('.ms-Dropdown-title').textContent).toBe('1');
    expect(dropdownItems[1].classList.contains('is-selected')).toBeTruthy();
    expect(dropdownItems[0].classList.contains('is-selected')).toBeFalsy();
    expect(dropdownItems[2].classList.contains('is-selected')).toBeFalsy();
  });
});
