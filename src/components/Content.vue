<template>
  <div class="home-title">
    <div class="welcome">
      <p>欢迎登录 {{ nowTime }}</p>
    </div>
    <div class="ops-box">
      <div class="left">12</div>
      <div class="right">
        <div class="right-up">
          <p class="world" v-for="item in msgList">
            【世界】<span class="pointer-nickname">{{ item.nickname }}</span>：{{ item.msg }}</p>
        </div>
        <div class="right-down">
          <div class="right-down-line">
            <label><input type="radio" name="type" value="1">世界</label>
            <!--						<label><input type="radio" name="type" value="2">交易</label>-->
          </div>
          <textarea v-model="msg" type="text" value="" placeholder="说点啥..."/>
          <div class="msg-ops">
            <button @click="sendMsg">发送</button>
          </div>
        </div>
      </div>
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
      nowTime: '',
      msg: '',
      msgList: [],
      role: {}
    }

  },
  mounted() {
    this.nowTimes()
    this.init()
  },
  methods: {
    sendMsg() {
      if (this.msg !== '') {
        let data = {
          "command": "msg",
          "msg": this.msg,
          "nickname":this.role.nickname
        }
        this.send(JSON.stringify(data))
        this.msg=''
      }
    },
    init: function () {
      if (typeof (WebSocket) === "undefined") {
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
    open: function () {
      console.log("socket连接成功")
      this.bus.$emit('loading', "服务器连接成功");
      if (localStorage.getItem("t") && localStorage.getItem("r")) {
        let loginData = {
          "command": "login",
          "r": localStorage.getItem("r"),
          "t": localStorage.getItem("t")
        }
        this.send(JSON.stringify(loginData));


      } else {
        localStorage.removeItem("t")
        localStorage.removeItem("r")
        location.reload();
      }
    },
    error: function () {
      console.log("连接错误")
    },
    getMessage: function (msg) {
      console.log("收到消息：", msg.data, typeof msg.data)
      var obj = JSON.parse(msg.data);
      if (obj.code === "200") {
        if (obj.command === "add msg") {
            this.msgList.push({
              nickname: obj.nickname,
              msg: obj.msg
            })
        } else if (obj.command === "login") {
          this.role = obj.roleInfo
        } else if (obj.command === "other login"){
          console.log(obj.msg)
        }
      } else {
        this.$bus.emit("loading", obj.msg)
      }
    },
    send: function (params) {
      this.socket.send(params)
    },
    close: function () {
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
.jy {
  color: #42B983;
}

.world {
  color: black;
}

.ops-box {
  height: calc(95vh);
  display: flex;
  width: 100%;
}

.ops-box .left {
  width: 80%;
  /* background-color: #42B983; */
  border-radius: 0 0 0 12px;
}

.ops-box .right {
  width: 20%;
  border-left: 2px solid #DEB887;
  /* background-color: #3cbb26; */
  border-radius: 0 0 12px 0;

  display: flex;
  flex-flow: column;
}

.ops-box .right .right-up {
  height: 88%;
  width: 100%;
}

.ops-box .right .right-down {
  border-top: solid 1px #DEB887;
  height: 14%;
  width: 100%;
}

.right-down {
  display: flex;
  flex-flow: column;
}

.right-down > textarea {
  border-radius: 12px;
  flex: 1;
  margin: 5px;
}

.right-down .send {
}

.right-up > p {
  padding-top: 5px;
}

.msg-ops {
  margin: 0 5px;
  display: flex;
  justify-content: flex-end;
}

.msg-ops > button {
  border-radius: 12px;
  border: none;
  margin-bottom: 5px;
}
</style>
