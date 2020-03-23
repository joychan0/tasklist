<template>
	<div id="text">
		{{context}}
	</div>
</template>

<script>
	export default{
		name: 'Mainheader',
		data: function(){
			return{
				context: "备忘录"
			}
		}
	}
</script>

<style scoped>
	div{
		width: 600px;
		margin: auto;
		height: 50px;
		background: white;
		opacity: 50%;
		border-radius: 15px;
		box-shadow: 5px 5px 5px #000000;
	}
	#text{
		font-size: 2em;
		color: black;
		text-align: center;
	}
</style>