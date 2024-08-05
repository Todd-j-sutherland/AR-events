<template>
    <transition name="toast">
        <div v-if="isVisible" class="toast" :class="type">
            {{ message }}
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref, watch, withDefaults, onMounted } from 'vue';

interface Props {
    isError: boolean;
    message: string;
    duration?: number;
    type?: 'error';
}

const props = withDefaults(defineProps<Props>(), {
    duration: 3000,
    type: 'error'
});

const isVisible = ref(false);

const show = () => {
    isVisible.value = true;
    setTimeout(() => {
        isVisible.value = false;
    }, props.duration);
};

watch(() => props.isError, (newValue) => {

    if (newValue) {
        show();
    }
}, { immediate: true });


onMounted(() => {
    if (props.isError) {
        show();
    }
});
</script>

<style lang="scss" scoped>
.toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 40px;
    border-radius: 4px;
    color: $white;
    z-index: 9999;
}

.error {
    background-color: #ff7875;
}

.close-btn {
    margin-left: 10px;
    background: none;
    border: none;
    color: $white;
    font-size: $font-size-large;
    cursor: pointer;
}

.toast-enter-active,
.toast-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateX(-50%) translateY(30%);
}
</style>