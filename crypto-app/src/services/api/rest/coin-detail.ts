import makeRequest from '../httpClient'


export const fetchCoinDetail = (id:string) =>
    makeRequest({  
        method: "get",                              
        url: `https://api.coingecko.com/api/v3/coins/${id}`,  
    })