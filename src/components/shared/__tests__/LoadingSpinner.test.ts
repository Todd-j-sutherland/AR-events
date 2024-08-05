import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Spinner from '@/components/shared/LoadingSpinner.vue';

describe('LoadingSpinner.vue', () => {
  it('render: spinner correctly', () => {
    const wrapper = mount(Spinner);

    expect(wrapper.find('.loading-spinner').exists()).toBe(true);

    expect(wrapper.find('.spinner').exists()).toBe(true);
  });
});
