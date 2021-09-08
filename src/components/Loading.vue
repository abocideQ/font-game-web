<template>
	<div class="markbox" v-show="loading" style="background-color: rgba(0, 0, 0, 0.5);">
		<!-- <div class="sun-loading"></div> -->
		<div class=" sun-loading">
			{{msg}}
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Loading',
		data() {
			return {
				loading: false,
				msg: "加载中...",
				time: 500
			}
		},
		created() {
			var that = this;
			this.bus.$on('loading', function(msg) {
				that.loading = true;
				that.msg = msg;
				setTimeout(function() {
					that.loading = false;
				}, that.time)
			})
			
		}
	}
</script>
<style scoped="scoped">
	.sun-loading {
		width: 200px;
		height: 70px;
		text-align: center;
		align-items: center;
		border-radius: 12px;
		background-color: #DEB887;
		display: flex;
		justify-content: center;
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 20%;
		right: 0;
	}
</style>
