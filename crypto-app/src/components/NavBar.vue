<script setup lang="ts">
</script>

<template>
    <div class="nav">
    <h1>Crypto-App</h1>
        <!-- <div >
            <router-link to="/">
                К списку монет
            </router-link>
        </div> -->
        <ul id="menu">
            <li><router-link to="/">К списку монет</router-link></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">О сайте</a></li>
        </ul>   
    </div>
</template>

<style scoped lang="scss">
    .nav{
        height: 12vh;
        background-color: rgb(39, 91, 249);
        display: flex;
        h1{
            background-color: rgb(39, 91, 249);
            align-self: center;
            padding: 10px;

        }
        #menu{
            display: flex;
            text-align: center; /* текст горизонтально по центру */
            text-decoration: none;
            width: 40%;
            justify-content: space-between;
            align-items: center;
       }
       a,li{
                text-decoration: none;
                list-style-type: none;
                background-color: #575757;
                padding: 10px;
                border-radius: 6px;
                color: #fff;

            }
        .list{
            margin-top: 35px;
            router-link{
                text-decoration: none;
            }
        }

    }
</style>
