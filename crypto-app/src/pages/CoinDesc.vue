<script setup lang="ts">
import {ref} from 'vue'
import { useRoute } from 'vue-router'
import makeRequest from '../utilities/makeRequest';

const route = useRoute()
const id = (route.params.idcard)

interface IMoneys {
    id: string,
    name: string,
    image:{
        large:string
    }
    market_data:{
        current_price:{
            usd:number
        }
    }
} 

const moneys = ref<IMoneys[]>([])

makeRequest({  
  method: "get",                              
  url: `https://api.coingecko.com/api/v3/coins/${id}`,  
}).then(({data}) => {                                 
  moneys.value = data                                  
})


</script>

<template>
<div class="desc">
    <div class="card">
        <img :src="moneys.image.large">
        <div class="card-text">
            <p>Название: {{ moneys.name }}</p>
            <p>Текущая цена: {{ moneys.market_data.current_price.usd }}$</p>
        </div>
    </div>    
    <div v-html="(moneys.description.en)"></div>
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