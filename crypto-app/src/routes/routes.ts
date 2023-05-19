import { RouteRecordRaw } from "vue-router"
import MoneyList from '../pages/MoneyList.vue'
import CoinDesc from'../pages/CoinDesc.vue'
import FilterList from '../pages/FilterList.vue'

const routes:readonly RouteRecordRaw[] = [
    {path:'/',component:MoneyList,alias:'/'},
    {path:'/filter',component:FilterList},
    {path:'/card/:idcard?',name:'card',component:CoinDesc}
];

export default routes