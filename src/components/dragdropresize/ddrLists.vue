<template>
<div>
    <!-- https://vuejsfeed.com/blog/drag-and-drop-elements-with-vue-draggable -->
    <!-- https://jsfiddle.net/dede89/m2v0orcn/ -->
    <div class="drag">
        <draggable :list="list">
            <transition-group>
                <div v-for="element in list" :key="element.name">
                        <h2>{{element.name}} {{element.order}}</h2>
                </div>
            </transition-group>
        </draggable>
     </div>
</div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
data () {
    return {
        list: [
        //array of objects
        {"name" : "Sanket" , "order" : 1 , "fixed" : true},
        {"name" : "Ankita" , "order" : 2 , "fixed" : false},
        {"name" : "Sunil" , "order" : 3 , "fixed" : false},
        {"name" : "Shobha" , "order" : 4 , "fixed" : false}
        ]
    }
},
components: {
    draggable
}
}

</script>