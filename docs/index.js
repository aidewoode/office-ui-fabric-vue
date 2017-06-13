import Vue from 'vue';
import VueRouter from 'vue-router';

import OfficeUIFabricVue from '../src';
import App from './app.vue';
import Routes from './routes';


const AllComponentsName = [
  'Breadcrumb',
  'Button',
  'Callout',
  'CheckBox',
  'ChoiceFieldGroup',
  'CommandBar',
  'CommandButton',
  'ContextualMenu',
  'DatePicker',
  'Dialog',
  'Dropdown',
  'FacePile',
  'Label',
  'Link',
  'List',
  'ListItem',
  'MessageBanner',
  'MessageBar',
  'OrgChart',
  'Overlay',
  'Panel',
  'PeoplePicker',
  'Persona',
  'PersonaCard',
  'Pivot',
  'ProgressIndicator',
  'SearchBox',
  'Spinner',
  'Table',
  'TextField',
  'Toggle'
];

const router = Routes(VueRouter, AllComponentsName);

Vue.use(OfficeUIFabricVue);
Vue.use(VueRouter);

// inject a instance methods, so can get AllComponentsName in any components
Vue.prototype.$allComponentsName = AllComponentsName;

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
