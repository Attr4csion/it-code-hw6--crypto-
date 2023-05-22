import {defineStore} from 'pinia'
import {Coins, ICAtegories,IMoneys} from '../types/interfaces'
import {coin,categorie,coinDetail} from '../services/api/index'


export const useCoinStore = defineStore('coins-store',{
    state:()=>({
        coins: [] as Coins[],
        categories: [] as ICAtegories[],
        coin: {} as IMoneys
    }),
    actions:{
        fetchCoins(){
            coin.fetchCoins().then(({data})=>{
                this.coins = data.coins
            })
        },
        inputCoins(search:string){
            coin.inputCoins(search).then(({data})=>{
                this.coins = data.coins
            })
        },
        getCategories(){
            categorie.getCategories().then(({data})=>{
                this.categories = data
            })
        },
        getCoinsForCateg(categorie:string){
            coin.getCoinsForCateg(categorie).then(({data})=>{
                this.coins = data
            })
        },
        fetchCoinsDetail(id:string){
            coinDetail.fetchCoinDetail(id).then(({data})=>{
                this.coin = data
            })
        }
    }
})