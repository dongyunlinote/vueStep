<template>
	<div class="main">
		<div>cssStyle</div>
		<div @click="thens"></div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			
		}
	},
	methods:{
		thens:function(){
			this.$axios.get('https://api.myjson.com/bins/8gdmr')
			.then(res=>{
				console.log(res);
			})
			.catch(function(err) {
			  console.log(err);
			});
		}
	}
}
</script>

<style>
.text-danger { color :red;}
</style>
