import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import EventCard from '../EventCard.vue';

describe('EventCard component', () => {
  const defaultProps = {
    title: 'Test Event',
    date: 'July 1, 2024',
    location: 'Test City',
    image: 'test-image.jpg',
  };

  it('render: initial', () => {
    const wrapper = mount(EventCard, { props: defaultProps });

    expect(wrapper.find('.event-card').exists()).toBe(true);
    expect(wrapper.find('.event-image').attributes('src')).toBe(
      'test-image.jpg',
    );
    expect(wrapper.find('.event-title').text()).toBe('Test Event');
    expect(wrapper.find('.event-date').text()).toBe('Test City, July 1, 2024');
  });

  it('event: hides hover overlay and menu on mouseleave', async () => {
    const wrapper = mount(EventCard, { props: defaultProps });

    await wrapper.trigger('mouseenter');
    await wrapper.find('.menu-icon-toggle').trigger('click');
    await wrapper.trigger('mouseleave');

    expect(wrapper.find('.hover-overlay').classes()).not.toContain('opacity-1');
    expect(wrapper.find('.menu').exists()).toBe(false);
  });

  it('event: toggles menu visibility on menu icon click', async () => {
    const wrapper = mount(EventCard, { props: defaultProps });

    await wrapper.find('.menu-icon-toggle').trigger('click');
    expect(wrapper.find('.menu').exists()).toBe(true);

    await wrapper.find('.menu-icon-toggle').trigger('click');
    expect(wrapper.find('.menu').exists()).toBe(false);
  });

  it('event: renders menu items when menu is visible', async () => {
    const wrapper = mount(EventCard, { props: defaultProps });

    await wrapper.find('.menu-icon-toggle').trigger('click');

    const menuItems = wrapper.findAll('.menu ul li');
    expect(menuItems.length).toBe(5);
    expect(menuItems[0].text()).toBe('Create campaign');
    expect(menuItems[1].text()).toBe('Import ticket sales');
    expect(menuItems[2].text()).toBe('Edit event details');
    expect(menuItems[3].text()).toBe('Merge event');
    expect(menuItems[4].text()).toBe('Delete event');
  });
});
