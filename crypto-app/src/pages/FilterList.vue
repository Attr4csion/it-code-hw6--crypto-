<script setup lang="ts">
import CoinCard from '../components/CoinCard.vue'
import makeRequest from '../utilities/makeRequest'
import {ref,computed} from 'vue'

interface Coin {
  id: string;
  name: string;
}
interface ICAtegories{
    category_id:string,
    name:string
}

const moneys = ref<Coin[]>([]);
const categories = ref<ICAtegories[]>([]);
const cat = ref()
const itemsPerPage = 12;
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(moneys.value.length / itemsPerPage))
makeRequest({  
            method: "get",                             
            url: `https://api.coingecko.com/api/v3/search`,  
        }).then(({data}) => {                                 
            moneys.value = data.coins
        })

const CoinCategorie = () =>{
  makeRequest({  
            method: "get",                             
            url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${cat.value}`,  
        }).then(({data}) => {                                 
            moneys.value = data                  
        })
        if (cat.value === ''){
            makeRequest({  
            method: "get",                             
            url: `https://api.coingecko.com/api/v3/search`,  
        }).then(({data}) => {                                 
            moneys.value = data.coins
        })
        }
}
makeRequest({  
  method: "get",                             
  url: `https://api.coingecko.com/api/v3/coins/categories/list`,  
}).then(({data}) => {                                 
  categories.value = data                       
})
const paginatedItems = computed(() =>
  moneys.value.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage)
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
<div class="search">
    <el-select clearable placeholder="Категории" v-model="cat" @change="CoinCategorie">
      <el-option v-for="categorie in categories"
                 :key="categorie.category_id" 
                 :value="categorie.category_id">{{ categorie.name }}</el-option>
    </el-select>
</div>
<div class="wrapper">
    <div v-for="money in paginatedItems" :key="money.id">
      <coin-card :coin="money"></coin-card>
    </div>
</div>
    <div class="pagination" v-if="totalPages !== 0">
      <el-pagination background layout="prev, pager, next"
                    :current-page="currentPage"
                    @prev-click="goToPage(currentPage-1)" 
                    @next-click="goToPage(currentPage+1)" 
                    @current-change="handleChange" 
                    :total="totalPages*10"></el-pagination>
    </div>
</template>

<style lang="scss" scoped>

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
    

</style>