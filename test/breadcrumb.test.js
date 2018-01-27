import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import Breadcrumb from '../src/components/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '../src/components/breadcrumb/BreadcrumbItem.vue';

describe('Breadcrumb', () => {
  let wrapper = mount(Breadcrumb, {
    slots: {
      default: [BreadcrumbItem, BreadcrumbItem]
    },

    mocks: {
      $fabric: fabric
    }
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-Breadcrumb')).toBeTruthy();

    // the BreadcrumbItem component contains the element which class is ms-Breadcrumb-listItem.
    expect(wrapper.findAll('.ms-Breadcrumb-listItem').length).toBe(2);
  });
});
