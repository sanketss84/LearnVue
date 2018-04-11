// we have created this component and we can use this globally by decalaring this in main.js file
// note template should always have one root element that is div here 
<template>
    <div>
        <hr>
        <p>Server Status : {{status}}</p>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
    export default {
        data : function() {
            return {
                status : 'Critical'
            }
        },
        methods : {
            //changeStatus : function () {} //this is ES5
            //ES6 Sytax of fucntion declaration
            changeStatus () {
                this.status = 'Normal';
            }
        }
    }
</script>