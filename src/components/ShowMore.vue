<script setup>
import Button from "@/components/Button.vue";
import { computed, ref } from "vue";
const emit = defineEmits(["showMore"]);
const props = defineProps({
    listItems: {
        type: Array,
        required: true,
    },
    perView: {
        type: Number,
        required: false,
        default: 3,
    },
});

const list = computed(() => {
    if (props.perView >= props.listItems.length) {
        return props.listItems.slice(0, props.perView);
    } else {
        return props.listItems.slice(0, props.perView);
    }
});

const show = () => {
    emit("showMore");
};
</script>
<template>
    <div class="list">
        <div class="list__item" v-for="item in list" :key="item.id">
            <h3 class="heading-3">{{ item.title }}</h3>
            <p>{{ item.descr }}</p>
        </div>
    </div>

    <Button
        color="danger"
        class="list__more"
        @click="show"
        v-if="perView < listItems.length"
    />
</template>

<style lang="scss" scoped>
.list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    &__item {
        text-align: center;
    }
    &__more {
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }
}
.heading-3 {
}
</style>
