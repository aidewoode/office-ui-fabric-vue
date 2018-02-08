import { mount, createLocalVue } from 'vue-test-utils';

import OrgChart from '../src/components/org_chart/OrgChart.vue';
import OrgChartGroup from '../src/components/org_chart/OrgChartGroup.vue';
import OrgChartGroupItem from '../src/components/org_chart/OrgChartGroupItem.vue';

describe('OrgChart', () => {
  let wrapper;

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    const localVue = createLocalVue();

    localVue.component('org-chart-group', OrgChartGroup);
    localVue.component('org-chart-group-item', OrgChartGroupItem);

    wrapper = mount(OrgChart, {
      slots: {
        default: `
          <org-chart-group title='title'>
            <org-chart-group-item>OrgChartGroupItem</org-chart-group-item>
            <org-chart-group-item>OrgChartGroupItem</org-chart-group-item>
          </org-chart-group>
        `
      },

      localVue
    });

    expect(wrapper.contains('.ms-OrgChart')).toBeTruthy();
    expect(wrapper.find('.ms-OrgChart-groupTitle').text()).toBe('title');
    expect(wrapper.find('.ms-OrgChart-listItemBtn').text()).toBe('OrgChartGroupItem');
  });

  test('should has click event on org chart group item', () => {
    const clickEvent = jest.fn();

    wrapper = mount(OrgChartGroupItem);
    wrapper.vm.$on('click', clickEvent);
    wrapper.find('.ms-OrgChart-listItemBtn').trigger('click');

    expect(clickEvent).toBeCalled();
  });
});
