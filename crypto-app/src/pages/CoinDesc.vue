<script setup lang="ts">
// import {ref} from 'vue'
import { useRoute } from 'vue-router'





const route = useRoute()
console.log(route.params.idcard)
// let id = ref(route.params.idcard)
// Должны тут делать запрос

// Типа получили ответ и сохранили в переменную

const coin = {
     id:'bitcoin',
     name:'Bitcoin',
     image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
     current_price: 26828
    }

</script>

<template>
<div class="card">
    <img :src="coin.image">
    <p>Название: {{ coin.name }}</p>
    <p>Текущая цена: {{ coin.current_price }}$</p>
</div>

</template>
<style scoped lang="scss">
.card{
    width: 270px;
    margin: 40px auto;
    height: 350px;
    background: #575757;
    border-radius: 20px;
    padding: 10px;
        img{
            background-size: cover;
        }
 }
</style>