import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import ProgressIndicator from '../src/components/progress_indicator/ProgressIndicator.vue';

describe('ProgressIndicator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ProgressIndicator, {
      propsData: {
        percent: 0.9,
        name: 'example',
        description: 'example'
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
    expect(wrapper.contains('.ms-ProgressIndicator')).toBeTruthy();
    expect(wrapper.find('.ms-ProgressIndicator-itemName').text()).toBe('example');
    expect(wrapper.find('.ms-ProgressIndicator-itemDescription').text()).toBe('example');
  });
});
