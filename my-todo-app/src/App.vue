<template>
  <div id="app">
    <h1>TarotGame</h1>
    <TarotGame msg="Welcome to TarotGame"/>
  </div>
</template>

<script>
import TarotGame from './components/TarotGame.vue'

export default {
  name: 'App',
  components: {
    TarotGame
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
