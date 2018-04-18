// note template should always have one root element that is div here 
// https://vuejs.org/v2/guide/components.html
<template>
  <div id="app">
    <app-header></app-header>
    
    <!-- Bootstrap Tabs Header  -->
    <!-- <ul class="nav nav-tabs">
      <li class="active"><a data-toggle="tab" href="#basics">Basics</a></li>
      <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
      <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
    </ul> -->

    <!-- Bootstrap Tabs Body  -->
    <!-- <div class="tab-content">
      <div id="basics" class="tab-pane fade in active">
      </div>
      <div id="menu1" class="tab-pane fade">
        <h3>Menu 1</h3>
        <p>Some content in menu 1.</p>
      </div>
      <div id="menu2" class="tab-pane fade">
        <h3>Menu 2</h3>
        <p>Some content in menu 2.</p>
      </div>
    </div> -->

    <!-- Section 5 Starts  -->
    <!-- <app-vbasic></app-vbasic> -->
    <!-- Section 5 Ends -->

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
    <!-- <app-form></app-form> -->
    <!-- Section 11 Ends -->

     <!-- Section 15 Starts  -->
    <!-- <app-vres></app-vres> -->
    <!-- Section 15 Ends -->
    
    <!-- Section 17 Starts  -->
    <app-vuex></app-vuex>
    <!-- Section 17 Ends -->

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import Servers from './components/server/Servers.vue'
import User from './components/user/User.vue';
import Forms from './components/forms/Forms.vue';
import vRes from './components/http/VueResourceCode';
import vBasic from './components/basics/VueInstance.vue';
import vVuex from './components/statemanagement/VuexCode.vue'

export default {
  components : {
    'app-header' : Header,
    'app-footer' : Footer,
    'app-servers': Servers,
    appUser: User, //same as app-user
    'app-form' : Forms,
    'app-vres' : vRes,
    'app-vbasic' : vBasic,
    'app-vuex' : vVuex
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
