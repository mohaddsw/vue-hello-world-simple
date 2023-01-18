<template>
  <div id="app">
    <HelloWorld />
    <Button>
      text
    </Button>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/vue-button.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Button
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
