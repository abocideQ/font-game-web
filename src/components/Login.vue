<template>
	<div class="home-title">
		<div class="welcome">
			<p> 欢迎登陆</p>
		</div>
		<div class="login-from">
			<div class="email">
				<input type="text" placeholder="请输入你的邮箱" v-model="email" />
			</div>
			<div class="password">
				<input type="password" placeholder="请输入你的密码" v-model="password" />
			</div>
		</div>
		<div class="options">
			<span v-show="showMsg!==''" style="color: red;">{{showMsg}}</span>
			<span class="pointer" @click="login()">登录</span>
			<span class="pointer">忘记密码</span>
			<span class="pointer" @click="toRegister()">注册账号</span>
		</div>
	</div>

</template>

<script>
	import {
		loginApi
	} from '../api/UserApi.js'
	export default {
		name: 'Login',
		data() {
			return {
				email: "",
				password: "",
				showMsg: ""
			}
		},
		methods: {
			async login() {
				const login = await loginApi({
					"email": this.email,
					"password": this.password
				}).then((res) => {
					if (res.data.code === 200) {
						localStorage.setItem("t", res.data.data)
            location.reload();
					} else {
						this.showMsg = res.data.msg
					}
				})
			},
			toRegister() {
				this.$emit('show-view', 2)
			}
		}
	}
</script>


<style scoped="scoped">
	.login-from {
		padding: 10px 0;
	}

	.email,
	.password {
		padding: 5px 0;
	}

	.email>input,
	.password>input {
		padding: 5px 0;
	}
</style>
