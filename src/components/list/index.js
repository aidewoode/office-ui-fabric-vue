import List from './List.vue';
import ListItem from './ListItem.vue';
import ListActions from './ListActions.vue';
import ListActionItem from './ListActionItem.vue';

export default function (Vue) {
  Vue.component(List.name, List);
  Vue.component(ListItem.name, ListItem);
  Vue.component(ListActions.name, ListActions);
  Vue.component(ListActionItem.name, ListActionItem);
}
