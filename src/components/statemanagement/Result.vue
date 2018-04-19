<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        // props: ['counter'] //old way
        computed : {
            counter () {
                return this.$store.state.counter;
            }
        }
    }
</script>