import OrgChart from './OrgChart.vue';
import OrgChartGroup from './OrgChartGroup.vue';
import OrgChartGroupItem from './OrgChartGroupItem.vue';

export default function (Vue) {
  Vue.component(OrgChart.name, OrgChart);
  Vue.component(OrgChartGroup.name, OrgChartGroup);
  Vue.component(OrgChartGroupItem.name, OrgChartGroupItem);
}
