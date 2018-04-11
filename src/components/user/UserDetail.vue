<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name : {{username}}</p>
        <p>User Name Reversed : {{switchName()}}</p>
        <p>User Age : {{userAge}}</p>
        <p>User has Pets : {{hasPets}}</p>
        <p>User Location : {{location}}</p>

        <!-- this is method 1 of passing data to parent using events  -->
        <button @click="resetName">Reset Name using Events</button>
        
        <!-- this is method 2 of passing data to parent using props and callback function -->
        <!-- this calls the resetFn() i.e. resetName() specified in the User.vue file -->
        <button @click="resetFn()">Reset Name using Callback</button>
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
        // props : ['username'],
        //we can have validation of props, here we want that name should be of type string and not a number as 
        //split operation fails on number.
        props : {
            // username : String
            // username : [String , Array] //we can have prop of multiple types as well
            username : {
                type : String,
                required : true,
                // default : 'Sanket' 
            },
            userAge : Number,
            resetFn : {
                type : Function
            },
            sampleUserDataObject : {
                type : Object,
                default : function () {
                    return {
                        firstName : 'John',
                        lastName : 'Doe',
                        age : 40
                    };
                }
            },
            sampleCarsArray : {
                type : Array,
                default : function () {
                    return ["Saab", "Volvo", "BMW"]
                }
            }
        },
        methods : {
            switchName () {
                //username is accessible here just like any thing declared in data object
                return this.username.split("").reverse().join("");
            },
            resetName () {
                this.username = 'Ramesh'
                //string , number and boolean are primitives and can be accessed like this
                //if we were dealing with objects or arrays here please remember that they are of reference types
                //which means they only access the memory once.

                this.$emit('nameWasReset' , this.username);
            }
        },
        //Check Lifecycle Hook : created
        //NOTE : THIS IS OUTSIDE OF METHODS ALWAYS BE CAREFUL
        created() {
                console.log('created lifecycle called');
                // Setup a listener to this event
                // This listener will keep running from the beginning of this component on

                // In the callback function we always get data here the name is upto us it can be data or anything 
                // here we know that for the ageWasEdited event its the age that comes back
                // eventBus.on('ageWasEdited', (data) => {
                eventBus.$on('ageWasEditedEventBus', (age) => {
                    this.userAge = age;
                }); //listen to ageWasEditedEventBus event

                eventBus.$on('petsWasEditedEventBus',(data) => {
                    this.hasPets = data;
                });

                eventBus.$on('locationWasChanged',(data) => {
                    this.location = data;
                });
            }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
