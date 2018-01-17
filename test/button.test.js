import { mount } from 'vue-test-utils';
import Button from '../src/components/button/Button.vue';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Button);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('button.ms-Button')).toBeTruthy();
  });

  test('should can be disabled', () => {
    const clickEvent = jest.fn();

    wrapper.vm.$on('click', clickEvent);
    wrapper.setProps({ disabled: true });
    wrapper.trigger('click');

    expect(clickEvent.mock.calls.length).toBe(0);
  });

  test('should has click event', () => {
    const clickEvent = jest.fn();

    wrapper.vm.$on('click', clickEvent);
    wrapper.trigger('click');

    expect(clickEvent.mock.calls.length).toBe(1);
  });

  test('should add icon only for hero button', () => {
    const otherTypes = ['primary', 'compound', 'small'];
    wrapper.setProps({ icon: 'Add' });

    otherTypes.forEach((type) => {
      wrapper.setProps({ type });
      expect(wrapper.contains('.ms-Button-icon')).toBeFalsy();
    });

    wrapper.setProps({ type: 'hero'});
    expect(wrapper.contains('.ms-Button-icon')).toBeTruthy();
  })

  test('should add description only for compound button', () => {
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
