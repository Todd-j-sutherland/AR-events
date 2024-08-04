<template>
  <button class="custom-button">
    <TargetIcon class="button-icon" />
    <span class="button-text">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import TargetIcon from '@/assets/circle-cross.svg'
</script>

<style scoped lang="scss">
.custom-button {
  display: flex;
  align-items: center;
  gap: 10px;

  background-color: $primary-color;
  color: $white;

  padding: 10px 21px;
  height: 50px;
  border-radius: 3px;

  font-size: $font-size-base;
  font-family: $font-family;
  font-weight: $font-weight-medium;

  cursor: pointer;
  outline: none;
  border: none;

  transition: background-color $transition-duration ease;

  &:hover {
    background-color: $secondary-color;
  }
}

@media (max-width: $mobile-breakpoint) {
  .custom-button {
    padding: 10px 20px;

    .button-icon {
      display: none;
    }
  }
}
</style>