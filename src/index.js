import fabric from '../lib/office-ui-fabric';
import componentsInstaller from './install';

const OfficeUIFabricVue = {
  install(Vue) {
    Vue.prototype.$fabric = fabric;
    componentsInstaller(Vue);
  }
};

export default OfficeUIFabricVue;
