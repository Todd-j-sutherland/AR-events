<template>
  <div class="text-field-container">
    <div class="input-wrapper">
      <SearchIcon class="input-icon" aria-hidden="true" />
      <input :placeholder="placeholder" :type="type" :value="modelValue" @input="handleInput" @focus="isActive = true"
        @blur="isActive = false" :class="{ 'is-active': isActive }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchIcon from '@/assets/images/m-glass.svg';

const props = defineProps<{
  id?: string;
  placeholder?: string;
  type?: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const isActive = ref(false);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped lang="scss">
.text-field-container {
  display: flex;
  flex-direction: column;
}

.text-field-label {
  margin-bottom: 8px;
  font-size: $font-size-base;
  color: #3c3c3c;
  font-weight: $font-weight-medium;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.input-icon {
  position: absolute;
  left: 17px;
  width: 16px;
  height: 16px;
  fill: $text-color-secondary;
}

input {
  width: 100%;
  padding: 15px 10px;
  padding-left: 45px;
  font-size: $font-size-medium;
  font-family: $font-family;
  border: 1px solid $border-color;
  border-radius: 3px;
  transition:
    border-color $transition-duration,
    box-shadow $transition-duration;

  &::placeholder {
    color: #b4b9c4;
    font-size: $font-size-base;
  }

  &.is-active,
  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0px 0px 0px 3px rgba(45, 194, 106, 0.15);
  }
}

@media (max-width: $medium-breakpoint) {
  .text-field-container {
    width: 100%;
  }
}

@media (max-width: $extra-small-breakpoint) {
  .input-icon {
    display: none;
  }

  input {
    padding-left: 10px;
  }
}
</style>
