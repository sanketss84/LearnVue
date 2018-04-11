<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        
        <button @click="editAge">Edit Age using Event</button>
        <button @click="editAgeFn()">Edit Age using Callback</button> 
        <button @click="editAgeEventBus">Edit Age using EventBus</button> <br>
        <button @click="editPetsEventBus">Edit Pets Yes using EventBus</button>
        <button @click="editLocationEventBus">Edit Location using EventBus</button> <br>

        <p>User Age : {{userAge}}</p>
        <p>User has pets : {{hasPets}}</p>
        <p>User Location : {{location}}</p>
    </div>
</template>

<script>
    import {eventBus} from '../../main'
    export default {
        data (){
            return {
                hasPets : 'No',
                location : 'USA'
            };
        },
        props : {
            userAge : Number,
            editAgeFn : {
                type : Function
            }
        },
        methods : {
            editAge () {
                this.userAge = 30; //this age is defined in User.vue
                this.$emit('ageWasEdited',this.userAge); //first way using events for sibling communication, event name is ageWasEdited                
            },
            editAgeEventBus () {
                this.userAge = 32;
                eventBus.$emit('ageWasEditedEventBus',this.userAge);
            },
            editPetsEventBus () {
                this.hasPets = 'Yes'
                eventBus.$emit('petsWasEditedEventBus',this.hasPets);
            },
            editLocationEventBus() {
                this.location = 'Canada'
                eventBus.changeLocation(this.location);
            }
        }
    }

</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
