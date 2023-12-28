<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "Button",
    },
    color: {
        type: String,
        default: "primary",
    },
    disabled: {
        type: Boolean,
        required: false,
    },
    rounded: {
        type: Boolean,
        required: false,
    },
    outlined: {
        type: Boolean,
        required: false,
    },
    icon: {
        type: String,
        required: false,
    },
    size: {
        type: String,
        default: "normal",
    },
});
const emits = defineEmits(["click"]);
const clickOnButton = () => {
    emits("click");
};
</script>
<template lang="">
    <button
        class="btn"
        :class="[
            `btn_${color}`,
            { btn_rounded: rounded },
            { btn_outlined: outlined },
            { btn_icon: icon },
            { btn_large: size === 'large' },
        ]"
        :disabled="disabled"
        @click="clickOnButton"
    >
        <span v-if="icon">
            <font-awesome-icon :icon="`fa-regular fa-${icon}`"
        /></span>
        <span> {{ label }}</span>
    </button>
</template>

<style lang=""></style>
