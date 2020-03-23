<template>
	<div>
		<mainheader></mainheader>
		<main-todo></main-todo>
		<main-footer></main-footer>
	</div>
</template>

<script>
	import '../css/global.styl'
	import Mainheader from './Mainheader.vue'
	import MainTodo from './MainTodo.vue'
	import MainFooter from './MainFooter.vue'
	export default{
		name: 'App',
		components: {
			Mainheader: Mainheader,
			MainTodo: MainTodo,
			MainFooter: MainFooter
		}
	}
</script>

<style scoped>
</style>