<template>
	<div class="home-title">
		<div class="welcome">
			<p> 欢迎注册</p>
		</div>
		<div class="login-from">
			<div class="email">
				<input type="text" placeholder="请输入你的邮箱" v-model="email" />
			</div>
			<div class="password">
				<input type="password" placeholder="请输入你的密码" v-model="password" />
			</div>
			<span v-show="showMsg!=''" style="color: red;">{{showMsg}}</span>
		</div>
		<div class="options">
			<span class="pointer" @click="register()">注册</span>
			<span class="pointer" @click="toLogin()">登录账号</span>
		</div>
	</div>

</template>

<script>
	import {
		createApi
	} from '../api/UserApi.js'
	export default {
		name: 'Register',
		data() {
			return {
				email: "213",
				password: "123",
				showMsg: ""
			}

		},
		methods: {
			register() {
				console.log("email", this.email, "password", this.password)
				this.bus.$emit('loading', true);
				createApi({
					"email": this.email,
					"password": this.password
				}).then((res) => {
					if (res.data.code == 200) {
						this.showMsg = "创建成功"
						this.$emit('show-view', 1)
					} else {
						this.showMsg = res.data.msg
					}
					this.bus.$emit('loading', false);
				})
			},
			toLogin() {
				this.$emit('show-view', 1)
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

	.options {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-flow: column;
	}
</style>
