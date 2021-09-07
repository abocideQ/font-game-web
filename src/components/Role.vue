<template>
	<div class="home-title">
		<div class="welcome">
			<p>选择角色</p>
		</div>
		<p style="padding: 5px 0;" v-if="roleList == undefined ||roleList == null || roleList.length <= 0">暂无角色...</p>
		<div class="roleList" v-else>
			<p :class="{'pointer':true,'choose':isActive}" class="pointer " v-for="item in roleList" @click="chooseRole()" >
				{{ levelMap.boolean[item.level]}}
				{{ sexMap.boolean[item.sex]}}
				{{item.nickname}}
			</p>
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
	import {
		getRoleListApi
	} from '../api/UserApi.js'
	export default {
		name: 'Role',
		data() {
			return {
				isActive: false,
				roleList: [],
				sexMap: {
					boolean: {
						1: '男性',
						0: '女性'
					}
				},
				levelMap: {
					boolean: {
						0: '普通百姓',
						1: '初入江湖',
						3: ''
					}
				}
			}
		},
		mounted() {
			getRoleListApi().then((res) => {
				if (res.data.code === 200) {
					this.roleList = res.data.data
				}
			})
		},
		methods: {
			signIn() {},
			toCreate() {
				this.$emit('show-view', 4)
			},
			signOut() {
				this.$emit('show-view', 1)
				localStorage.removeItem("t")
			},
			chooseRole(){
				this.isActive = true
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
	}

	.choose {
		background-color: burlywood;
	}
</style>
