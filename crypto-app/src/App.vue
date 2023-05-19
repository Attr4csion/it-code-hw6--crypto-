<script setup lang="ts">
import NavBar from './components/NavBar.vue'

</script>

<template>
    <NavBar ></NavBar>
    <router-view ></router-view>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: rgb(40, 40, 40);

}
</style>
