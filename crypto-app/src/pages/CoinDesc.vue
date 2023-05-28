<script setup lang="ts">
import {ref} from 'vue'
import { useRoute } from 'vue-router'
import { useCoinStore } from '../store/coins-store';
import CustomPreloader from '../components/CustomPreloader.vue';
import {onMounted} from 'vue';


const loading = ref(true);
const route = useRoute();
const id = (route.params.idcard);
const coinDetail = useCoinStore();
coinDetail.fetchCoinsDetail(id);


onMounted(() => {
  setTimeout(()=>{
    loading.value = false},1000)
    
})
</script>

<template>
<CustomPreloader v-if="loading" />

    <div v-if="!loading" class="desc">
        <div class="card">
            <img :src="coinDetail.coin.image.large">
            <div class="card-text">
                <p>{{ coinDetail.coin.name }}</p>
                <p>Текущая цена: {{ coinDetail.coin.market_data.current_price.usd }}$</p>
                        <div v-html="(coinDetail.coin.description.en)"></div>
            </div>
        </div>  
        </div>  
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
*{
    margin: 0;
}
.desc{
    width: 90%;
    height: 80%;
    margin: 0 20px;
    background: #fff;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    font: 400 3rem Raleway, sans-serif;
    font-size: 16px;
    border: 2px solid #198CE6;
    .card{
        display: flex;
        .card-text{
            display: flex;
            flex-direction: column;
            padding: 14px;
        }
        img{
            height: 250px;
            width: 250px;
        }
    }
        
 }
</style>