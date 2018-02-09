import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import Spinner from '../src/components/spinner/Spinner.vue';

describe('Spinner', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Spinner, {
      propsData: {
        label: 'label'
      },

      mocks: {
        $fabric: fabric
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-Spinner')).toBeTruthy();
    expect(wrapper.find('.ms-Spinner-label').text()).toBe('label');
  });
});
