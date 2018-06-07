import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        count:1
    },
    mutations:{
        add(state){
            state.count++;
        },
        reduce(state){
            state.count--;
        }
    },
    getters:{
        count:function(state){
            return state.count +=100;
        }
    },
    actions:{
        addAction(context){
            context.commit('add',10)
        },
        reduceAction({commit}){
            commit('reduce')
        }
    }

})

export default store