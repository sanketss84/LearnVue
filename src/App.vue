// note template should always have one root element that is div here 
<template>
  <div id="app">
    <app-header></app-header>
    <h1>Hello World</h1>
    <app-servers></app-servers>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import Servers from './components/server/Servers.vue'
export default {
  components : {
    'app-header' : Header,
    'app-footer' : Footer,
    'app-servers': Servers
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
