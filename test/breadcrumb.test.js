import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import Breadcrumb from '../src/components/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '../src/components/breadcrumb/BreadcrumbItem.vue';

describe('Breadcrumb', () => {
  const defaultSlot = [BreadcrumbItem, BreadcrumbItem];

  const wrapper = mount(Breadcrumb, {
    slots: {
      default: defaultSlot
    },

    mocks: {
      $fabric: fabric
    }
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-Breadcrumb')).toBeTruthy();
    expect(wrapper.findAll('.ms-Breadcrumb-listItem').length).toBe(defaultSlot.length);
  });
});
