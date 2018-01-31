import { mount } from 'vue-test-utils';
import Button from '../src/components/button/Button.vue';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Button, {
      slots: {
        default: 'button'
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-Button')).toBeTruthy();
    expect(wrapper.find('.ms-Button-label').text()).toBe('button');
  });

  test('should can be disabled', () => {
    const clickEvent = jest.fn();

    wrapper.vm.$on('click', clickEvent);
    wrapper.setProps({ disabled: true });
    wrapper.trigger('click');

    expect(clickEvent).not.toBeCalled();
  });

  test('should has click event', () => {
    const clickEvent = jest.fn();

    wrapper.vm.$on('click', clickEvent);
    wrapper.trigger('click');

    expect(clickEvent).toBeCalled();
  });

  test('should can add icon only for hero button', () => {
    const otherTypes = ['primary', 'compound', 'small'];
    wrapper.setProps({ icon: 'Add' });

    otherTypes.forEach((type) => {
      wrapper.setProps({ type });
      expect(wrapper.contains('.ms-Icon')).toBeFalsy();
    });

    wrapper.setProps({ type: 'hero'});
    expect(wrapper.contains('.ms-Icon')).toBeTruthy();
  })

  test('should can add description only for compound button', () => {
    const otherTypes = ['primary', 'hero', 'small'];
    wrapper.setProps({ description: 'test' });

    otherTypes.forEach((type) => {
      wrapper.setProps({ type });
      expect(wrapper.contains('.ms-Button-description')).toBeFalsy();
    });

    wrapper.setProps({ type: 'compound'});
    expect(wrapper.contains('.ms-Button-description')).toBeTruthy();
  });
});
