<template>
  <div class="events-view">
    <header>
      <div class="header-container">
        <h1>Events</h1>
        <div class="actions">
          <InputText
            placeholder="Search 9 events..."
            v-model="searchQuery"
            @update:modelValue="handleSearch"
          />
          <Button @click="openModal">
            <span>Create</span> <span class="desktop">new event</span>
          </Button>
        </div>
      </div>
    </header>
    <div v-if="filteredEvents && filteredEvents.length > 0" class="event-cards">
      <EventCard
        v-for="(event, index) in filteredEvents"
        :key="event.id"
        :title="event.title"
        :date="event.date"
        :location="event.location"
        :image="event.image"
        :class="{ 'last-card': index === filteredEvents.length - 1 }"
      />
    </div>
    <LoadingSpinner v-else-if="isLoading" />
    <div v-else class="no-results-text">No results</div>
    <Toast v-if="isError" isError :message="errorMessage" />

    <Modal :isOpen="isModalOpen" @close="closeModal">
      <h2 class="modal-title">Create New Event</h2>
      <form @submit.prevent="saveEvent" class="event-form">
        <div class="form-group">
          <label for="title">Title:</label>
          <input id="title" v-model="newEvent.title" required />
        </div>
        <div class="form-group">
          <label for="date">Date:</label>
          <input id="date" v-model="newEvent.date" type="date" required />
        </div>
        <div class="form-group">
          <label for="location">Location:</label>
          <input id="location" v-model="newEvent.location" required />
        </div>
        <Button type="submit" class="save-button">Save Event</Button>
      </form>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import EventCard from '@/components/EventCard.vue';
import InputText from '@/components/shared/InputText.vue';
import Button from '@/components/shared/Button.vue';
import LoadingSpinner from '@/components/shared/LoadingSpinner.vue';
import Modal from '@/components/shared/Modal.vue';
import { fetchData } from '../../mock/api';
import { formatDate } from '@/utils/index';
import Toast from '@/components/shared/Toast.vue';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

const searchQuery = ref<string>('');
const isLoading = ref<boolean>(false);
const events = ref<Event[]>([]);
const isError = ref<boolean>(false);
const errorMessage = ref<string>('');
const isModalOpen = ref<boolean>(false);
const newEvent = ref<Event>({
  id: 0,
  title: '',
  date: '',
  location: '',
  image: '/src/assets/images/event-image.png',
});

onMounted(async () => {
  isLoading.value = true;
  try {
    events.value = await fetchData();
  } catch (error) {
    isError.value = true;
    errorMessage.value = 'Error has occurred:' + error;
    console.error('Error has occurred:', error);
  } finally {
    isLoading.value = false;
  }
});

const filteredEvents = computed(() => {
  if (!searchQuery.value) return events.value;
  const lowercaseQuery = searchQuery.value.toLowerCase();
  return (
    events.value.filter(
      (event) =>
        event.title.toLowerCase().includes(lowercaseQuery) ||
        event.date.toLowerCase().includes(lowercaseQuery),
    ) || []
  );
});

const handleSearch = (query: string) => {
  searchQuery.value = query;
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  newEvent.value = {
    title: '',
    date: '',
    location: '',
    image: '/src/assets/images/event-image.png',
    id: 0,
  };
};

const saveEvent = () => {
  const formattedDate = formatDate(newEvent.value.date);

  const event: Event = {
    ...newEvent.value,
    id: Date.now(),
    date: formattedDate,
  };
  events.value.push(event);
  closeModal();
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

.modal-title {
  font-size: $font-size-title;
  color: $primary-color;
  margin-top: 0;
}

.event-form {
  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: $font-weight-medium;
    }

    input {
      width: 100%;
      padding: 8px;
      border: 1px solid $border-color;
      border-radius: 4px;
      font-size: $font-size-medium;
      font-family: $font-family;
    }
  }

  .save-button {
    margin-top: 20px;
    width: 100%;
  }
}

@media (max-width: $medium-breakpoint) {
  .event-form {
    .form-group {
      input {
        font-size: $font-size-base;
      }
    }
  }
}
</style>
