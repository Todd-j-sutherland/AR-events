<template>
    <div class="event-card" @mouseenter="showHover" @mouseleave="hideHover">
        <div class="event-image-container">
            <img :src="image" alt="Event" class="event-image" />
            <div v-if="isHovering" class="hover-overlay">
                <button class="hover-button">View event</button>
            </div>
            <div class="event-component-icon">
                <Icon class="event-icon" />
            </div>
        </div>
        <div class="event-details">
            <div class="event-title">{{ title }}</div>
            <p class="event-date">{{ date }}</p>
        </div>
        <div class="menu-icon">
            <span class="menu-icon-toggle" @click="toggleMenu">⋮</span>
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
import { ref } from 'vue';
import Icon from './icon.svg';

const props = defineProps<{
    title: string;
    date: string;
    image: string;
}>();

const isHovering = ref(false);
const isMenuVisible = ref(false);

const showHover = () => {
    isHovering.value = true;
};


const hideHover = () => {
    isHovering.value = false;
};

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};
</script>

<style scoped lang="scss">
.event-card {
    width: 380px;
    border: 1px solid #DCDEE4;
    border-radius: 4px;
    // overflow: hidden;
    transition: transform 0.2s;

    position: relative;

    &:hover {
        box-shadow: 2px 0px 40px 0px rgba(0, 0, 0, 0.2);
    }

    .event-image-container {
        position: relative;

        .event-image {
            width: 100%;
            height: auto;
            border-bottom: 1px solid #666666;
        }

        .hover-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.90);
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
                transition: background-color 0.3s, color 0.3s;

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
            width: 4px;
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
        color: #8E97A6;
        margin-top: 14px;
        margin-bottom: 0;
    }

    .event-component-icon {
        position: relative;

        .event-icon {
            position: absolute;
            top: -20px;
            left: 30px;
        }
    }
}
</style>