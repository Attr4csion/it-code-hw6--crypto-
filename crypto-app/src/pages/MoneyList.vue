<script setup lang="ts">
import CoinCard from '../components/CoinCard.vue'

interface IMoneys {
    id: string,
    name: string,
    image:string,
    current_price:number
} 

const moneys: IMoneys[]=[
    {id:'bitcoin', name:'Bitcoin',image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",current_price: 26828},
    {id:'ethereum', name:'Ethereum',image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",current_price: 1805.75},
    {id:'tether', name:'Tether',image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",current_price: 1.001},
    {id:'binancecoin', name:'BNB',image:"https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",current_price: 310.45},

]



</script>

<template>
    <div class="wrapper">
        <div  v-for="money in moneys" :key="money.id">
            <CoinCard :coin="money"></CoinCard>
        </div>
    </div>
</template>

<style scoped lang="scss">

.wrapper{
    width: 75vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    padding-top: 20px;
}
</style>