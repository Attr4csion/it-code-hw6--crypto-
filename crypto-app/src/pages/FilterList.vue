<script setup lang="ts">
import CoinCard from '../components/CoinCard.vue'
import {ref,computed,onMounted} from 'vue'
import { useCoinStore } from '../store/coins-store';
import CustomPreloader from '../components/CustomPreloader.vue';

const loading = ref(true);

onMounted(() => {
  setTimeout(()=>{
    loading.value = false},1000)
    
})
const cat = ref()
const itemsPerPage = 8;
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(coinStore.coins.length / itemsPerPage))

const coinStore = useCoinStore()
coinStore.fetchCoins()

const categStore = useCoinStore()
categStore.getCategories()

const CoinCategorie = () =>{
        coinStore.getCoinsForCateg(cat.value)

        if (cat.value === ''){
          coinStore.fetchCoins()
        }
}
const paginatedItems = computed(() =>
coinStore.coins.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage)
)
function goToPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
}
const handleChange =(val:number)=>{
  currentPage.value = val
}
</script>

<template>
    <CustomPreloader v-if="loading" />
  <div v-if="!loading" class="list">
    <div class="search">
        <el-select class="select" size='large' clearable placeholder="Категории" v-model="cat" @change="CoinCategorie">
          <el-option v-for="categorie in categStore.categories"
                    :key="categorie.category_id" 
                    :value="categorie.category_id"
                    style="font-size: 14px;">{{ categorie.name }}</el-option>
        </el-select>
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

*{
  font-size:20px;
}
.list{
  display: flex;
  flex-direction: column;
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
    }

</style>
