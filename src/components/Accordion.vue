<template>
    <div class="accordion">
        <div
            class="accordion__item"
            :class="{ 'accordion__item--active': item.isOpen }"
            v-for="(item, i) in accordionItems"
            :key="i"
            @click="toggleDescr(i)"
        >
            <div class="accordion__item-name">
                <div>{{ item.name }}</div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                >
                    <path
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                </svg>
            </div>
            <div class="accordion__item-descr">
                <div style="min-height: 0">{{ item.description }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const toggleDescr = (item) => {
    if (props.hideAll) {
        for (const i of props.accordionItems) {
            i.isOpen = false;
        }
        props.accordionItems[item].isOpen = !props.accordionItems[item].isOpen;
    } else {
        props.accordionItems[item].isOpen = !props.accordionItems[item].isOpen;
    }
};
const props = defineProps({
    hideAll: {
        type: Boolean,
        required: false,
        default: false,
    },
    accordionItems: {
        type: Array,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
.accordion {
    display: grid;
    row-gap: 10px;
    &__item {
        border: 1px solid var(--primary);
        overflow: hidden;
        &--active .accordion__item-descr {
            grid-template-rows: 1fr;
            padding: 10px;
        }
        &--active .accordion__item-name {
            background: var(--primary-hover);
            color: white;
        }
        &--active svg {
            transform: rotate(180deg);
        }
    }

    &__item-name {
        color: var(--primary);
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        &:hover {
            cursor: pointer;
        }
        svg {
            flex-shrink: 0;
            margin-left: 10px;
            transition: all ease 0.3s;
            fill: var(--primary);
        }
    }

    &__item-descr {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.3s;
    }
}
</style>
