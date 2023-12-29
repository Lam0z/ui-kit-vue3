<script setup>
import Checkbox from "@/components/checkbox/checkbox.vue";
import CheckboxGroup from "@/components/checkbox/CheckboxGroup.vue";
import { ref } from "vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);
const switchProgessional = ref(false);

const listOfHeroes = [
    { name: "SpiderMan", id: "h1" },
    { name: "Batman", id: "h2" },
    { name: "Thor", id: "h3" },
    { name: "Loki", id: "h4" },
];
const selectedHeroes = ref(["h1", "h3"]);
</script>
<template>
    <div>
        <h1 class="heading-1">Checkbox</h1>
        <h2 class="heading-2">Checkbox Active: {{ checkboxActive }}</h2>
        <div class="line">
            <Checkbox
                label="Checkbox Active"
                id="checkboxActive"
                name="checkboxActive"
                value="i like it"
                v-model:checked="checkboxActive"
            />
        </div>
        <h2 class="heading-2">
            Checkbox Disabled: {{ checkboxDisabledChecked }}
        </h2>
        <div class="line">
            <Checkbox
                label="Checkbox Active"
                id="checkboxDisabled"
                name="checkboxDisabled"
                value="i like it"
                :disabled="checkboxDisabled"
                v-model:checked="checkboxDisabledChecked"
            />
        </div>
        <h2 class="heading-2">Checkbox Group: {{ selectedHeroes }}</h2>
        <div class="line line_block">
            <CheckboxGroup
                v-model:value="selectedHeroes"
                :options="listOfHeroes"
                name="heroes"
            />
        </div>
        <h2 class="heading-2">Switch: {{ switchProgessional }}</h2>
        <div class="line">
            <Checkbox
                type="switch"
                label="im a professianal"
                id="switch"
                name="switch"
                value="i like it"
                v-model:checked="switchProgessional"
            />
        </div>
    </div>
</template>
