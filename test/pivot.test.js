import { mount, createLocalVue } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import Pivot from '../src/components/pivot/Pivot.vue';
import PivotItem from '../src/components/pivot/PivotItem.vue';

describe('Pivot', () => {
  const defaultSlot = [
    '<pivot-item label=0>0</pivot-item>',
    '<pivot-item label=1>1</pivot-item>',
    '<pivot-item label=2>2</pivot-item>'
  ];

  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    localVue.component('pivot-item', PivotItem);

    wrapper = mount(Pivot, {
      slots: {
        default: defaultSlot
      },

      mocks: {
        $fabric: fabric
      },

      localVue,

      attachToDocument: true
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-Pivot')).toBeTruthy();
    expect(wrapper.findAll('.ms-Pivot-content').at(0).text()).toBe('0');
    expect(wrapper.findAll('.ms-Pivot-link').at(0).text()).toBe('0');
    expect(wrapper.findAll('.ms-Pivot-content').length).toBe(defaultSlot.length);
  });

  test('should switch content when click pivot link', () => {
   wrapper.findAll('.ms-Pivot-link').at(1).trigger('click');

   expect(wrapper.findAll('.ms-Pivot-content').at(1).hasStyle('display', 'block')).toBeTruthy();
   expect(wrapper.findAll('.ms-Pivot-content').at(0).hasStyle('display', 'none')).toBeTruthy();
   expect(wrapper.findAll('.ms-Pivot-content').at(2).hasStyle('display', 'none')).toBeTruthy();
  });
});
