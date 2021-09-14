<template>
  <div class="openShuXin">
    <div class="openShuXinOps baseline">
      <span class="shuXinTitle">&nbsp&nbsp&nbsp人物属性：</span><br>
      <span class="shuXinTitle" @click="closeShuXin" style="margin-right: 2px">❌&nbsp关闭</span>
    </div>
    <div class="shuXinBox">
      <div class="shuXinBoxLeft">
        <p><span class="highlight">【昵称】</span>{{ role.nickname }}</p>
        <p><span class="highlight">【性别】</span>{{ sexMap.boolean[role.sex] }} </p>
        <p><span class="highlight">【经验】</span>{{ role.exp }} / {{ role.nextExp }}</p>
        <p><span class="highlight">【气血】</span>{{ role.hp }} /
          {{ role.property.zui_da_qi_xue }} </p>
        <p><span class="highlight">【内力】</span>{{ role.mp }} /
          {{ role.property.zui_da_nei_li }}</p>
        <p><span class="highlight">【内力上限】</span>{{ role.property.nei_li_shang_xian }}</p>
      </div>
      <div class="shuXinBoxRight">
        <p><span class="highlight">【称号】</span>逍遥派第四代弟子 </p>
        <p><span class="highlight">【等级】</span> {{ role.level }}</p>
        <p><span class="highlight">【潜能】</span>2132174</p>
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
            <p><span class="highlight">【武力】</span>{{ role.property.wl }}&nbsp(+ 0 )&nbsp&nbsp&nbsp&nbsp</p>
            <p><span class="highlight">【身法】</span>{{ role.property.sf }}&nbsp(+ 0 )&nbsp&nbsp&nbsp&nbsp</p>
            <p><span class="highlight">【容貌】</span>23&nbsp&nbsp&nbsp&nbsp</p>
          </div>
          <div class="shuXinBoxRight">
            <p><span class="highlight">【根骨】</span>{{ role.property.gg }}&nbsp(+ 0 )&nbsp&nbsp&nbsp&nbsp</p>
            <p><span class="highlight">【悟性】</span>{{ role.property.wx }}&nbsp(+ 0 )&nbsp&nbsp&nbsp&nbsp</p>
            <p><span class="highlight">【福缘】</span>34&nbsp&nbsp&nbsp&nbsp</p>
          </div>
        </div>
      </div>
      <div style="width: 50%">
        <div class="openShuXinOps baseline">
          <span class="shuXinTitle">&nbsp&nbsp&nbsp战斗属性：</span>
        </div>
        <div class="shuXinBox">
          <div class="shuXinBoxLeft">
            <p><span class="highlight">【攻击】</span>{{ role.property.gong_ji_li }}&nbsp&nbsp&nbsp&nbsp</p>
            <p><span class="highlight">【防御】</span>{{ role.property.fang_yu_li }}&nbsp&nbsp&nbsp&nbsp</p>
            <p><span class="highlight">【躲闪】</span>{{ role.property.duo_shan }}&nbsp&nbsp&nbsp&nbsp</p>
            <p><span class="highlight">【暴击】</span>{{ role.property.bao_ji }}%&nbsp&nbsp&nbsp&nbsp</p>
          </div>
          <div class="shuXinBoxRight">
            <p><span class="highlight">【攻击速度】</span>{{ role.property.gong_ji_su_du }} </p>
            <p><span class="highlight">【招架】</span>{{ role.property.zhao_jia }}</p>
            <p><span class="highlight">【命中】</span>{{ role.property.ming_zhong }}</p>
            <p><span class="highlight">【暴击伤害】</span>{{ role.property.bao_ji_shang_hai }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Property",
  props: {
    showShuXin: Boolean,
    role: {
      property: {}
    }
  },
  data() {
    return {
      sexMap: {
        boolean: {
          1: '男性',
          0: '女性'
        }
      },
    }
  },
  watch: {},
  methods: {
    closeShuXin() {
      this.$emit('close-shu-xin', false)
    },
  }
}
</script>

<style scoped>

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
.baseline {
  border-bottom: 1px dashed #333333;
}
</style>