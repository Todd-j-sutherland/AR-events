import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomButton from '../Button.vue';
import TargetIcon from '@/assets/images/circle-cross.svg';

describe('CustomButton Component', () => {
  it('render: component', () => {
    const wrapper = mount(CustomButton, {
      slots: {
        default: 'I am a button',
      },
    });

    expect(wrapper.find('.custom-button').exists()).toBe(true);
    expect(wrapper.find('.button-icon').exists()).toBe(true);
    expect(wrapper.find('.button-text').text()).toBe('I am a button');
  });

  it('render: TargetIcon component', () => {
    const wrapper = mount(CustomButton);
    expect(wrapper.findComponent(TargetIcon).exists()).toBe(true);
  });

  it('classes: correct classes', () => {
    const wrapper = mount(CustomButton);
    expect(wrapper.classes()).toContain('custom-button');
  });

  it('slot: default content', () => {
    const wrapper = mount(CustomButton, {
      slots: {
        default: '<span>Custom content</span>',
      },
    });
    expect(wrapper.find('.button-text').html()).toContain(
      '<span>Custom content</span>',
    );
  });
});
