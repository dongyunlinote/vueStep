<template>
	<div>
		<button v-bind:disabled="isButtonDisabled"> disabled Button</button>
		<form v-on:submit.prevent="onSubmit">...</form>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				isButtonDisabled: true
			}
		},
		
	}
</script>
