import { mount } from 'vue-test-utils';
import List from '../src/components/list/List.vue';

describe('List', () => {
  let wrapper;

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    wrapper = mount(List, {
      slots: {
        default: 'lists'
      }
    });

    expect(wrapper.contains('.ms-List')).toBeTruthy();
    expect(wrapper.find('.ms-List').text()).toEqual('lists');
  });
});
