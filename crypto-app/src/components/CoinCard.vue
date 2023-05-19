<script setup lang="ts">

interface Props{
    coin:{
        id: string;
  name: string;
    }
}
const {coin} = defineProps<Props>()




</script>

<template>
    <div class="card">
        <p>Название: {{ coin.name }}</p>
        <el-button @click="$router.push('/card/'+coin.id)">Подробнее</el-button>
    </div>
</template>

<style scoped lang="scss">
 .card{
    width: 270px;
    height: 80px;
    background: #575757;
    border-radius: 20px;
    padding: 10px;
        img{
            background-size: cover;
        }
 }
</style>