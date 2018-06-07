<template>
    <div class="part">
        <!-- CountMapActions -->
        <h3><!-- {{$store.state.count}} -->  {{count}}</h3>
        <!-- <button @click="$store.commit('add')">+</button> -->
        <!-- <button @click="$store.commit('reduce')">-</button> -->
        <button @click="add">+</button>
        <button @click="reduce">-</button>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
    </div>
</template>
<script>
import store from '@/store/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
    export default{
        // 1
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // },
        
        // 2
        // computed:mapState({
        //     count:state=>state.count
        //  }),
         
        computed: {
            ...mapState(['count']),  //  3

            // count(){
            //     return this.$store.getters.count;
            // }
            ...mapGetters(["count"]) //
        }, 
        methods: {
            ...mapMutations(['add', 'reduce']),
            ...mapActions(['addAction', 'reduceAction'])
        },
        store
    }
</script>