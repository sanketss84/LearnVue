<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change My Name</button>
        <p>Name is: {{name}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- <app-user-detail :username="name"></app-user-detail> -->
                <!-- without the nameWasReset event the parent would not have been aware of the change in the child -->
                <app-user-detail 
                    :username="name" 
                    @nameWasReset="name = $event"
                    :resetFn="resetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data : function (){
            return {
                name : 'Ramesh'
            };
        },
        methods : {
            changeName () {
                this.name = 'Suresh';
            },
            resetName (){
                this.name = 'Ramesh';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
