import { mount } from 'vue-test-utils';
1
import fabric from '../lib/office-ui-fabric';
import CommandBar from '../src/components/command_bar/CommandBar.vue';

describe('CommandBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CommandBar, {
      slots: {
        main: 'main',
        side: 'side'
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
    expect(wrapper.contains('.ms-CommandBar')).toBeTruthy();
    expect(wrapper.find('.ms-CommandBar-sideCommands').text()).toBe('side');
    expect(wrapper.find('.ms-CommandBar-mainArea').text()).toBe('main');
  });
});
