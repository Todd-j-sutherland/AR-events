<template>
  <div class="events-view">
    <header>
      <h1>Events</h1>
      <div class="actions">
        <input type="text" placeholder="Search events..." />
        <button>Create new event</button>
      </div>
    </header>
    <div class="event-cards">
      <EventCard v-for="event in events" :key="event.id" :title="event.title" :date="event.date" :image="event.image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EventCard from '@/components/EventCard.vue';

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
}

const events = ref<Event[]>([
  { id: 1, title: 'Beyond the Valley 2020', date: 'Melbourne, Sat 29th Jan 2020', image: '/src/assets/event-image.png' },
]);
</script>

<style scoped lang="scss">
h1 {
  font-size: $font-size-title;
}
</style>