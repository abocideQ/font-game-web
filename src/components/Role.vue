<template>
	<div class="home-title">
		<div class="welcome">
			<p>选择角色</p>
		</div>
		<p style="padding: 5px 0;" v-if="roleList == undefined ||roleList == null || roleList.length <= 0">暂无角色...</p>
		<div class="roleList" v-else>
			<p class="pointer" v-for="item in roleList">{{item.label}} {{item.name}}</p>
		</div>
		<div class="options">
			<!-- <span v-show="showMsg" style="color: red;">{{errorMsg}}</span> -->
			<span class="pointer" @click="signIn()">进入游戏</span>
			<span class="pointer" @click="toCreate()">创建角色</span>
			<span class="pointer" @click="signOut()">退出登陆</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Role',
		data() {
			return {
				roleList: [
					// {
					// 	id: "1251",
					// 	label: "普通百姓",
					// 	name: "虚竹"
					// },
					// {
					// 	"id": "125541",
					// 	label: "普通百姓",
					// 	name: "段誉"
					// },
					// {
					// 	id: "121251",
					// 	label: "普通百姓",
					// 	name: "乔峰"
					// },
					// {
					// 	id: "154",
					// 	label: "普通百姓",
					// 	name: "慕容复"
					// }
				]
			}
		},
		methods: {
			signIn(){
			},
			toCreate(){
				this.$emit('show-view', 4)
			},
			signOut(){
				this.$emit('show-view', 1)
				localStorage.removeItem("t")
			}
		}
	}
</script>

<style>
	.roleList {
		padding: 5px 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;
		border-bottom: #eeeeee solid 1px;
	}
</style>
