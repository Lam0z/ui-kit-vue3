<template>
    <h1 class="heading-1">Show more button</h1>
    <h2 class="heading-2">
        per view: 3 ({{ perView }}), total count : {{ listItems.length }}
    </h2>
    <ShowMore
        :listItems="listItems"
        :perView="perView"
        @showMore="show"
    ></ShowMore>
</template>

<script setup>
import ShowMore from "@/components/ShowMore.vue";
import { ref } from "vue";

const perView = ref(3);
const show = () => {
    if (perView.value >= listItems.length) {
        perView.value = listItems.length;
    } else {
        perView.value += 3;
    }
};
const listItems = [
    {
        title: "item 1",
        descr: "lorem ipsum dolor sit amet",
    },
    {
        title: "item 2",
        descr: "lorem ipsum dolor sit amet",
    },
    {
        title: "item 3",
        descr: "lorem ipsum dolor sit amet",
    },
    {
        title: "item 4",
        descr: "lorem ipsum dolor sit amet",
    },
    {
        title: "item 5",
        descr: "lorem ipsum dolor sit amet",
    },
    {
        title: "item 6",
        descr: "lorem ipsum dolor sit amet",
    },
    {
        title: "item 7",
        descr: "lorem ipsum dolor sit amet",
    },
    {
        title: "item 8",
        descr: "lorem ipsum dolor sit amet",
    },
    {
        title: "item 9",
        descr: "lorem ipsum dolor sit amet",
    },
    {
        title: "item 10",
        descr: "lorem ipsum dolor sit amet",
    },
    {
        title: "item 10",
        descr: "lorem ipsum dolor sit amet",
    },
];
</script>

<style lang="scss" scoped></style>
