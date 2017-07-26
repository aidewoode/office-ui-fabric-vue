import 'office-ui-fabric-js/dist/js/fabric';

// jquery and PickaDate are used for the DatePicker component.
import 'office-ui-fabric-js/dist/lib/jquery';
import 'office-ui-fabric-js/dist/lib/PickaDate';

import componentsInstaller from './install';

const OfficeUIFabricVue = {
  install(Vue) {
    componentsInstaller(Vue);
  }
};

export default OfficeUIFabricVue;
