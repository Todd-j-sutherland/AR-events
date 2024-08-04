<template>
  <div class="event-card" @mouseenter="showHover" @mouseleave="hideHoverAndMenu">
    <div class="event-image-container">
      <img :src="image" alt="Event" class="event-image" />
      <div class="hover-overlay">
        <button class="hover-button">View event</button>
      </div>
      <div class="event-icon-container">
        <img class="event-icon" alt="event icon" src="../assets/event-icon.png" />
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
        <div class="triangle-container">
          <div class="triangle"></div>
        </div>
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

defineProps<{
  title: string
  date: string
  image: string
}>()

const isHovering = ref(false)
const isMenuVisible = ref(false)

const showHover = () => isHovering.value = true
const hideHoverAndMenu = () => {
  isHovering.value = false
  isMenuVisible.value = false
}
const toggleMenu = (event: Event) => {
  event.stopPropagation()
  isMenuVisible.value = !isMenuVisible.value
}
</script>

<style scoped lang="scss">
.event-card {
  max-width: 380px;
  border-radius: 4px;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  width: 100%;

  &:hover {
    box-shadow: 2px 0px 40px 0px rgba(0, 0, 0, 0.2);

    .hover-overlay {
      opacity: 1;
    }
  }
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
    inset: 0;
    background-color: rgba(31, 40, 68, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity $transition-duration ease;
    border-radius: 4px 4px 0 0;

    .hover-button {
      background: none;
      border: 1px solid $white;
      color: $white;
      padding: 10px 20px;
      font-size: $font-size-medium;
      cursor: pointer;
      transition: background-color $transition-duration, color $transition-duration;
      border-radius: 3px;

      &:hover {
        background-color: $white;
        color: $black;
      }
    }
  }
}

.event-icon-container {
  position: absolute;
  bottom: -20px;
  left: 30px;
  width: 30px;
  height: 30px;

  .event-icon {
    width: 100%;
    height: 100%;
  }
}

.event-details {
  padding: 30px;
  border-top: 0;
  border-left: 1px;
  border-right: 1px;
  border-bottom: 1px;
  border-style: solid;
  border-color: $border-color;
  border-radius: 0 0 4px 4px;

  .event-title {
    font-size: $font-size-large;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .event-date {
    font-size: $font-size-medium;
    color: $text-color-secondary;
    margin-top: 10px;
    margin-bottom: 0;
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
      background-color: $white;
      border-radius: 50%;
    }
  }
}

.menu {
  position: absolute;
  top: 60px;
  right: -12px;
  background-color: $white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding-top: 15px;
  padding-bottom: 15px;
  width: 205px;
  border: 1px solid #d4d8e1;
  z-index: 1;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 13px 20px;
    cursor: pointer;

    &:hover {
      background-color: #F2EDFF;
      color: $primary-color;
    }
  }
}

.triangle {
  background-color: $white;
  border-left: 1px solid #d4d8e1;
  border-top: 1px solid #d4d8e1;
  box-sizing: border-box;
  height: 10px;
  position: absolute;
  right: 29px;
  top: -6px;
  transform: rotate(45deg);
  width: 10px;
}

@media (max-width: $extra-small-breakpoint) {
  .event-icon-container {
    left: 20px;
    width: 24px;
    height: 24px;
    bottom: -12px;

    .event-icon {
      width: 100%;
      height: 100%;
    }
  }

  .event-details {
    padding: 20px;
  }
}
</style>