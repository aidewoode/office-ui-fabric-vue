import breadcrumbInstaller from './components/breadcrumb';
import buttonInstaller from './components/button';
import tableInstaller from './components/table';

export default function (Vue) {
  breadcrumbInstaller(Vue);
  buttonInstaller(Vue);
  tableInstaller(Vue);
}
