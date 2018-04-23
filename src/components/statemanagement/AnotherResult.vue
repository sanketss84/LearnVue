<template>
    <div>
        <!-- mapGetters method 1 -->
        <!-- <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks : {{ stringCounter }}</p> -->

        <!-- mapGetters method 2 -->
        <p>Counter is: {{ counter }}</p>
        <p>Number of clicks : {{ clicks }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        // props: ['counter'] //old way
        //further problem here now is we have two computed properties counter and clicks to fetch the getters here
        //if we add mroe more getters then we have to repeat this code for every getter that we add.
        //vuex has a helper methid for this
        // computed : {
        //     counter () {
        //         // return this.$store.state.counter * 2;
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks () {
        //         return this.$store.getters.stringCounter;
        //     }
        // }

        // using mapGetters method 1
        // computed : mapGetters([ 'doubleCounter' , 'stringCounter'])

        // using mapGetters method 2
        computed : mapGetters({
            counter : 'doubleCounter',
            clicks : 'stringCounter'
        })


    }
</script>