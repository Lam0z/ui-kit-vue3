<script setup>
import Button from "@/components/Button.vue";
const eventForButton = (message = "this") => {
    alert(`You clicked on ${message} button`);
};
</script>
<template lang="">
    <h1 class="heading-1">Button</h1>
    <h2 class="heading-2">Colors</h2>
    <div class="line">
        <Button label="Primary" />
        <Button label="Secondary" color="second" />
        <Button label="Success" color="success" />
        <Button label="Info" color="info" />
        <Button label="Warning" color="warning" />
        <Button label="Danger" color="danger" />
    </div>
    <h2 class="heading-2">Rounded</h2>
    <div class="line">
        <Button label="Primary" color="primary" rounded />
        <Button label="Secondary" color="second" rounded />
        <Button label="Success" color="success" rounded />
        <Button label="Info" color="info" rounded />
        <Button label="Warning" color="warning" rounded />
        <Button label="Danger" color="danger" />
    </div>
    <h2 class="heading-2">Disabled</h2>
    <div class="line">
        <Button label="Primary" color="primary" disabled />
        <Button label="Secondary" color="second" disabled />
        <Button label="Success" color="success" disabled />
        <Button label="Info" color="info" disabled />
        <Button label="Warning" color="warning" disabled />
        <Button label="Danger" color="danger" disabled />
    </div>
    <h2 class="heading-2">Outlined</h2>
    <div class="line">
        <Button label="Primary" color="primary" outlined />
        <Button label="Secondary" color="second" outlined />
        <Button label="Success" color="success" outlined />
        <Button label="Info" color="info" outlined />
        <Button label="Warning" color="warning" outlined />
        <Button label="Danger" color="danger" outlined />
    </div>
    <h2 class="heading-2">Icon</h2>
    <div class="line">
        <Button label="" color="primary" outlined icon="heart" />
        <Button label="" color="second" icon="hand" />
        <Button label="" color="success" outlined icon="address-book" />
        <Button label="" color="info" icon="credit-card" />
        <Button label="" color="warning" outlined icon="lemon" />
        <Button label="" color="danger" icon="hourglass" />
    </div>
    <h2 class="heading-2">Size</h2>
    <div class="line">
        <Button label="Normal" color="primary" />
        <Button label="Large" color="primary" size="large" />
    </div>
    <h2 class="heading-2">Events</h2>
    <div class="line">
        <Button
            label="Danger"
            color="danger"
            @click="eventForButton('Danger')"
        />
    </div>
</template>

<style lang="scss" scoped>
.btn {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 20px;
    height: 40px;
    color: #fff;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    transition: 0.2s;
    &_primary {
        background: var(--primary);
        border: 1px solid var(--primary);
        &:enabled:hover {
            background: var(--primary-hover);
        }
    }
    &_second {
        background: var(--second);
        border: 1px solid var(--second);
        &:enabled:hover {
            background: var(--second-hover);
        }
    }
    &_success {
        background: var(--success);
        border: 1px solid var(--success);
        &:enabled:hover {
            background: var(--success-hover);
        }
    }
    &_info {
        background: var(--info);
        border: 1px solid var(--info);
        &:enabled:hover {
            background: var(--info-hover);
        }
    }
    &_warning {
        background: var(--warning);
        border: 1px solid var(--warning);
        &:enabled:hover {
            background: var(--warning-hover);
        }
    }
    &_danger {
        background: var(--danger);
        border: 1px solid var(--danger);
        &:enabled:hover {
            background: var(--danger-hover);
        }
    }
    &:disabled {
        opacity: 0.6;
        cursor: default;
    }
    &_rounded {
        border-radius: 15px;
    }
    &_outlined {
        background: transparent;
        color: #000;
        &:hover {
            color: #fff;
        }
    }
    &_icon {
        padding: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    &_large {
        height: 48px;
        padding: 0 30px;
    }
}
</style>
