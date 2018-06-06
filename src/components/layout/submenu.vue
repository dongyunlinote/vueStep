<template>
	<div>
		<!-- <p>{{postTitle}}</p> -->
		<router-link :to="{name: 'Count'}">Count</router-link>
		<router-link :to="{name: 'CountMapState'}">CountMapState</router-link>
		<router-link :to="{name: 'CountMapMutations'}">CountMapMutations</router-link>
		<router-link :to="{name: 'CountMapGetters'}">CountMapGetters</router-link>
		<router-link :to="{name: 'CountMapActions'}">CountMapActions</router-link>
		<router-link :to="{name: 'SlotBase'}">SlotBase</router-link>
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
}
a{
	color:#666; margin:0 5px;
}
</style>