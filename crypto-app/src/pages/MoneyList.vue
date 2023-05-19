<script setup lang="ts">
import CoinCard from '../components/CoinCard.vue'
import makeRequest from '../utilities/makeRequest'
import {ref,computed} from 'vue'

interface Coin {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

const moneys = ref<Coin[]>([]);
const search =ref()
const itemsPerPage = 12;
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(moneys.value.length / itemsPerPage))

makeRequest({  
  method: "get",                             
  url: `https://api.coingecko.com/api/v3/search`,  
}).then(({data}) => {                                 
  moneys.value = data.coins                       
})

const paginatedItems = computed(() =>
  moneys.value.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage)
)

function goToPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
}
const noCoin = () =>{
  makeRequest({  
            method: "get",                             
            url: `https://api.coingecko.com/api/v3/search`,  
        }).then(({data}) => {                                 
            moneys.value = data.coins                      
        })
}
const inputCoin = () =>{    
    if (search.value !== ''){  
        makeRequest({  
            method: "get",                             
            url: `https://api.coingecko.com/api/v3/search?query=${search.value}`,  
        }).then(({data}) => {                                 
            moneys.value = data.coins
        })
    }
    else{
        makeRequest({  
            method: "get",                             
            url: `https://api.coingecko.com/api/v3/search`,  
        }).then(({data}) => {                                 
            moneys.value = data.coins                      
        })
    }
    search.value = '';
}
const handleChange =(val:number)=>{
  currentPage.value = val
}
</script>

<template>
  <div class="search">
    <el-input class="input" type="text" v-model="search" placeholder="Поиск по имени"></el-input>
    <el-button @click="inputCoin">Найти</el-button>
    <el-button @click="noCoin">Сбросить</el-button>

  </div>
  <div class="wrapper">
    <div v-for="money in paginatedItems" :key="money.id">
      <coin-card :coin="money"></coin-card>
    </div>
    <div class="pagination" v-if="totalPages !== 0">
      <el-pagination background layout="prev, pager, next"
                    :current-page="currentPage"
                    @prev-click="goToPage(currentPage-1)" 
                    @next-click="goToPage(currentPage+1)" 
                    @current-change="handleChange" 
                    :total="totalPages*10"></el-pagination>
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
.pagination{
        display: flex;
        width: 10vw;
        align-items: center;
        margin: 40px auto;
        button{
            padding: 10px;
            border:1px solid;
        }
    } 

.search{
  display: flex;
  padding: 20px;
  .input{
    width: 300px;
    margin-right: 20px;
  }
}
</style>