<template>
  <div class="events-view">
    <header>
      <div class="header-container">
        <h1>Events</h1>
        <div class="actions">
          <!-- <input type="text" placeholder="Search events..." /> -->
          <InputText placeholder="Search 9 events..." />
          <Button>Create new event</Button>
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
import InputText from '@/components/shared/ui/InputText.vue'
import Button from '@/components/shared/ui/Button.vue'

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
  }
])
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-left: 70px;
  margin-right: 70px;
  border-bottom: 1px solid #979797;
  padding-bottom: 33px;
  padding-top: 42px;
}

.actions {
  display: flex;
  align-content: baseline;

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
  padding-top: 33px;
  padding-bottom: 42px
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
  }

  .actions {
    width: 100%;
  }
}
</style>
