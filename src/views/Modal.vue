<script setup>
import Modal from "@/components/Modal.vue";
import Button from "@/components/Button.vue";
import { ref } from "vue";

const modalActive = ref(false);
const modalConfirm = ref(false);

const toggleModal = () => {
    modalActive.value = !modalActive.value;
};
const toggleModalConfirm = () => {
    modalConfirm.value = !modalConfirm.value;
};
</script>

<template>
    <Button
        outlined
        label="Show modal"
        color="success"
        @click="modalActive = !modalActive"
    />
    <Modal :isActive="modalActive" @toggleActive="toggleModal"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
        accusamus?</Modal
    >
    <Button
        outlined
        label="Show modal confirm"
        color="success"
        @click="modalConfirm = !modalConfirm"
    />
    <Modal
        :isActive="modalConfirm"
        @toggleActive="toggleModalConfirm"
        :isConfirm="true"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
        accusamus?</Modal
    >
</template>

<style lang="scss" scoped></style>
