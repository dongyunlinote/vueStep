<template>
    <div  class="main">
        <!-- CountMapMutations -->
        <h3><!-- {{$store.state.count}} -->  {{count}}</h3>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
    </div>
</template>
<script>
import store from '@/store/store'
import { mapState, mapMutations } from 'vuex';
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
        //  3
        computed:{
            ...mapState(["count"])
        }, // ES6
        methods:{
            ...mapMutations(['add', 'reduce'])
        },
        store
    }
</script>