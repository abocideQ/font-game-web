<template>
	<div class="login">
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
			<span class="pointer" @click="login()">登录</span>
			<span class="pointer">忘记密码</span>
			<span class="pointer" @click="register()">注册账号</span>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				email: "213",
				password: "123",
			}
		},
		methods: {
			login() {
				console.log("email", this.email, "password", this.password)
				localStorage.setItem("t","diosandi232y3713y82913")
			},
			register() {
				this.$emit('show-register', 2)
			}
		}
	}
</script>


<style scoped="scoped">
	.login {
		width: 50%;
		background-color: aliceblue;
		display: flex;
		justify-content: center;
		border-radius: 12px;
		align-items: center;
		flex-flow: column;
	}

	.welcome {
		background-color: chocolate;
		width: 100%;
		text-align: center;
		border-radius: 12px 12px 0 0;
	}

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

	.options>span {
		padding: 5px 0;
	}
</style>
