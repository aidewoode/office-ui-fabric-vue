import { mount } from 'vue-test-utils';
import CommandButton from '../src/components/command_button/CommandButton.vue';

describe('CommandButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CommandButton, {
      slots: {
        default: 'button'
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-CommandButton')).toBeTruthy();
    expect(wrapper.find('.ms-CommandButton-label').text()).toBe('button');
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

  test('should can add icon', () => {
    wrapper.setProps({ icon: 'Add' });
    expect(wrapper.contains('.ms-Icon')).toBeTruthy();
  });
});
