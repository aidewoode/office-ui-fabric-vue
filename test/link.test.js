import { mount } from 'vue-test-utils';

import Link from '../src/components/link/Link.vue';

describe('Link', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Link, {
      propsData: {
        href: 'http://example.com',
        title: 'example.com'
      },

      slots: {
        default: 'link'
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-Link')).toBeTruthy();
    expect(wrapper.text()).toBe('link');
    expect(wrapper.attributes().href).toBe('http://example.com');
    expect(wrapper.attributes().title).toBe('example.com');
  });

  test('should has click event', () => {
    const clickEvent = jest.fn();

    wrapper.vm.$on('click', clickEvent);
    wrapper.trigger('click');

    expect(clickEvent).toBeCalled();
  });
});
