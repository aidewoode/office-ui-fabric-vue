import Breadcrumb from './Breadcrumb.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

export default function (Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb);
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
}
