<template>
  <div class="event-card" @mouseenter="showHover" @mouseleave="hideHover">
    <div class="event-image-container">
      <img :src="image" alt="Event" class="event-image" />
      <div v-if="isHovering" class="hover-overlay">
        <button class="hover-button">View event</button>
      </div>
      <div class="event-icon-container">
        <Icon class="event-icon" />
      </div>
    </div>
    <div class="event-details">
      <div class="event-title">{{ title }}</div>
      <p class="event-date">{{ date }}</p>
    </div>
    <div class="menu-icon">
      <div class="menu-icon-toggle" @click="toggleMenu">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <div v-if="isMenuVisible" class="menu">
        <ul>
          <li>Create campaign</li>
          <li>Import ticket sales</li>
          <li>Edit event details</li>
          <li>Merge event</li>
          <li>Delete event</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from './icon.svg'

const props = defineProps<{
  title: string
  date: string
  image: string
}>()

const isHovering = ref(false)
const isMenuVisible = ref(false)

const showHover = () => {
  isHovering.value = true
}

const hideHover = () => {
  isHovering.value = false
}

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}
</script>

<style scoped lang="scss">
.event-card {
  width: 380px;
  border: 1px solid #dcdee4;
  border-radius: 4px;
  // overflow: hidden;
  transition: transform 0.2s;

  position: relative;

  &:hover {
    box-shadow: 2px 0px 40px 0px rgba(0, 0, 0, 0.2);
  }

  .event-image-container {
    position: relative;
    border-bottom: 1px solid #666666;
    display: flex;

    .event-image {
      width: 100%;
      height: auto;
    }

    .hover-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;

      .hover-button {
        background: none;
        border: 1px solid white;
        color: white;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition:
          background-color 0.3s,
          color 0.3s;

        &:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }

  .menu-icon {
    .menu-icon-toggle {
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 4px;
      height: 16px;
      cursor: pointer;

      .dot {
        width: 4px;
        height: 4px;
        background-color: #ffffff;
        border-radius: 50%;
      }
    }
  }

  .event-details {
    padding: 30px;
  }

  .event-title {
    font-size: $font-size-large;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .event-date {
    font-size: $font-size-medium;
    color: #8e97a6;
    margin-top: 14px;
    margin-bottom: 0;
  }

  .event-icon-container {
    position: absolute;
    bottom: -20px;
    left: 30px;

    .event-icon {
    }
  }
}
</style>
