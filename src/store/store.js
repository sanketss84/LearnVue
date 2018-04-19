import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//since we want to use the counter out of this file so we need to export this as a constant named store.
export const store = new Vuex.Store({

    //note these is a predefined keword called state
    state : {
        counter : 0
    }

});