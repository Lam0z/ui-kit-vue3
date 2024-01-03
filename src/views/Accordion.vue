<template>
    <h1 class="heading-1">Accordion</h1>
    <h2 class="heading-2">Accordion base</h2>
    <Accordion :accordionItems="accordionItems" :hideAll="false" />
    <h2 class="heading-2">Accordion hide All</h2>
    <Accordion :accordionItems="accordionItems2" :hideAll="true" />
</template>

<script setup>
import Accordion from "@/components/Accordion.vue";
import { ref } from "vue";

const accordionItems = ref([
    {
        name: "Accordion Item #1",
        description:
            "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        isOpen: true,
    },
    {
        name: "Accordion Item #2",
        description:
            "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        isOpen: false,
    },
    {
        name: "Accordion Item #3",
        description:
            "This is the third item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        isOpen: false,
    },
]);
const accordionItems2 = ref([
    {
        name: "Accordion Item #1",
        description:
            "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        isOpen: false,
    },
    {
        name: "Accordion Item #2",
        description:
            "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        isOpen: true,
    },
    {
        name: "Accordion Item #3",
        description:
            "This is the third item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        isOpen: false,
    },
]);
</script>

<style lang="scss" scoped></style>
