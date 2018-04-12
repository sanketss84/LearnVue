import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
// import Servers from './components/server/Servers.vue'

//Vue Resource configuration
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-4aa7a.firebaseio.com/';

// global component , these are accessible to any components template 
// Vue.component('app-servers', Servers);

//Event Bus for sibling communication
//this has to be above the below new Vue , the order here is important
//this is like publisher subscriber where event name is the channel on which things are published and subbed.
export const eventBus = new Vue({
  data :{
    applicationTitle : 'Global Title'
  },
    //Global Methods
    methods : {
        changeLocation(location) {
            this.$emit('locationWasChanged' , location);
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
