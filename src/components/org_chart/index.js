import OrgChart from './OrgChart.vue';
import OrgChartGroup from './OrgChartGroup.vue';
import OrgChartGroupItem from './OrgChartGroupItem.vue';

export default function (Vue) {
  Vue.component('ou-org-chart', OrgChart);
  Vue.component('ou-org-chart-group', OrgChartGroup);
  Vue.component('ou-org-chart-group-item', OrgChartGroupItem);
}
