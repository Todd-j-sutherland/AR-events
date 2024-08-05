import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import InputText from '../InputText.vue';
import SearchIcon from '@/assets/images/m-glass.svg';

describe('TextField component', () => {
  it('render: component', () => {
    const wrapper = mount(InputText, {
      props: {
        placeholder: 'Search...',
        type: 'text',
        modelValue: '',
      },
    });

    expect(wrapper.find('.text-field-container').exists()).toBe(true);
    expect(wrapper.find('.input-wrapper').exists()).toBe(true);
    expect(wrapper.findComponent(SearchIcon).exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('prop: correct', () => {
    const wrapper = mount(InputText, {
      props: {
        placeholder: 'Search...',
        type: 'text',
        modelValue: 'Initial Value',
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe('Search...');
    expect(input.attributes('type')).toBe('text');
    expect(input.element.value).toBe('Initial Value');
  });

  it('emits: update:modelValue event on input', async () => {
    const wrapper = mount(InputText, {
      props: {
        modelValue: '',
      },
    });

    await wrapper.find('input').setValue('New Value');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['New Value']);
  });

  it('event: toggles is-active class on focus and blur', async () => {
    const wrapper = mount(InputText, {
      props: {
        modelValue: '',
      },
    });

    const input = wrapper.find('input');

    await input.trigger('focus');
    expect(input.classes()).toContain('is-active');

    await input.trigger('blur');
    expect(input.classes()).not.toContain('is-active');
  });
});
