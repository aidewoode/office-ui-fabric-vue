import Vue from 'vue';
import VueRouter from 'vue-router';

import OfficeUIFabricVue from '../src';
import App from './app.vue';
import Routes from './routes';

import DocsContent from './components/DocsContent.vue';
import DocsCodeBlock from './components/DocsCodeBlock.vue';
import DocsPropsTable from './components/DocsPropsTable.vue';
import DocsEventsTable from './components/DocsEventsTable.vue';
import DocsSlotTable from './components/DocsSlotTable.vue';

Vue.use(OfficeUIFabricVue);
Vue.use(VueRouter);

Vue.component('docs-content', DocsContent);
Vue.component('docs-code-block', DocsCodeBlock);
Vue.component('docs-props-table', DocsPropsTable);
Vue.component('docs-events-table', DocsEventsTable);
Vue.component('docs-slot-table', DocsSlotTable);

const router = Routes(VueRouter);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
