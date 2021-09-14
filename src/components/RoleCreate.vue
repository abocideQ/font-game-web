<template>
  <div class="home-title">
    <div class="welcome">
      <p>创建角色</p>
    </div>
    <div class="roleCreater">
      <p>角色名称：<input id="nickname" type="text" v-model="nickname" placeholder="请输入2-4个文字" maxlength="4"/>
        <span class="pointer" @click="genName">生成</span>
      </p>
      <p>性别:
        &nbsp;&nbsp;
        <label><input v-model="sex" :checked="sex ===1" type="radio" name="sex" value="1">男性</label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label><input v-model="sex" :checked="sex ===0" type="radio" name="sex" value="0">女性</label>
      </p>
      <p>初始属性：</p>
      <p>
        武力：<input type="number" v-model="WL" max="30" min="15"/>&nbsp;&nbsp;&nbsp;&nbsp;
        根骨：<input type="number" v-model="GG" max="30" min="15"/></p>
      <p>
        悟性：<input type="number" v-model="WX" max="30" min="15"/>&nbsp;&nbsp;&nbsp;&nbsp;
        身法：<input type="number" v-model="SF" max="30" min="15"/></p>
      <p class="error-text" v-show="showMsg!==''">{{ showMsg }}</p>
      <p>每项不低于15点，不高于30点，合计80点</p>
    </div>
    <div class="options">
      <span class="pointer" @click="signIn()">创建</span>
      <span class="pointer" @click="toRole()">选择角色</span>
    </div>
  </div>
</template>
<!-- 
TODO：
	1、属性随机设置一些值，目前是固定 20
 -->
<script>
import randomName from '../assets/js/random-name.js'
import {createRoleApi} from '@/api/UserApi'

function chinaSimple(str) {
  var strs = str.replace(/(^\s+)|(\s+$)/g, "");
  return strs.match(/^[\u4e00-\u9fa5]{2,4}$/);
}

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
    WL(newValue, oldValue) {
      this.checkNumber(newValue, "武力超过合理范围")
    },
    GG(newValue, oldValue) {
      this.checkNumber(newValue, "根骨过合理范围")

    },
    WX(newValue, oldValue) {
      this.checkNumber(newValue, "悟性超过合理范围")

    },
    SF(newValue, oldValue) {
      this.checkNumber(newValue, "身法超过合理范围")
    },
    nickname(newValue, oldValue) {
      if (!chinaSimple(newValue)) {
        this.showMsg = "昵称只能2-4个汉字～"
      } else {
        this.showMsg = ''
      }
    }
  },
  methods: {
    async signIn() {
      if (this.nickname === "") {
        this.showMsg = "昵称只能2-4个汉字～"
      }
      if (this.showMsg !== "") {
        alert(this.showMsg)
      } else {
        this.bus.$emit('loading', "创建角色中...");
        await createRoleApi({
          "sex": parseInt(this.sex),
          "wl": parseInt(this.WL),
          "gg": parseInt(this.GG),
          "wx": parseInt(this.WX),
          "sf": parseInt(this.SF),
          "nickname": this.nickname
        }).then((res) => {
          if (res.data.code === 200) {
            this.bus.$emit('loading', "创建成功...");
            this.$emit("show-view", 3)
          } else {
            this.showMsg = res.data.msg
            this.bus.$emit('loading', res.data.msg);
          }
        })
      }
    },
    toRole() {
      this.$emit("show-view", 3)
    },
    toRegister() {
    },
    genName() {
      this.nickname = randomName.getName()
    },
    checkNumber(value, msg) {
      if (value < 15 || value > 30) {
        this.showMsg = msg
      } else {
        this.showMsg = ''
      }
      let num = parseInt(this.GG) + parseInt(this.SF) + parseInt(this.WL) + parseInt(this.WX)
      console.log(num, typeof num)
      if (num > 80) {
        this.showMsg = "四项属性之和超过80"
      } else if (num < 80) {
        this.showMsg = "还剩余 " + (80 - num) + " 属性点待分配"
      } else {
        this.showMsg = ''
      }
    }
  }
}
</script>

<style scoped="scoped">
.roleCreater {
  padding-top: 10px;
}

.roleCreater > p {
  padding: 7px 0;
}

.roleCreater input {
  padding: 2px 4px;
}
</style>
