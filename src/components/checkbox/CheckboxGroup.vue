<script setup>
import Checkbox from "./Checkbox.vue";

const emits = defineEmits(["update:value"]);
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Array,
        required: true,
    },

    options: {
        type: Array,
        required: true,
        validator: (value) => {
            const hasNameKey = value.every((option) =>
                Object.keys(option).includes("name")
            );
            const hasIdKey = value.every((option) =>
                Object.keys(option).includes("id")
            );
            return hasNameKey && hasIdKey;
        },
    },
});
const check = (params) => {
    let updateValue = [...props.value];
    if (params.checked) {
        updateValue.push(params.optionId);
    } else {
        updateValue.splice(updateValue.indexOf(params.optionId), 1);
    }
    emits("update:value", updateValue);
};
</script>
<template>
    <Checkbox
        v-for="(item, index) in options"
        :key="index"
        :label="item.name"
        :id="item.id"
        :value="item.name"
        :checked="value.includes(item.id)"
        group
        @updateCheckboxGroup="check"
    />
</template>
<style lang="scss" scoped></style>
