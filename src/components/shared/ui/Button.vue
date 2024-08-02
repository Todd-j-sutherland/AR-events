<template>
    <button class="custom-button">
      <slot></slot>
    </button>
  </template>
  
  <script setup lang="ts">
  defineProps<{}>();
  </script>
  
  <style scoped lang="scss">
  
  .custom-button {
    background-color: transparent;
    border: 3px solid $primary-color;
    color: $primary-color;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.3s ease, border-color 0.3s ease;
  
    &:hover {
      color: $secondary-color;
      border-color: $secondary-color;
    }
  }
  </style>
  