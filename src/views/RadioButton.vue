<script setup>
import Radiobutton from "@/components/RadioButton.vue";
import { ref } from "vue";
const footballClubs = [
    { name: "CSK Moscow", id: "f1" },
    { name: "Spartak Moscow", id: "f2" },
    { name: "Real Madrid", id: "f3" },
    { name: "Milan", id: "f4" },
];
const selectedClub = ref("");
const disabledRadio = ref(true);
const disabledRadioCheck = ref(true);
</script>
<template lang="">
    <h1 class="heading-1">Radio</h1>
    <h2 class="heading-2">Basic</h2>
    <div class="line line_block">
        <p>Selected club : {{ selectedClub }}</p>
        <div v-for="(item, index) in footballClubs" :key="index">
            <Radiobutton
                :value="item.name"
                :label="item.name"
                :id="item.id"
                name="club"
                v-model:checkedValue="selectedClub"
            />
        </div>
    </div>
    <h2 class="heading-2">Disabled</h2>
    <div class="line line_block">
        <p>Selected club : {{ disabledRadioCheck }}</p>

        <Radiobutton
            value="Radio disabled"
            label="Radio disabled"
            id="radioButtonDisabled"
            name="club"
            :disabled="disabledRadio"
            v-model:checkedValue="selectedClub"
        />
    </div>
</template>
