<script setup>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import {
    helpers,
    minLength,
    maxLength,
    numeric,
    email,
    sameAs,
} from "@vuelidate/validators";

const nameField = ref("");
const emailField = ref("");
const luckyField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");
const frontendField = ref("");

const mustBeFrontend = (value) => value.includes("frontend");
const rules = computed(() => ({
    nameField: {
        minLength: helpers.withMessage(
            `Минимальная длина: 3 символа`,
            minLength(3)
        ),
    },
    emailField: {
        email: helpers.withMessage(`Вы ввели неверный email`, email),
    },
    luckyField: {
        maxLength: helpers.withMessage(
            `Минимальная длина: 2 символа`,
            maxLength(2)
        ),
        numeric: helpers.withMessage(`Вы можете ввести только цифры`, numeric),
    },
    passwordField: {
        minLength: helpers.withMessage(
            `Минимальная длинна 5 символов`,
            minLength(5)
        ),
    },
    confirmPasswordField: {
        sameAsPassword: helpers.withMessage(
            `Пароли не совпадают`,
            sameAs(passwordField.value)
        ),
        minLength: helpers.withMessage(
            `Минимальная длинна 5 символов`,
            minLength(5)
        ),
    },
    frontendField: {
        frontendField: helpers.withMessage(
            "Строка должна содержать слово frontend",
            mustBeFrontend
        ),
    },
}));

const v = useVuelidate(rules, {
    nameField,
    emailField,
    luckyField,
    confirmPasswordField,
    passwordField,
    frontendField,
});
const submitForm = () => {
    v.value.$touch();
    if (v.value.$error) return;
    alert("Form submitted");
};
</script>
<template>
    <h1 class="heading-1">Inputs</h1>

    <form @submit.prevent="submitForm">
        <Input
            label="Your name"
            name="name"
            placeholder="input your name"
            v-model:value="v.nameField.$model"
            :error="v.nameField.$errors"
        />
        <Input
            label="Your email"
            name="email"
            placeholder="input your email"
            v-model:value="v.emailField.$model"
            :error="v.emailField.$errors"
        />
        <Input
            label="Your lucky number"
            name="luckyNumber"
            placeholder="Your lucky number"
            v-model:value="v.luckyField.$model"
            :error="v.luckyField.$errors"
        />
        <Input
            label="Your lucky number"
            name="password"
            placeholder="Your password"
            v-model:value="v.passwordField.$model"
            :error="v.passwordField.$errors"
            type="password"
        />
        <Input
            label="Confirm password"
            name="confirm"
            placeholder="Confirm password"
            v-model:value="v.confirmPasswordField.$model"
            :error="v.confirmPasswordField.$errors"
            type="password"
        />
        <Input
            label="Frontend string"
            name="Frontend"
            placeholder="Input string with frontend"
            v-model:value="v.frontendField.$model"
            :error="v.frontendField.$errors"
        />
        <Button label="Submit" class="success" />
    </form>
</template>

<style lang=""></style>
