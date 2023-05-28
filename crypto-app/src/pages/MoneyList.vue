<script setup lang="ts">
import CoinCard from '../components/CoinCard.vue'
import {ref,computed,onMounted} from 'vue'
import { useCoinStore } from '../store/coins-store';
import { Search } from '@element-plus/icons-vue'
import CustomPreloader from '../components/CustomPreloader.vue';


const search =ref()
const itemsPerPage = 8;
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(coinStore.coins.length / itemsPerPage))

const coinStore = useCoinStore()
coinStore.fetchCoins()

const paginatedItems = computed(() =>
 coinStore.coins.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage)
)

function goToPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
}
const noCoin = () =>{
  coinStore.fetchCoins()

}
const inputCoin = () =>{    
    if (search.value !== ''){  
        coinStore.inputCoins(search.value)
    }
    else{
        coinStore.fetchCoins()

    }
    search.value = '';
}
const handleChange =(val:number)=>{
  currentPage.value = val
}

const loading = ref(true);

onMounted(() => {
  setTimeout(()=>{
    loading.value = false},1000)
    
})


</script>

<template>
  <CustomPreloader v-if="loading" />

  <div v-if="!loading" class="list">
    <div class="search">
      <el-input class="input" type="text" v-model="search" placeholder="Поиск по имени"></el-input>
      <el-button :icon="Search" round @click="inputCoin">Найти</el-button>
      <el-button  round @click="noCoin">Сбросить</el-button>
  
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
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

*{
  font-size:20px;
}
.list{
  display: flex;
  flex-direction: column;
  height: 100%;
  font: 400 3rem Raleway, sans-serif;


}
.wrapper{
    width: 60vw;
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
        width: 60%;
        align-items: center;
        margin: 0 auto;
        button{
            padding: 10px;
            border:1px solid;
        }
    } 

.search{
  width: 60vw;
  margin: 0 auto;
  padding: 20px;
  .input{
    width: 300px;
    margin-right: 20px;
  }
}
</style>