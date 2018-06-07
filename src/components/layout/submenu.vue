<template>
	<div>
		<!-- <p>{{postTitle}}</p> -->
		<router-link :to="{name: 'Count'}">Count</router-link>
		<router-link :to="{name: 'CountMapState'}">MapState</router-link>
		<router-link :to="{name: 'CountMapMutations'}">MapMutations</router-link>
		<router-link :to="{name: 'CountMapGetters'}">MapGetters</router-link>
		<router-link :to="{name: 'CountMapActions'}">MapActions</router-link>
		<br/>
		<router-link :to="{name: 'SlotBase'}">Slot</router-link>
		<router-link :to="{name: 'ClassStyle'}">ClassStyle</router-link>
	</div>
</template>
<script>
export default{
	data(){
		return{

		}
	},
	props: ['postTitle'],
	
}
</script>

<style scoped>
div{ 
	margin-bottom:20px;
	width:200px; float:left; margin-right:50px;
}
a{
	color:#666; margin:0 5px; display:block; padding:10px; text-align:left;
}
</style>