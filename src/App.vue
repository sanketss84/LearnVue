// note template should always have one root element that is div here 
// https://vuejs.org/v2/guide/components.html
<template>
  <div id="app">
    <app-header></app-header>
    
    <!-- Section 7 Starts -->
    <!-- <h1>Hello World</h1> -->
    <!-- <img src="./assets/logo.png" alt=""> works -->
    <!-- <app-servers></app-servers> -->
    <!-- Section 7 Ends -->

    <!-- Section 8 Starts -->
    <!-- <div class="row">
      <div class="col-xs-12">
          <app-user></app-user>
      </div>
    </div> -->
    <!-- Section 8 Ends -->

    <!-- Section 11 Starts  -->
    <app-form></app-form>
    <!-- Section 11 Ends -->
    
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import Servers from './components/server/Servers.vue'
import User from './components/user/User.vue';
import Forms from './components/forms/Forms.vue';

export default {
  components : {
    'app-header' : Header,
    'app-footer' : Footer,
    'app-servers': Servers,
    appUser: User, //same as app-user
    'app-form' : Forms
  }

}
</script>

//by default this style will be applied globally 
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

div.component {
    border: 1px solid black;
    padding: 30px;
}
</style>

//if you want to restrict the style to the current component then use the scoped keyword
<style scoped>

</style>
