<script setup>
import Tabs from "@/components/Tabs.vue";
import { ref } from "vue";
const tabs = [
    { name: "About", label: "About project" },
    { name: "Vue", label: "About Vue" },
    { name: "React", label: "About React" },
];
const selectedTab = ref("Vue");
const changeTab = (tabName) => {
    selectedTab.value = tabName;
};
</script>
<template lang="">
    <h1 class="heading-1">Tabs</h1>

    <Tabs :names="tabs" :selected="selectedTab" @changeTab="changeTab">
        <div v-if="selectedTab === 'About'">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
        <div v-else-if="selectedTab === 'Vue'">
            Magni quaerat sapiente cum, facere quo possimus libero sint
            reprehenderit pariatur voluptatibus error!
        </div>
        <div v-else>
            Omnis, quod a. Possimus ullam eaque necessitatibus? Itaque, omnis.
        </div>
    </Tabs>
</template>

<style lang=""></style>
