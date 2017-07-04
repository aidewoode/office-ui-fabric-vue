import breadcrumbInstaller from './components/breadcrumb';
import buttonInstaller from './components/button';
import calloutInstaller from './components/callout';
import checkboxInstaller from './components/checkbox';
import labelInstaller from './components/label';
import linkInstaller from './components/link';
import tableInstaller from './components/table';

export default function (Vue) {
  breadcrumbInstaller(Vue);
  buttonInstaller(Vue);
  calloutInstaller(Vue);
  checkboxInstaller(Vue);
  labelInstaller(Vue);
  linkInstaller(Vue);
  tableInstaller(Vue);
}
