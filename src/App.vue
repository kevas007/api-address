<template>
  <div id="app">
    <HelloWorld/>
    <Crads/>
    <Maps/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Maps from './components/Maps.vue'
import Crads from './components/Crads.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Maps,
    Crads
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
}
</style>
