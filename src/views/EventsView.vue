<template>
  <div class="events-view">
    <header>
      <div class="header-container">
        <h1>Events</h1>
        <div class="actions">
          <input type="text" placeholder="Search events..." />
          <button>Create new event</button>
        </div>
      </div>
    </header>
    <div class="event-cards">
      <EventCard v-for="event in events" :key="event.id" :title="event.title" :date="event.date" :image="event.image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EventCard from '@/components/EventCard.vue'

interface Event {
  id: number
  title: string
  date: string
  image: string
}

const events = ref<Event[]>([
  {
    id: 1,
    title: 'Beyond the Valley 2020',
    date: 'Melbourne, Sat 29th Jan 2020',
    image: '/src/assets/event-image.png'
  },
  {
    id: 2,
    title: 'Beyond the Valley 2019 Summer Sessions',
    date: 'Melbourne, Sat 29th Jan 2019',
    image: '/src/assets/event-image.png'
  },
  {
    id: 3,
    title: 'Beyond the Valley 2018 Spring',
    date: 'Melbourne, Sat 28th Sep 2018',
    image: '/src/assets/event-image.png'
  },
  {
    id: 4,
    title: 'Beyond the Valley 2017 Summer',
    date: 'Melbourne, Sat 29th Nov 2017',
    image: '/src/assets/event-image.png'
  },
  {
    id: 5,
    title: 'Beyond the Valley Winter Festival 2017',
    date: 'Melbourne, Sat 20th Jun 2017',
    image: '/src/assets/event-image.png'
  },
  {
    id: 6,
    title: 'Beyond the Valley 2017',
    date: 'Melbourne, Sat 29th Jan 2017',
    image: '/src/assets/event-image.png'
  },
  {
    id: 7,
    title: 'Beyond the Valley 2016',
    date: 'Melbourne, Sat 29th Jan 2016',
    image: '/src/assets/event-image.png'
  },
  {
    id: 8,
    title: 'Beyond the Valley 2015',
    date: 'Melbourne, Sat 29th Jan 2015',
    image: '/src/assets/event-image.png'
  },
  {
    id: 9,
    title: 'Beyond the Valley 2014',
    date: 'Melbourne, Sat 29th Jan 2014',
    image: '/src/assets/event-image.png'
  },
  {
    id: 10,
    title: 'Beyond the Valley 2013',
    date: 'Melbourne, Sat 29th Jan 2013',
    image: '/src/assets/event-image.png'
  },
  {
    id: 11,
    title: 'Beyond the Valley 2012',
    date: 'Melbourne, Sat 29th Jan 2012',
    image: '/src/assets/event-image.png'
  },
  {
    id: 12,
    title: 'Beyond the Valley 2011',
    date: 'Melbourne, Sat 29th Jan 2011',
    image: '/src/assets/event-image.png'
  },
  {
    id: 13,
    title: 'Beyond the Valley 2010',
    date: 'Melbourne, Sat 29th Jan 2010',
    image: '/src/assets/event-image.png'
  }
])
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-left: 70px;
  padding-right: 70px;
}

.actions {
  display: flex;
  align-items: center;

  input {
    margin-right: 10px;
    padding: 5px;
  }

  button {
    padding: 5px 10px;
  }
}

h1 {
  font-size: 32px;
  margin: 0;
}

.event-cards {
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
