<script setup lang="ts">
import NavBar from './components/NavBar.vue'

</script>

<template>
    <div>
        <NavBar ></NavBar>
        <router-view ></router-view>
    </div>
</template>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
body{
    background-color:#198CE6;

}
div{
    display: flex; 
    width: 100vw;
}
</style>
