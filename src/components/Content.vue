<template xmlns="http://www.w3.org/1999/html">
  <div class="home-title">
    <div class="welcome content-wel">
      <p>{{ roleBase.nickname }}&nbsp&nbsp
        等级&nbsp{{ roleBase.level }}&nbsp&nbsp经验&nbsp{{ roleBase.exp }}&nbsp/&nbsp{{ roleBase.nextExp }}
        &nbsp&nbsp气血&nbsp{{ roleBase.hp }}&nbsp/&nbsp{{ roleBase.maxHp }}&nbsp&nbsp内力&nbsp{{
          roleBase.mp
        }}&nbsp/&nbsp{{ roleBase.maxMp }}</p>
    </div>
    <div class="ops-box">
      <div class="left">
        <div class="content-left">
          <div class="map-info">地图描述</div>
          <div class="content-info" id="content-info">
            <!--            属性-->
            <Property v-bind:role="role" v-on:close-shu-xin="shuXinView=$event" v-if="shuXinView"/>
            <!--            背包-->
            <Package v-bind:itemList="itemList"
                     v-bind:equipment="equipment"
                     v-on:close-package="packageView=$event"
                     v-if="packageView"/>
            <p v-for="item in contentList" v-html="item"></p>
          </div>
        </div>
        <div class="content-right">
          <div class="map">地图</div>
          <div class="nearby">
            <div class="nearby-user">附近的人</div>
            <div class="user-ops">
              <span class="shuxin" @click="openShuXin">属性</span>
              <span class="zhuangbei" @click="openPackage">背包</span>
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
            <!--<label><input type="radio" name="type" value="2">交易</label> -->
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


import GLOBAL from "../ws/Global"
import Property from "@/components/Property";
import Package from "@/components/Package";

export default {
  name: 'Content',
  components: {
    Property,
    Package,
  },
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
      path: "ws://127.0.0.1:8080/ws?r=",
      socket: "",
      nowTime: '',
      msg: '',
      msgList: [],
      role: {
        property: {}
      },
      roleBase: {},
      package: {},
      contentList: [],
      shuXinView: false,
      packageView: false,
      itemList: [],
      packageType: 1,
      equipment: {
        cheng_hao: {
          name: "暂无装备...",
          property: "",
          info: "",
          level: 0
        },
        wu_qi: {
          name: "暂无装备...",
          property: "",
          info: "",
          level: 0
        },
        tou_bu: {
          name: "暂无装备...",
          property: "",
          info: "",
          level: 0
        },
        yi_fu: {
          name: "暂无装备...",
          property: "",
          info: "",
          level: 0
        },
        pi_feng: {
          name: "暂无装备...",
          property: "",
          info: "",
          level: 0
        },
        hu_wang: {
          name: "暂无装备...",
          property: "",
          info: "",
          level: 0
        },
        yao_dai: {
          name: "暂无装备...",
          property: "",
          info: "",
          level: 0
        },
        xie_zi: {
          name: "暂无装备...",
          property: "",
          info: "",
          level: 0
        },
        jie_zhi: {
          name: "暂无装备...",
          property: "",
          info: "",
          level: 0
        },
        xiang_liang: {
          name: "暂无装备...",
          property: "",
          info: "",
          level: 0
        },
        shi_ping: {
          name: "暂无装备...",
          property: "",
          info: "",
          level: 0
        },
      },
    }
  },
  mounted() {
    GLOBAL.init(this)
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
    },
  },
  methods: {
    openPackage() {
      this.shuXinView = false;
      this.packageView = !this.packageView
      if (this.packageView) {
        let req = {
          "type": this.packageType.toString(),
          "command": "package"
        }
        this.globalWs.send(JSON.stringify(req))
      }
    },
    openShuXin() {
      this.packageView = false;
      this.shuXinView = !this.shuXinView
      if (this.shuXinView) {
        let req = {
          "command": "look"
        }
        this.globalWs.send(JSON.stringify(req))
      }
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
        this.globalWs.send(JSON.stringify(data))
        this.msg = ''
      }
    },
  },
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


</style>
