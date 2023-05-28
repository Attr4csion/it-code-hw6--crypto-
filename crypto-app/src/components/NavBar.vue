<script setup lang="ts">
</script>

<template>
    <ul>
  <li><a @click="$router.push('/')">К списку монет</a></li>
  <li><a @click="$router.push('/filter')"> Категории монет</a></li>
  <li><a>Info</a></li>
  <li><a >Help</a></li>
  <li><a>БЛОГ</a></li>
</ul>
    <!-- <div class="topnav" id="myTopnav">
        <button @click="$router.push('/')">К списку монет</button>
        <button @click="$router.push('/filter')"> Категории монет</button>
        <button>Info</button>
        <button>Help</button>
        
    </div> -->
</template>

<style scoped lang="scss">   
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1A1E23;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style-type: none;
  width: 300px;
  margin-left: 20px;
}
ul li {
  padding: 6px 0;
}
ul li a {
  --fill-color: #198CE6;
  position: relative;
  display: block;
  padding: 4px 0;
  font: 700 3rem Raleway, sans-serif;
  font-size: 34px;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-text-stroke: 2px var(--fill-color);
  background: linear-gradient(var(--fill-color) 0 100%) left/0 no-repeat;
  color: transparent;
  -webkit-background-clip: text;
          background-clip: text;
  transition: 0.5s linear;
}
ul li a:hover {
  background-size: 100%;
} 
.topnav {
    background-color: #333;
    display: flex;
    
    button:hover {
        background-color: #ddd;
        color: black;
    }
    button{
        background-color: #333;
         color:white;
        border:none;
        padding: 14px 16px;


    }
}
.input{
    align-self: center;
    width: 300px;    
}
</style>