import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { nextTick } from 'vue';
import Toast from '@/components/shared/Toast.vue';

describe('Toast component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('prop: correct text message when isError equals true', async () => {
    const wrapper = mount(Toast, {
      props: {
        isError: true,
        message: 'Test error message',
        type: 'error',
      },
    });

    await nextTick();

    expect(wrapper.isVisible()).toBe(true);
    expect(wrapper.text()).toContain('Test error message');
    expect(wrapper.find('.toast').classes()).toContain('error');
  });

  it('prop: not render the toast when isError is false', () => {
    const wrapper = mount(Toast, {
      props: {
        isError: false,
        message: 'Test error message',
      },
    });

    expect(wrapper.find('.toast').exists()).toBe(false);
  });

  it('prop: hides the toast after the duration', async () => {
    const wrapper = mount(Toast, {
      props: {
        isError: true,
        message: 'Test error message',
        duration: 1000,
      },
    });

    await nextTick();
    expect(wrapper.find('.toast').exists()).toBe(true);

    vi.advanceTimersByTime(1000);
    await nextTick();
    expect(wrapper.find('.toast').exists()).toBe(false);
  });

  it('prop: defaults props when not provided', () => {
    const wrapper = mount(Toast, {
      props: {
        isError: true,
        message: 'Test message',
      },
    });

    expect(wrapper.props('duration')).toBe(3000);
    expect(wrapper.props('type')).toBe('error');
  });
});
