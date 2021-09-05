<template>
	<div class="content">
		<div class="right">
			<div class="row1">
			<div class="info-ops"></div>
			<div class="map-log">
				<div class="map"></div>
				<div class="log"></div>
			</div>
			</div>
			<div class="row2"></div>
		</div>
		<div class="left"></div>
	</div>
</template>

<script>
	export default {
		name: 'Content',
		data() {
			return {

			}

		},
		methods: {}
	}
</script>

<style scoped="scoped">
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70%;
		margin-top: 20px;
	}

	.right {
		width: 80%;
		background-color: white;
		height: 800px;
		border-radius: 12px 0 0 12px;
		display: flex;
		flex-flow: column;
	}
	.row1{
		width: 100%;
		height: 75%;
		background-color: #F0F8FF;
		display: flex;
		flex-flow: row;
	}
	.row2{
		height: 25%;
		width: 100%;
		background-color: beige;
	}
	.row1 > .info-ops {
		width: 70%;
		height: 100%;
		background-color: #42B983;
	}
	.row1 > .map-log {
		width: 30%;
		height: 100%;
		background-color: #586740;
		display: flex;
		justify-content: center;
	}
	.row1 > .map-log > .map{
		
	}
	.row1 > .map-log > .log{
		
	}
	
	.left {
		width: 20%;
		background-color: #D2691E;
		height: 800px;
		border-radius: 0 12px 12px 0;
	}
</style>
