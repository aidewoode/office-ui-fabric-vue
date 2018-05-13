import List from './List.vue';
import ListItem from './ListItem.vue';

export default function (Vue) {
  Vue.component(List.name, List);
  Vue.component(ListItem.name, ListItem);
}
