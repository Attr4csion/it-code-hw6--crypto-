<script setup lang="ts">

interface Props{
    coin:{
        id: string;
        name: string;
    }
}
const {coin} = defineProps<Props>()




</script>

<template>
    <div class="card">
        <p>{{ coin.name }}
        <el-button class="button" round  @click="$router.push('/card/'+coin.id)">Подробнее</el-button></p>
    </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

 .card{
    width: 240px;
    height: 100px;
    background:#198CE6;
    box-shadow: 10px 5px 5px grey;
    border-radius: 50px;
    padding: 10px;
    font: 400 3rem Raleway, sans-serif;
    font-size: 16px;
    p{
        display: flex;
        flex-direction: column;
        
        align-items: center;
    button{
        margin-top: 14px;
        }
    }
 }
</style>