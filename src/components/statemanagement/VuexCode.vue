<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <!-- <app-result :counter="counter"></app-result> -->
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <!-- <app-counter @updated="counter += $event"></app-counter> -->
                <app-counter></app-counter>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './Counter.vue';

    // we have duplicate code for counter multipler in result and another result 
    // solution is instead of directly accessing the counter 
    // we can create a getter for this and access it from multiple components hence our calcs stay in one place.
    import Result from './Result.vue';
    import AnotherResult from './AnotherResult.vue';    

    export default {
        //removed as we now use vuex state.counter
        // data() {
        //     return {
        //         counter: 0
        //     }
        // },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult : AnotherResult
        }
    }
</script>

t