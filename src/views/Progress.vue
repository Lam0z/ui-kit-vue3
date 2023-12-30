<script setup>
import { ref } from "vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";
import Button from "@/components/Button.vue";
const percentBar = ref(80);
const percentCircle = ref(50);
const addPercentBar = () => {
    if (percentBar.value >= 100) {
        percentBar.value == 100;
    } else {
        percentBar.value += 10;
    }
};
const addPercentCircle = () => {
    if (percentCircle.value >= 100) {
        percentCircle.value == 100;
    } else {
        percentCircle.value += 10;
    }
};
</script>
<template lang="">
    <h1 class="heading-1">Progress</h1>
    <h2 class="heading-2">Progress bar</h2>
    <div class="line line_block">
        <Button label="Add 10%" color="success" @click="addPercentBar" />
        <ProgressBar maxWidth="400px" :percent="percentBar" color="success" />
    </div>
    <h2 class="heading-2">Progress circle</h2>
    <div class="line line_block">
        <Button label="Add 10%" color="danger" @click="addPercentCircle" />
        <ProgressCircle
            maxWidth="400px"
            :percent="percentCircle"
            color="danger"
        />
    </div>
</template>

<style lang=""></style>
