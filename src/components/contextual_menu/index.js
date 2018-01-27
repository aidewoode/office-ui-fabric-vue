import ContextualMenu from './ContextualMenu.vue';
import ContextualMenuItem from './ContextualMenuItem.vue';

export default function (Vue) {
  Vue.component(ContextualMenu.name, ContextualMenu);
  Vue.component(ContextualMenuItem.name, ContextualMenuItem);
}
