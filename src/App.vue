<template>
  <div id="app">
    <router-view/>
    <welcome/>
    <div>Tip:click Home、Comtact、Help for something fun</div>
    <todolist class="my"></todolist>
    <mainpage/>
  </div>
</template>

<script>
import mainpage from "./components/MainPage"
import todolist from "./components/TodoList"
import welcome from "./components/welcome"

export default {
  name: 'app',
  components:{mainpage,todolist,welcome}
}
</script>

<style>
.my{
      width:100px;
      padding:5px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
