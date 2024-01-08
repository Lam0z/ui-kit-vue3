<script setup>
import Button from "@/components/Button.vue";
import { ref } from "vue";
const sureModal = ref(false);
const showSureModal = () => {
    sureModal.value = !sureModal.value;
};
const emit = defineEmits(["toggleActive"]);
const props = defineProps({
    isActive: {
        type: Boolean,
        required: true,
    },
    isConfirm: {
        type: Boolean,
        required: false,
        default: false,
    },
});
const closeModal = () => emit("toggleActive");
</script>
<template>
    <div
        class="modal"
        :class="[isActive ? 'modal--active' : '']"
        @click.self="closeModal"
    >
        <template v-if="!sureModal"
            ><div class="modal__content">
                <div class="modal__top">
                    <div class="modal__title">Title</div>
                    <div class="modal__close">
                        <Button
                            icon="xmark"
                            outlined
                            label=""
                            color="success"
                            iconType="fa-solid"
                            @click="closeModal"
                        />
                    </div>
                </div>
                <div class="modal__main-content">
                    <slot></slot>
                </div>
                <div class="modal__confirm">
                    <Button label="Confirm" @click="closeModal" />
                    <Button
                        v-if="isConfirm"
                        label="Close"
                        color="danger"
                        @click="showSureModal"
                    />
                </div></div
        ></template>

        <template v-else>
            <div class="modal__content">
                <div class="modal__top">
                    <div class="modal__title">Are you sure?</div>
                    <div class="modal__close"></div>
                </div>

                <div class="modal__confirm">
                    <Button label="Yes" @click="closeModal" />
                    <Button label="No" color="danger" @click="showSureModal" />
                </div>
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    background: #aaaaaa8e;

    position: fixed;
    z-index: 10;
    inset: 0;
    display: none;
    justify-content: center;
    align-items: center;
    &--active {
        display: flex;
    }
    &__content {
        background: white;

        border-radius: 20px;
        padding: 20px;
        width: 100%;
        min-height: 200px;
        max-width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (min-width: 768px) {
            max-width: 500px;
        }
    }
    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__title {
    }

    &__close {
        font-size: 10px;
        margin-left: auto;

        &:hover {
            cursor: pointer;
        }
    }

    &__main-content {
        margin: 20px 0;
    }
    &__confirm {
        display: flex;
        justify-content: end;
    }
}
</style>
