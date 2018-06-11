<template>
	<div  class="main">
        <!-- CountMapState -->
        <!-- <h3>{{$store.state.count}}</h3> -->
        <h3>{{count}}</h3>
		<button @click="$store.commit('add')">+</button>
		<button @click="$store.commit('reduce')">-</button>
    </div>
</template>

<script>
import store from '@/store/store'
import {mapState} from 'vuex';

	export default{
        data(){
            return{
                mapState:"this is mapState"
            }
        },
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
        computed: {
            ...mapState(["count"])
        }, 
        store
    }
</script>