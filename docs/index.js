import Vue from 'vue';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';

import OfficeUIFabricVue from '../src';
import App from './app.vue';
import Routes from './routes';

import DocsContent from './components/DocsContent.vue';
import DocsCodeBlock from './components/DocsCodeBlock.vue';
import DocsTable from './components/DocsTable.vue';

Vue.use(OfficeUIFabricVue);
Vue.use(VueRouter);
Vue.use(VueScrollTo);

Vue.component('docs-content', DocsContent);
Vue.component('docs-code-block', DocsCodeBlock);
Vue.component('docs-table', DocsTable);

const router = Routes(VueRouter);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
