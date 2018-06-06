<template>
	<div>
		<input type="input" v-model="firstName">
		<input type="input" v-model="lastName">
		<div>fullName:{{ fullName }}</div><br>

		<input type="input" v-model.number="num1">+<input type="input" v-model.number="num2">=
		<input type="input" v-model.number="sum">

	</div>
</template>
<script>
	export default{
		data(){
			return{
				firstName: 'Foo',
			    lastName: 'Bar',
			    num1:"",
			    num2:"",
			}
		},
		computed: {
		    fullName: function () {
		      return this.firstName + ' ' + this.lastName
			},
			sum:function(){
				return (this.num1+this.num2);
			}
		},
		watch: {
		   //  firstName: function (val) {
		   //   	this.fullName = val + ' ' + this.lastName
		  	// },
		  	// lastName: function (val) {
		   //   	this.fullName = this.firstName + ' ' + val
		   // 	},
		   	secondChange:{
		        handler(oldVal,newVal){
		          console.log(oldVal)
		          console.log(newVal)
		        },
		        deep:true
		      }
		},
	}
</script>
<style>
input{ width: 60px; display: inline-block; height: 30px; margin: 0 5px; }	
</style>