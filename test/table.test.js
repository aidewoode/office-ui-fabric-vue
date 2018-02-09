import { mount, createLocalVue } from 'vue-test-utils';

import Table from '../src/components/table/Table.vue';
import TableColumn from '../src/components/table/TableColumn.vue';

describe('Table', () => {
  const defaultSlot = [
    "<table-column prop='name'>Name</table-column>",
    "<table-column prop='age'>Age</table-column>",
  ];

  const tableData = [
    { name: 'Ed', age: '24' },
    { name: 'Jack', age: '30' },
    { name: 'Blues', age: '51' },
  ];

  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    localVue.component('table-column', TableColumn);

    wrapper = mount(Table, {
      propsData: {
        data: tableData
      },

      slots: {
        default: defaultSlot,
      },

      localVue
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    const tableColumnProps = ['name', 'age']

    expect(wrapper.contains('.ms-Table')).toBeTruthy();
    expect(wrapper.findAll('th').length).toBe(defaultSlot.length);
    expect(wrapper.findAll('tbody tr').length).toBe(tableData.length);
    expect(wrapper.findAll('th').at(0).text()).toBe('Name');
    expect(wrapper.findAll('th').at(1).text()).toBe('Age');

    wrapper.element.querySelectorAll('tbody tr').forEach((trElement, trIndex) => {
      trElement.childNodes.forEach((tdElement, tdIndex) => {
        expect(tdElement.textContent.trim()).toBe(tableData[trIndex][tableColumnProps[tdIndex]]);
      });
    });
  });
});
