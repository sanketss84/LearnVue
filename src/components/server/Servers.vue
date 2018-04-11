<template>
    <div>
        <img src="../../assets/logo.png" alt="" class="img-thumbnail">
       <app-server-status v-for="server in 4"></app-server-status>
    </div>
</template>

<script>
    // local or nested component
    // we have created this component and we can use this globally by decalaring this in main.js file
    // note template should always have one root element that is div here 
    // here server is just any thing. you can call it anything its not a specific keyword
    // it like csharp for each var data in collection 

    import ServerStatus from './ServerStatus.vue';
    export default {
       components : {
           'app-server-status' : ServerStatus
       }
    }
</script>
