import Home from './components/Home.vue';
import GetStarted from './components/GetStarted.vue';
import AllUIComponents from './ui-components';

export default function (VueRouter) {
  const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/GetStarted', name: 'GetStarted', component: GetStarted }
  ];

  Object.keys(AllUIComponents).forEach((componentName) => {
    routes.push({
      path: `/components/${componentName}`,
      name: `components-${componentName}`,
      component: AllUIComponents[componentName]
    });
  });

  return new VueRouter({
    routes
  });
}
