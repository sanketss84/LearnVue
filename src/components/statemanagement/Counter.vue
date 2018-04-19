<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                // this.$emit('updated', 1); //old way to access counter
                this.$store.state.counter++; //vuex way of accessing the store
            },
            decrement() {
                // this.$emit('updated', -1); //old way
                this.$store.state.counter--; //vuex way of accessing the store
            }
        }
    }
</script>