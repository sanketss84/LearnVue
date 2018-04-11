import Vue from 'vue'
import App from './App.vue'
// import Servers from './components/server/Servers.vue'

// global component , these are accessible to any components template 
// Vue.component('app-servers', Servers);

new Vue({
  el: '#app',
  render: h => h(App)
})
