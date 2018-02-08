import { mount } from 'vue-test-utils';

import Persona from '../src/components/persona/Persona.vue';

describe('Persona', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Persona, {
      propsData: {
       src: 'example.png',
       primaryText: 'primaryText',
       secondaryText: 'secondaryText',
       tertiaryText: 'tertiaryText',
       optionalText: 'optionalText'
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-Persona')).toBeTruthy();
    expect(wrapper.find('.ms-Persona-primaryText').text()).toBe('primaryText');
    expect(wrapper.find('.ms-Persona-secondaryText').text()).toBe('secondaryText');
    expect(wrapper.find('.ms-Persona-tertiaryText').text()).toBe('tertiaryText');
    expect(wrapper.find('.ms-Persona-optionalText').text()).toBe('optionalText');
    expect(wrapper.find('.ms-Persona-image').attributes().src).toBe('example.png');
  });
});
