<template>
    <div> 
        <!-- <app-simple></app-simple> -->
        <app-lists></app-lists>
    </div>
</template>

<script>
import simple from './ddrSimple.vue';
import lists from './ddrLists.vue';

export default {
  components : {
    'app-simple' : simple,
    'app-lists' : lists
  }

}
</script>

<style scoped>

</style>