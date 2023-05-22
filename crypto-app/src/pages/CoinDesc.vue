<script setup lang="ts">
// import {ref} from 'vue'
import { useRoute } from 'vue-router'
// import makeRequest from '../utilities/makeRequest';
import { useCoinStore } from '../store/coins-store';


const route = useRoute()
const id = (route.params.idcard)
const coinDetail = useCoinStore()
coinDetail.fetchCoinsDetail(id)
</script>

<template>
<div class="desc">
    <div class="card">
        <img :src="coinDetail.coin.image.large">
        <div class="card-text">
            <p>Название: {{ coinDetail.coin.name }}</p>
            <p>Текущая цена: {{ coinDetail.coin.market_data.current_price.usd }}$</p>
        </div>
    </div>    
    <div v-html="(coinDetail.coin.description.en)"></div>
</div>

</template>
<style scoped lang="scss">
.desc{
    width: 90%;
    height: 80%;
    margin: 40px auto;
    background: #575757;
    border-radius: 20px;
    padding: 10px;
    .card{
        display: flex;
        .card-text{
            display: flex;
            flex-direction: column  ;
        }
        img{
            background-size: cover;
        }
    }
        
 }
</style>