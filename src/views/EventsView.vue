<template>
  <div class="events-view">
    <header>
      <div class="header-container">
        <h1>Events</h1>
        <div class="actions">
          <InputText placeholder="Search 9 events..." v-model="searchQuery" @update:modelValue="handleSearch" />
          <Button>
            <span>Create</span> <span class="desktop">new event</span>
          </Button>
        </div>
      </div>
    </header>
    <div v-if="filteredEvents && filteredEvents.length > 0" class="event-cards">
      <EventCard v-for="(event, index) in filteredEvents" :key="event.id" :title="event.title" :date="event.date"
        :image="event.image" :class="{ 'last-card': index === filteredEvents.length - 1 }" />
    </div>
    <LoadingSpinner v-else-if="isLoading" />
    <div v-else class="no-results-text">No results</div>
    <Toast v-if="isError" isError :message="errorMessage" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import EventCard from '@/components/EventCard.vue';
import InputText from '@/components/shared/ui/InputText.vue';
import Button from '@/components/shared/ui/Button.vue';
import LoadingSpinner from '@/components/shared/ui/LoadingSpinner.vue'
import { fetchData } from '../../mock/api';
import Toast from '@/components/shared/ui/Toast.vue';

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
}
const searchQuery = ref<string>('');
const isLoading = ref<boolean>(false);
const events = ref<Event[]>([]);
const isError = ref<boolean>(false)
const errorMessage = ref<string>('')

onMounted(async () => {
  isLoading.value = true;
  try {
    events.value = await fetchData();
  } catch (error) {
    isError.value = true;
    errorMessage.value = 'Error has occurred:', error;
    console.error('Error has occurred:', error);
  } finally {
    isLoading.value = false;
  }
});

const filteredEvents = computed(() => {
  if (!searchQuery.value) return events.value;
  const lowercaseQuery = searchQuery.value.toLowerCase();
  return events.value.filter(
    (event) =>
      event.title.toLowerCase().includes(lowercaseQuery) ||
      event.date.toLowerCase().includes(lowercaseQuery),
  ) || [];
});

const handleSearch = (query: string) => {
  searchQuery.value = query;
};
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

.no-results-text {
  text-align: center;
  padding: 30px;
  font-size: $font-size-large;
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
