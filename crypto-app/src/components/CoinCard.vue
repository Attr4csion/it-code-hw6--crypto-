<script setup lang="ts">

interface Props{
    coin:{
        id:string,
        name:string,
        image:string,
        current_price:number
    }
}
const {coin} = defineProps<Props>()




</script>

<template>
    <div class="card">
        <img :src="coin.image">
        <p>Название: {{ coin.name }}</p>
        <p>Текущая цена: {{ coin.current_price }}$</p>
        <el-button type="primary">Купить</el-button> 
        <router-link :to="'/card/'+coin.id">
            <el-button type="info">info</el-button>
        </router-link>   
    </div>
</template>

<style scoped lang="scss">
 .card{
    width: 270px;
    height: 350px;
    background: #575757;
    border-radius: 20px;
    padding: 10px;
        img{
            background-size: cover;
        }
 }
</style>