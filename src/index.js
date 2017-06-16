import 'office-ui-fabric-js/dist/js/fabric';
import componentsInstaller from './install';

const OfficeUIFabricVue = {
  install(Vue) {
    componentsInstaller(Vue);
  }
};

export default OfficeUIFabricVue;
