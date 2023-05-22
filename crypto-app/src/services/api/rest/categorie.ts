import makeRequest from '../httpClient'


export const getCategories = () =>
    makeRequest({  
        method: "get",                             
        url: `https://api.coingecko.com/api/v3/coins/categories/list`,  
    })