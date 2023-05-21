export interface Coins {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

  export interface Coin {
    id: string;
    name: string;
  }
  export interface ICAtegories{
      category_id:string,
      name:string
  }

  export interface IMoneys {
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