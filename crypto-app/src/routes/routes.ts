import { RouteRecordRaw } from "vue-router"
import MoneyList from '../pages/MoneyList.vue'
import CoinDesc from'../pages/CoinDesc.vue'

const routes:readonly RouteRecordRaw[] = [
    {path:'/',component:MoneyList,alias:'/'},
    {path:'/card/:idcard?',name:'card',component:CoinDesc}
];

export default routes