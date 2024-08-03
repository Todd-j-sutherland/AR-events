<template>
  <button class="custom-button">
    <TargetIcon />
    <div>
      <slot></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import TargetIcon from '@/assets/circle-cross.svg'

defineProps<{}>()
</script>

<style scoped lang="scss">
.custom-button {
  background-color: $primary-color;
  color: $white;
  padding: 10px 21px;
  height: 50px;
  font-size: $font-size-base;
  cursor: pointer;
  transition:
    color 0.3s ease;
  outline: none;
  border: none;
  border-radius: 3px;
  gap: 10px;
  align-items: center;

  &:hover {
    background-color: $secondary-color;
  }
}
</style>
