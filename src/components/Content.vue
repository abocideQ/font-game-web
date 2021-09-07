<template>
	<div class="home-title">
		<div class="welcome">
			<p>欢迎登录 {{nowTime}}</p>
		</div>
		<div class="ops-box">
			<p>123</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Content',
		data() {
			return {
				path: "ws://127.0.0.1:24680/ws",
				socket: "",
				nowTime: ''

			}

		},
		mounted() {
			this.init()
			this.nowTimes()
		},
		methods: {
			init: function() {
				if (typeof(WebSocket) === "undefined") {
					alert("您的浏览器不支持socket")
				} else {
					// 实例化socket
					this.socket = new WebSocket(this.path)
					// 监听socket连接
					this.socket.onopen = this.open
					// 监听socket错误信息
					this.socket.onerror = this.error
					// 监听socket消息
					this.socket.onmessage = this.getMessage
				}
			},
			open: function() {
				console.log("socket连接成功")
			},
			error: function() {
				console.log("连接错误")
			},
			getMessage: function(msg) {
				console.log(msg.data)
			},
			send: function() {
				this.socket.send(params)
			},
			close: function() {
				console.log("socket已经关闭")
			},


			//显示当前时间（年月日时分秒）
			timeFormate(timeStamp) {
				let year = new Date(timeStamp).getFullYear();
				let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) :
					new Date(timeStamp).getMonth() + 1;
				let date = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp)
					.getDate();
				let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp)
					.getHours();
				let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(
					timeStamp).getMinutes();
				let ss = new Date(timeStamp).getSeconds() < 10 ? "0" + new Date(timeStamp).getSeconds() : new Date(
					timeStamp).getSeconds();
				this.nowTime = year + "年" + month + "月" + date + "日" + " " + hh + ":" + mm + ':' + ss;
			},
			nowTimes() {
				this.timeFormate(new Date());
				setInterval(this.nowTimes, 1000);
				this.clear()
			},
			clear() {
				clearInterval(this.nowTimes)
				this.nowTimes = null;
			}
		},
		destroyed() {
			// 销毁监听
			this.socket.onclose = this.close
		}
	}
</script>

<style scoped="scoped">
	.ops-box {

		height: calc(100vh - 23px)
	}
</style>
