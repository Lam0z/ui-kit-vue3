<script setup></script>
<template lang="">
    <div class="progress-container">
        <div class="progress">
            <div class="progress-bar"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.progress {
    height: 10px;
    border-radius: 4px;
    background: var(--primary-hover);
    &-container {
        margin-bottom: 20px;
        overflow: hidden;
    }
    &-bar {
        background: var(--primary);
        width: 50%;
        height: 100%;
        border-radius: 4px;
        transition: 0.5s;
    }
    &-percent {
        display: block;
        text-align: center;

        font-weight: bold;
        font-size: 17px;
        margin-bottom: 10px;
    }
}
</style>
