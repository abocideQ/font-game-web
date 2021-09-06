<template>
	<div class="home-title">
		<div class="welcome">
			<p>创建角色</p>
		</div>
		<div class="roleCreater">
			<p>角色名称：<input id="nickname" type="text" v-model="nickname" placeholder="请输入2-4个文字" />
				<span class="pointer" @click="genName">生成</span>
			</p>
			<p>性别:
				&nbsp;&nbsp;
				<label><input v-model="sex" :checked="sex ==1" type="radio" name="sex" value="1">男性</label>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<label><input v-model="sex" :checked="sex ==0" type="radio" name="sex" value="0">女性</label>
			</p>
			<p>初始属性：</p>
			<p>
				武力：<input type="number" v-model="WL" max="30" min="15" />&nbsp;&nbsp;&nbsp;&nbsp;
				根骨：<input type="number" v-model="GG" max="30" min="15" /></p>
			<p>
				悟性：<input type="number" v-model="WX" max="30" min="15" />&nbsp;&nbsp;&nbsp;&nbsp;
				身法：<input type="number" v-model="SF" max="30" min="15" /></p>
			<p class="error-text" v-show="showMsg!=''">{{showMsg}}</p>
			<p>每项不低于15点，不高于30点，合计80点</p>
		</div>
		<div class="options">
			<span class="pointer" @click="signIn()">创建</span>
			<span class="pointer" @click="signOut()">选择角色</span>
		</div>
	</div>
</template>

<script>
	import randomName from '../assets/js/random-name.js'
	export default {
		name: 'RoleCreate',
		data() {
			return {
				showMsg: "",
				sex: 1,
				WL: 20,
				GG: 20,
				WX: 20,
				SF: 20,
				nickname: "",
			}
		},
		watch: {
		},
		methods: {
			signIn() {},
			toCreate() {},
			toRegister() {},
			genName() {
				this.nickname = randomName.getName()
			},
			changeSex(sex) {

			}
		}
	}
</script>

<style scoped="scoped">
	.roleCreater {
		padding-top: 10px;
	}

	.roleCreater>p {
		padding: 7px 0;
	}

	.roleCreater input {
		padding: 2px 2px;
	}
</style>
