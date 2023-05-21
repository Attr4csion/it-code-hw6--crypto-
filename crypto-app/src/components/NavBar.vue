<script setup lang="ts">
</script>

<template>
    <div class="topnav" id="myTopnav">
        <button @click="$router.push('/')">К списку монет</button>
        <button @click="$router.push('/filter')"> Категории монет</button>
        <button>Info</button>
        <button>Help</button>
        
    </div>
</template>

<style scoped lang="scss">    
.topnav {
    background-color: #333;
    display: flex;
    
    button:hover {
        background-color: #ddd;
        color: black;
    }
    button{
        background-color: #333;
         color:white;
        border:none;
        padding: 14px 16px;


    }
}
.input{
    align-self: center;
    width: 300px;    
}
</style>