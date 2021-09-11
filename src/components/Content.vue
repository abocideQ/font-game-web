<template xmlns="http://www.w3.org/1999/html">
  <div class="home-title">
    <div class="welcome content-wel">
      <p>{{ role.nickname }} · {{ levelMap.boolean[role.level] }} · {{ nowTime }}</p>
    </div>
    <div class="ops-box">
      <div class="left">

        <div class="content-left">
          <div class="map-info">地图描述</div>
          <div class="content-info" id="content-info">
            <div class="openShuXin" v-show="shuXinView">
              <div class="openShuXinOps baseline">
                <span class="shuXinTitle">&nbsp&nbsp&nbsp人物属性：</span><br>
                <span class="shuXinTitle" @click="openShuXin" style="margin-right: 2px">❌&nbsp关闭</span>
              </div>
              <div class="shuXinBox">
                <div class="shuXinBoxLeft">
                  <p><span class="highlight">【昵称】</span>{{ role.nickname }}</p>
                  <p><span class="highlight">【性别】</span>{{ sexMap.boolean[role.sex] }} </p>
                  <p><span class="highlight">【经验】</span>32168412 </p>
                  <p><span class="highlight">【气血】</span>214414 / 2313798 </p>
                  <p><span class="highlight">【内力】</span>2134 / 22129</p>
                  <p><span class="highlight">【内力上限】</span>22129</p>
                </div>
                <div class="shuXinBoxRight">
                  <p><span class="highlight">【称号】</span>逍遥派第四代弟子 </p>
                  <p><span class="highlight">【境界】</span>{{ levelMap.boolean[role.level] }}</p>
                  <p> <span class="highlight">【潜能】</span>2132174</p>
                  <p><span class="highlight">【年龄】</span>12年十天</p>
                </div>
              </div>

              <div class="shuXinContainer">
                <div style="width: 50%">
                  <div class="openShuXinOps baseline">
                    <span class="shuXinTitle">&nbsp&nbsp&nbsp先天属性：</span>
                  </div>
                  <div class="shuXinBox">
                    <div class="shuXinBoxLeft">
                      <p><span class="highlight">【武力】</span>{{ role.wl }}&nbsp&nbsp&nbsp&nbsp</p>
                      <p><span class="highlight">【身法】</span>{{ role.sf }}&nbsp&nbsp&nbsp&nbsp</p>
                    </div>
                    <div class="shuXinBoxRight">
                      <p><span class="highlight">【根骨】</span>{{ role.gg }}&nbsp&nbsp&nbsp&nbsp</p>
                      <p><span class="highlight">【悟性】</span>{{ role.wx }}&nbsp&nbsp&nbsp&nbsp</p>
                    </div>
                  </div>
                </div>
                <div style="width: 50%">
                  <div class="openShuXinOps baseline">
                    <span class="shuXinTitle">&nbsp&nbsp&nbsp战斗属性：</span>
                  </div>
                  <div class="shuXinBox">
                    <div class="shuXinBoxLeft">
                      <p><span class="highlight">【攻击】</span>{{ role.wl }}&nbsp&nbsp&nbsp&nbsp</p>
                      <p><span class="highlight">【防御】</span>{{ role.sf }}&nbsp&nbsp&nbsp&nbsp</p>
                      <p><span class="highlight">【躲闪】</span>{{ role.sf }}&nbsp&nbsp&nbsp&nbsp</p>
                      <p><span class="highlight">【暴击】</span>{{ role.sf }}&nbsp&nbsp&nbsp&nbsp</p>
                      <p><span class="highlight">【打坐效率】</span>{{ role.sf }}&nbsp&nbsp&nbsp&nbsp</p>
                    </div>
                    <div class="shuXinBoxRight">
                      <p><span class="highlight">【攻击速度】</span>{{ role.gg }} </p>
                      <p><span class="highlight">【招架】</span>{{ role.wx }}</p>
                      <p><span class="highlight">【命中】</span>{{ role.wx }}</p>
                      <p><span class="highlight">【暴击伤害】</span>{{ role.wx }}</p>
                      <p><span class="highlight">【修炼效率】</span>{{ role.sf }}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <p v-for="item in contentList" v-html="item"></p>
          </div>
        </div>
        <div class="content-right">
          <div class="map">地图</div>
          <div class="nearby">
            <div class="nearby-user">附近的人</div>
            <div class="user-ops">
              <span class="shuxin" @click="openShuXin">属性</span>
              <span class="zhuangbei">背包</span>
              <span class="jineng">技能</span>
              <span class="renwu">任务</span>
              <span class="paihang">排行</span>
              <span class="paimaihang">拍卖行</span>
            </div>
          </div>
        </div>

      </div>
      <div class="right">
        <div class="right-up" id="msg-list">
          <p class="world" v-for="item in msgList">
            <cadetblue>【世界】</cadetblue>
            <span class="pointer-nickname">{{ item.nickname }}</span>：{{ item.msg }}
          </p>
        </div>
        <div class="right-down">
          <div class="right-down-line">
            <label><input type="radio" name="type" value="1">世界</label>
            <!--<label><input type="radio" name="type" value="2">交易</label>-->
          </div>
          <textarea v-model="msg" type="text" value="" placeholder="说点啥..."/>
          <div class="msg-ops">
            <button v-if="times === 11 || times === 0" @click="sendMsg">发送</button>
            <button v-else style="padding: 3px 10px"> {{ times }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


function resetScroll() {
  var contentInfo = document.getElementById("content-info")
  if (contentInfo.scrollHeight) {
    contentInfo.scrollTop = contentInfo.scrollHeight;
  }
  var msgList = document.getElementById("msg-list")
  if (msgList.scrollHeight) {
    msgList.scrollTop = msgList.scrollHeight;
  }
}

export default {
  name: 'Content',
  data() {
    return {
      times: 11,
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
      },
      path: "ws://127.0.0.1:24680/ws",
      socket: "",
      nowTime: '',
      msg: '',
      msgList: [],
      role: {},
      contentList: [],
      shuXinView: false,
    }
  },
  mounted() {
    this.nowTimes()
    this.init()
  },
  watch: {
    contentList(oldValue, newValue) {
      if (newValue.length >= 300) {
        newValue.shift();
      }
    },
    msgList(oldValue, newValue) {
      if (newValue.length >= 300) {
        newValue.shift();
      }
    },
    times(oldValue, newValue) {
      if (newValue <= 0) {
        this.times = 11
      }
    }
  },
  methods: {
    openShuXin() {
      this.shuXinView = !this.shuXinView
    },
    timesCount() {
      this.times--;
      this.timer = setInterval(() => {
        this.times--
        if (this.times === 0) {
          clearInterval(this.timer)
        }
      }, 1000)
    },
    sendMsg() {
      let msg = this.msg.replace(/^\s+|\s+$/g, "");
      if (msg && msg !== '') {
        this.timesCount()
        let data = {
          "command": "msg",
          "msg": msg,
          "nickname": this.role.nickname
        }
        this.send(JSON.stringify(data))
        this.msg = ''
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
    error: function (event) {
      console.log('WebSocket error: ', event);
    },
    getMessage: function (msg) {
      console.log("收到消息：", msg.data, typeof msg.data)
      var obj = JSON.parse(msg.data);
      if (obj.code === "200") {
        if (obj.command === "add msg") { // 聊天室消息添加
          this.msgList.push({
            nickname: obj.nickname,
            msg: obj.msg
          })
          resetScroll();
        } else if (obj.command === "login") { // 登录返回
          this.role = obj.roleInfo
          this.contentList.push(obj.msg)
        } else if (obj.command === "other login") { // 异地登录提示
          console.log(obj.msg)
          this.contentList.push(obj.msg)
        } else if (obj.command === "add content info") { // 添加 content info
          this.contentList.push(obj.msg)
          resetScroll();
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
      this.contentList.push("服务器连接已关闭，请尝试重新登录")
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
.content-wel {
  text-align: start !important;
  padding: 0 10px;
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
  border-radius: 0 0 0 12px;
  display: flex;
}

.content-left {
  width: 70%;
  display: flex;
  flex-flow: column;
  border-radius: 0 0 0 12px;
}

.content-left .map-info {
  height: 20%;
  border-bottom: 1px solid #DEB887;
}

.content-left .content-info {
  height: 80%;
  word-wrap: break-word;
  word-break: break-all;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content-info::-webkit-scrollbar {
  display: none;
}

.content-right .map {
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #DEB887;
}

.content-right .nearby {
  height: 80%;
  width: 100%;
}

.content-right {
  width: 30%;
  border-left: 1px solid #DEB887;

}

.ops-box .right {
  width: 20%;
  border-left: 1px solid #DEB887;
  /* background-color: #3cbb26; */
  border-radius: 0 0 12px 0;
  display: flex;
  flex-flow: column;
}

.ops-box .right .right-up {
  height: 88%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: auto;
}

.right-up::-webkit-scrollbar {
  display: none;
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

.nearby {
  display: flex;
  flex-flow: column;
}

.nearby-user {
  height: 70%;
  width: 100%;
  border-bottom: solid 1px #DEB887;
}

.user-ops {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.user-ops > span {
  cursor: pointer;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 12px;
  background-color: #F0F8FF;
}

.openShuXin {
  height: 60%;
  background-color: #DEB887;
}

.shuXinBox {
  display: flex;
  flex-flow: row;
  justify-content: start;
}

.shuXinTitle {
  font-weight: bold;
  cursor: pointer;
}

.shuXinBoxLeft > p,
.shuXinBoxRight > p {
  margin: 5px;
}

.baseline {
  border-bottom: 1px dashed #333333;
}

.openShuXinOps {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.shuXinContainer {
  margin-top: 10px;
  display: flex;
  flex-flow: row;
  justify-content: start;
}

.highlight {
  color: #204969
}

</style>
