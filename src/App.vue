<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutSidebar from "@/components/layout/Sidebar.vue";

const isOpenMenu = ref(false)
const toggleMenu = ()=>{
    isOpenMenu.value = !isOpenMenu.value
}
</script>

<template>
    <div :class="['sidebar-toggle',{'sidebar-toggle_active':isOpenMenu}]" @click="toggleMenu"><span>&#5125</span></div>
    <LayoutHeader />
    <LayoutSidebar :openSidebar="isOpenMenu" @layoutSidebarToggle='toggleMenu'/>
    <div class="container">
        <div :class="['content',{content_full:!isOpenMenu}]">
            <RouterView />
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/global.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.content {
    max-width: 1400px;
    margin-left: 250px;
    padding: 80px 30px 30px;
    transition: 0.2s;
    margin-left: 250px;
    &_full {
        margin-left: 0;
    }
}

.sidebar-toggle {

    position: fixed;
    left: 0;
    width: 15px;
    background: var(--primary);
    height: 100%;
    top: 62px;
    z-index: 3;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        transition: .2s all ease;
    }
    &_active{
        span{
            transform: rotate(180deg);
        }
    }
    
}

@media screen and (max-width: 991px) {
    .content {
        margin-left: 0;
    }
}
</style>
