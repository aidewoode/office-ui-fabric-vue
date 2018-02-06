import { mount, createLocalVue } from 'vue-test-utils';
import Vue from 'vue';

import fabric from '../lib/office-ui-fabric';
import ContextualMenu from '../src/components/contextual_menu/ContextualMenu.vue';
import ContextualMenuItem from '../src/components/contextual_menu/ContextualMenuItem.vue';

describe('ContextualMenu', () => {
  let wrapper;

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    const listSlot = [ContextualMenuItem, ContextualMenuItem];

    wrapper = mount(ContextualMenu, {
      slots: {
        default: "<button id='trigger-button'></button>",
        list: listSlot
      },

      mocks: {
        $fabric: fabric
      }
    });

    expect(wrapper.contains('#trigger-button')).toBeTruthy();
    expect(wrapper.contains('.ms-ContextualMenu')).toBeTruthy();
    expect(wrapper.findAll('.ms-ContextualMenu-item').length).toBe(listSlot.length);
  });

  test('should display contextual menu when click trigger', () => {
    wrapper = mount(ContextualMenu, {
      slots: {
        default: "<button id='trigger-button'></button>",
        list: [ContextualMenuItem, ContextualMenuItem]
      },

      mocks: {
        $fabric: fabric
      }
    });

    expect(wrapper.find('.ms-ContextualMenu').classes()).toContain('is-hidden');

    wrapper.find('#trigger-button').trigger('click');
    expect(wrapper.find('.ms-ContextualMenu').classes()).not.toContain('is-hidden');
  });

  test('should return a value only for multiselect contextual menu when selected', () => {
    const inputEvent = jest.fn();
    const localVue = createLocalVue();

    localVue.component('contextual-menu-item', ContextualMenuItem);

    wrapper = mount(ContextualMenu, {
      slots: {
        default: "<button id='trigger-button'></button>",
        list: [
          '<contextual-menu-item value=0 />',
          '<contextual-menu-item value=1 />',
        ]
      },

      mocks: {
        $fabric: fabric
      },

      localVue
    });

    wrapper.vm.$on('input', inputEvent);
    wrapper.find('#trigger-button').trigger('click');

    wrapper.findAll('.ms-ContextualMenu-item a').at(0).trigger('click')
    expect(inputEvent).not.toBeCalled();

    wrapper.setProps({ type: 'multiselect' });
    wrapper.findAll('.ms-ContextualMenu-item a').at(0).trigger('click')
    expect(inputEvent).toBeCalledWith(['0']);
  });

  test('should can set selected status by value only for multiselect type', () => {
    const localVue = createLocalVue();

    localVue.component('contextual-menu-item', ContextualMenuItem);

    wrapper = mount(ContextualMenu, {
      slots: {
        list: [
          '<contextual-menu-item value=0 />',
          '<contextual-menu-item value=1 />',
          '<contextual-menu-item value=2 />',
        ]
      },

      mocks: {
        $fabric: fabric
      },

      localVue
    });

    wrapper.setProps({ value: ['0', '2'], type: 'multiselect' });
    wrapper.update();

    expect(wrapper.findAll('.ms-ContextualMenu-item a').at(0).classes()).toContain('is-selected');
    expect(wrapper.findAll('.ms-ContextualMenu-item a').at(2).classes()).toContain('is-selected');
    expect(wrapper.findAll('.ms-ContextualMenu-item a').at(1).classes()).not.toContain('is-selected');
  })

  test('should has click event only for default contextual menu item', () => {
    const otherTypes = ['divider', 'header', 'hasMenu'];
    const clickEvent = jest.fn();

    wrapper = mount(ContextualMenuItem, {
      mocks: {
        eventHub: new Vue()
      }
    });

    wrapper.vm.$on('click', clickEvent);

    otherTypes.forEach((type) => {
      wrapper.setProps({ type });

      if (wrapper.find('.ms-ContextualMenu-link').exists()) {
        wrapper.find('.ms-ContextualMenu-link').trigger('click');
        expect(clickEvent).not.toBeCalled();
      }
    });

    wrapper.setProps({ type: ''});
    wrapper.find('.ms-ContextualMenu-link').trigger('click');
    wrapper.trigger('click');

    expect(clickEvent).toBeCalled();
  });

  test('should can be disabled only for default contextual menu item', () => {
    const clickEvent = jest.fn();

    wrapper = mount(ContextualMenuItem, {
      mocks: {
        eventHub: new Vue()
      }
    });

    wrapper.vm.$on('click', clickEvent);
    wrapper.setProps({ disabled: true });
    wrapper.find('.ms-ContextualMenu-link').trigger('click');

    expect(clickEvent).not.toBeCalled();
  });
});
