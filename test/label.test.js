import { mount } from 'vue-test-utils';

import Label from '../src/components/label/Label.vue';

describe('Label', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Label, {
      slots: {
        default: 'label'
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-Label')).toBeTruthy();
    expect(wrapper.text()).toBe('label');
  });
});
