<template>
  <div class="home-title">
    <div class="welcome">
      <p>选择角色</p>
    </div>
    <p style="padding: 5px 0;" v-if="roleList === undefined ||roleList == null || roleList.length <= 0">
      {{ roleMsg }}</p>
    <div class="roleList" v-else id="roleList">
      <p :id="item.id" :class="{'pointer':true}" class="pointer " v-for="item in roleList"
         @click="chooseRole">
        {{ levelMap.boolean[item.level] }}
        {{ sexMap.boolean[item.sex] }}
        {{ item.nickname }}
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
      roleMsg: "加载中...",
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
        if (res.data.data == null || res.data.data.length === 0) {
          this.roleMsg = "暂无角色..."
        }
      }
    })
  },
  methods: {
    signIn() {
      if (localStorage.getItem("r")) {
        this.$emit('show-view', 5)
      } else {
        this.bus.$emit("loading", "请选择角色")
      }
    },
    toCreate() {
      this.$emit('show-view', 4)
    },
    signOut() {
      this.$emit('show-view', 1)
      localStorage.removeItem("t")
    },
    chooseRole(event) {
      var target = event.srcElement || event.target;
      target.setAttribute("class", "pointer choose")
      var s = document.getElementById("roleList");
      var chils = s.childNodes;
      chils.forEach(ele => {
        if (ele.id !== target.id) {
          ele.setAttribute("class", "pointer")
          localStorage.removeItem("r")
        }
      })
      localStorage.setItem("r", target.id)
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
