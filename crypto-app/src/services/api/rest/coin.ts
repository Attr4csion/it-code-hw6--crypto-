import makeRequest from '../httpClient'


export const fetchCoins = ()=>
    makeRequest({  
        method: "get",                             
        url: `https://api.coingecko.com/api/v3/search`,  
    })

export const inputCoins =(search:string) =>
    makeRequest({  
        method: "get",                             
        url: `https://api.coingecko.com/api/v3/search?query=${search}`,  
    })

export const getCoinsForCateg = (categorie:string) =>
    makeRequest({  
        method: "get",                             
        url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${categorie}`
    })