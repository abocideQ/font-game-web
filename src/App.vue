<template>
	<div id="app">
		
		<Login v-on:show-register="type = $event" v-if="type == 1" />
		<Register v-if="type == 2 " />
		<Content v-if="type ==3" />
 
	</div>
</template>

<script>
	import Login from './components/Login.vue'
	import Register from './components/Register.vue'
	import Content from './components/Content.vue'
	export default {
		name: 'app',
		components: {
			Login,
			Register,
			Content,
		},
		data() {
			return {
				type: 1
			}
		},
		created() {
			var t = localStorage.getItem("t")
			console.log("t==>", t)
			if (t) {
				this.type = 3;
			} else {
				this.type = 1;
			}

		}

	}
</script>

<style>
	.pointer {
		cursor: pointer;
	}

	body {
		background-color: antiquewhite;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
