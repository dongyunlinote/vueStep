<template>
  <div id="app">
    <sub-menu></sub-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.left{ 
    margin-bottom:20px;
    width:200px; float:left;
    border:1px solid #ccc;
    min-height:600px;
    padding:20px;
    box-sizing:border-box;
  }
  .main{
    display:block;
    border:1px solid #ccc;
    margin-left:200px;
    min-height:600px;
    padding:20px;
    box-sizing:border-box;
  }
  .part{
    border:1px solid #ccc;
    padding:20px;
    box-sizing:border-box;
  }
</style>
