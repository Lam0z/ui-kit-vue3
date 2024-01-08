<script setup>
import { ref } from "vue";
const links = ref([
    { name: "Home", href: "/" },
    { name: "Typography", href: "/typography" },
    { name: "Button", href: "/button" },
    { name: "Checkbox", href: "/checkbox" },
    { name: "Radiobutton", href: "/radiobutton" },
    { name: "Progress", href: "/progress" },
    { name: "Input", href: "/input" },
    { name: "Tabs", href: "/tabs" },
    { name: "Table", href: "/table" },
    { name: "Accordion", href: "/accordion" },
    { name: "ShowMore", href: "/showMore" },
    { name: "Modal", href: "/modal" },
]);

const props = defineProps({
    openSidebar: {
        type: Boolean,
        required: true,
    },
});
const emit = defineEmits(["layoutSidebarToggle"]);
const toggleMenu = () => {
    emit("layoutSidebarToggle");
};
</script>
<template>
    <div class="sidebar" :class="['sidebar', { sidebar_isopen: openSidebar }]">
        <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.href"
            class="sidebar__link"
            @click="toggleMenu"
            >{{ link.name }}
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
.sidebar {
    z-index: 2;
    left: 0;
    top: 62px;
    height: 100%;
    background: #fff;
    position: fixed;
    width: 250px;
    padding: 20px;
    transition: 0.2s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
    transform: translateX(-250px);

    // @media (min-width: 992px) {
    //     transform: translateX(0);
    // }
    &_isopen {
        transform: translateX(0);
    }
    &__link {
        display: block;
        border-radius: 12px;
        border: 2px solid #fff;
        transition: 0.2s;
        font-weight: bold;
        margin-bottom: 10px;
        &:hover {
            color: var(--primary);
        }
    }
}
</style>
