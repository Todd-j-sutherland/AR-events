<template>
    <div class="text-field-container">
        <label :for="id" class="text-field-label">{{ label }}</label>
        <div class="input-wrapper">
            <SearchIcon class="input-icon" aria-hidden="true" />
            <input :id="id" :placeholder="placeholder" :type="type" :value="modelValue"
                @input="$emit('update:modelValue', $event.target?.value)" @focus="isActive = true"
                @blur="isActive = false" :class="{ active: isActive }" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import SearchIcon from '@/assets/m-glass.svg';

const props = defineProps({
    id: String,
    label: String,
    placeholder: String,
    type: {
        type: String,
        default: 'text'
    },
    modelValue: String
});

const emit = defineEmits(['update:modelValue']);

const isActive = ref(false);
</script>

<style scoped lang="scss">
.text-field-container {
    display: flex;
}

.text-field-label {
    margin-bottom: 8px;
    font-size: 14px;
    color: #3c3c3c;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.input-icon {
    position: absolute;
    left: 10px;
    width: 16px;
    height: 16px;
    fill: #ccc;
}

input {
    padding: 15px 10px;
    font-size: 16px;
    border: 1px solid #DCDEE4;
    border-radius: 3px;
    transition: border-color 0.3s;
    width: 100%;
    padding-left: 45px;

    &.active {
        border-color: #4caf50;
    }

    &:focus {
        outline: none;
        border-color: #4caf50;
    }
}
</style>
