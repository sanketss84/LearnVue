<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name : {{username}}</p>
        <p>User Name Reversed : {{switchName()}}</p>

        <!-- this is method 1 of passing data to parent using events  -->
        <button @click="resetName">Reset Name using Events</button>
        
        <!-- this is method 2 of passing data to parent using props and callback function -->
        <!-- this calls the resetFn() i.e. resetName() specified in the User.vue file -->
        <button @click="resetFn()">Reset Name using Callback</button>
    </div>
</template>

<script>
    export default {
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
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
