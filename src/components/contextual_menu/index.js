import ContextualMenu from './ContextualMenu.vue';
import ContextualMenuItem from './ContextualMenuItem.vue';

export default function (Vue) {
  Vue.component('ou-contextual-menu', ContextualMenu);
  Vue.component('ou-contextual-menu-item', ContextualMenuItem);
}
