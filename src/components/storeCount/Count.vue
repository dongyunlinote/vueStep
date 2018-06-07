<template>
	<div class="part">
        <h3>{{$store.state.count}}</h3>
        <h3>{{count}}</h3>

		<button @click="$store.commit('add')">+</button>
		<button @click="$store.commit('reduce')">-</button>
		<!-- <component :is="who"></component> -->
    </div>
</template>
<script>
import store from '@/store/store'
	export default{
		data(){
			return{
				// who:'CountMapState'
			}
		},
        computed:{
	    	count(){
		        return this.$store.state.count;
		    }
		},
        store
    }
</script>
<style>
.part{ display:inline-block;}
</style>