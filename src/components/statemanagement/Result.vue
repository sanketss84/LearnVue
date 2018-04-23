<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        // props: ['counter'] //old way
        computed : {
            counter () {
                //we now move the calculation logic to store getters
                // return this.$store.state.counter * 2;
                return this.$store.getters.doubleCounter;
            }
        }
    }
</script>