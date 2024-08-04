<template>
  <div class="events-view">
    <header>
      <div class="header-container">
        <h1>Events</h1>
        <div class="actions">
          <InputText placeholder="Search 9 events..." />
          <Button><span>Create</span> <span class="desktop">new event</span></Button>
        </div>
      </div>
    </header>
    <div class="event-cards">
      <EventCard v-for="(event, index) in events" :key="event.id" :title="event.title" :date="event.date"
        :image="event.image" :class="{ 'last-card': index === events.length - 1 }" />
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
.events-view {
  font-family: $font-family;
}

.header-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-left: 70px;
  margin-right: 70px;
  border-bottom: 1px solid $border-color;
  padding-bottom: 33px;
  padding-top: 42px;
}

.actions {
  display: flex;
  align-content: baseline;
}

h1 {
  font-size: $font-size-title;
  line-height: 40px;
  margin: 0;
  font-weight: $font-weight-normal;
}

.event-cards {
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 33px;
  padding-bottom: 42px;

  .last-card {
    position: relative;
    left: -213px;
  }
}

@media (max-width: $medium-breakpoint) {
  .header-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .actions {
    width: 100%;
  }

  .button-icon,
  .desktop {
    display: none;
  }
}

@media (max-width: $extra-small-breakpoint) {
  .header-container {
    margin-left: 0;
    margin-right: 0;
    padding-top: 30px;
  }
}

@media (max-width: 840px) {
  .event-cards .last-card {
    position: inherit;
  }
}

@media (min-width: 1266px) {
  .event-cards .last-card {
    position: inherit;
  }
}
</style>