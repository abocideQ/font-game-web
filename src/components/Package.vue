<template>
  <div class="openPackage">
    <div class="dashedLine tips">
      <p>你身上共有&nbsp&nbsp8&nbsp/&nbsp20&nbsp&nbsp件物品</p>
      <span @click="closePackage" style="margin-right: 2px;cursor: pointer">关闭</span>
    </div>
    <div class="box">
      <div class="row1 dashedLine">
        <div class="row1-1">
          <div class="row1-1-1">
            <span class="row1-1-1-hover">【称号】：{{ equipment.cheng_hao.name }}
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.cheng_hao.level]">{{ equipment.cheng_hao.name }}</p>
                <p> {{ equipment.cheng_hao.info }}</p>
                <p> {{ equipment.cheng_hao.property }}</p>
                <p v-html="equipment.cheng_hao.property"> </p>
              </div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover">【武器】：<span
                :class="colorMap.boolean[equipment.wu_qi.level]">{{ equipment.wu_qi.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.wu_qi.level]">{{ equipment.wu_qi.name }}</p>
                <p> {{ equipment.wu_qi.info }}</p>
                <p v-html="equipment.wu_qi.property"> </p>
              </div></span>
          </div>
        </div>
        <div class="row1-1">
          <div class="row1-1-1">
                   <span class="row1-1-1-hover">【头部】：<span
                       :class="colorMap.boolean[equipment.tou_bu.level]">{{ equipment.tou_bu.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.tou_bu.level]">{{ equipment.tou_bu.name }}</p>
                <p> {{ equipment.tou_bu.info }}</p>
                <p> {{ equipment.tou_bu.property }}</p>
                <p v-html="equipment.tou_bu.property"> </p>
              </div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover">【衣服】：<span
                :class="colorMap.boolean[equipment.yi_fu.level]">{{ equipment.yi_fu.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.yi_fu.level]">{{ equipment.yi_fu.name }}</p>
                <p> {{ equipment.yi_fu.info }}</p>
                <p v-html="equipment.yi_fu.property"> </p>
              </div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover"> 【披风】：<span
                :class="colorMap.boolean[equipment.pi_feng.level]">{{ equipment.pi_feng.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.pi_feng.level]">{{ equipment.pi_feng.name }}</p>
                <p> {{ equipment.pi_feng.info }}</p>
                <p v-html="equipment.pi_feng.property"> </p>
              </div></span>
          </div>
        </div>
        <div class="row1-1">
          <div class="row1-1-1">
            <span class="row1-1-1-hover"> 【护腕】：<span
                :class="colorMap.boolean[equipment.hu_wang.level]">{{ equipment.hu_wang.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.hu_wang.level]">{{ equipment.hu_wang.name }}</p>
                <p> {{ equipment.hu_wang.info }}</p>
                <p v-html="equipment.hu_wang.property"> </p>
              </div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover"> 【腰带】：<span
                :class="colorMap.boolean[equipment.yao_dai.level]">{{ equipment.yao_dai.name }}</span>
              <div class="popup1">
                 <p :class="colorMap.boolean[equipment.yao_dai.level]">{{ equipment.yao_dai.name }}</p>
                <p> {{ equipment.yao_dai.info }}</p>
                <p v-html="equipment.yao_dai.property"> </p>
              </div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover"> 【鞋】：<span
                :class="colorMap.boolean[equipment.xie_zi.level]">{{ equipment.xie_zi.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.xie_zi.level]">{{ equipment.xie_zi.name }}</p>
                <p> {{ equipment.xie_zi.info }}</p>
                <p v-html="equipment.xie_zi.property"> </p>
              </div></span>
          </div>
        </div>
        <div class="row1-1">
          <div class="row1-1-1">
            <span class="row1-1-1-hover">  【戒指】：<span
                :class="colorMap.boolean[equipment.jie_zhi.level]">{{ equipment.jie_zhi.name }}</span>
            <div class="popup1">
                <p :class="colorMap.boolean[equipment.jie_zhi.level]">{{ equipment.jie_zhi.name }}</p>
                <p> {{ equipment.jie_zhi.info }}</p>
                <p> {{ equipment.jie_zhi.property }}</p>

            </div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover"> 【项链】：<span
                :class="colorMap.boolean[equipment.xiang_liang.level]">{{ equipment.xiang_liang.name }}</span>
            <div class="popup1">
                <p :class="colorMap.boolean[equipment.xiang_liang.level]">{{ equipment.xiang_liang.name }}</p>
                <p> {{ equipment.xiang_liang.info }}</p>
                <p> {{ equipment.xiang_liang.property }}</p>

            </div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover">   【饰品】：<span
                :class="colorMap.boolean[equipment.shi_ping.level]"> {{ equipment.shi_ping.name }} </span>
            <div class="popup1">
                <p :class="colorMap.boolean[equipment.shi_ping.level]"> {{ equipment.shi_ping.name }}</p>
                <p> {{ equipment.shi_ping.info }}</p>
                <p> {{ equipment.shi_ping.property }}</p>
            </div></span>
          </div>
        </div>
      </div>
      <div class="row2">
        <span :class="{'row2-choose':type===1}" @click="typeChoose(1)">装备</span>
        <span :class="{'row2-choose':type===2}" @click="typeChoose(2)">消耗品</span>
        <span :class="{'row2-choose':type===3}" @click="typeChoose(3)">材料</span>
        <span :class="{'row2-choose':type===4}" @click="typeChoose(4)">技能</span>
      </div>
      <div class="row3">
        <div class="row3-1" v-for="list in itemList">
          <div class="row3-1-1" v-for="(item,index) in list">
            <span :class="colorMap.boolean[item.level]" class="row3-1-1-hover">{{ item.name }}
              <div class="popup">
                  <p :class="colorMap.boolean[item.level]">{{ item.name }}</p>
                  <p> {{ levelMap.boolean[item.level] }}</p>
                  <p>{{ item.info }}</p>
                  <p>出售价格 {{ item.sellPrice }}银两</p>
              </div></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Package",
  props: {
    itemList: Array,
    equipment: Object
  },
  watch: {
    itemList(newV, oldV) {
      this.$nextTick(() => {
        {
          const ele = document.querySelectorAll(".row3-1-1");
          var len = ele.length;
          for (let i = 0; i < len; i++) {
            let element = ele[i].querySelector(".row3-1-1-hover")
            let alert = ele[i].querySelector(".popup")
            element.onmousemove = function (e) {
              alert.style.left = e.clientX + 10 + "px"
              alert.style.top = e.clientY + "px"
              alert.style.display = "block";
            };//鼠标移入
            element.onmouseout = function () {
              alert.style.display = "none";
            };//鼠标移出
          }
        }
        {
          const ele = document.querySelectorAll(".row1-1-1");
          console.log(ele)
          var len = ele.length;
          for (let i = 0; i < len; i++) {
            let element = ele[i].querySelector(".row1-1-1-hover")
            let alert = ele[i].querySelector(".popup1")
            element.onmousemove = function (e) {
              alert.style.left = e.clientX + 10 + "px"
              alert.style.top = e.clientY + "px"
              alert.style.display = "block";
            };//鼠标移入
            element.onmouseout = function () {
              alert.style.display = "none";
            };//鼠标移出
          }
        }
      })
    }
  },
  data() {
    return {
      type: 1,
      where: {x: 0, y: 0},
      x: 0,
      y: 0,
      levelMap: {
        boolean: {
          1: '一般',
          2: '良好',
          3: '上乘',
          4: '完美',
          5: '神品',
        }
      },
      colorMap: {
        boolean: {
          1: 'one',
          2: 'two',
          3: 'three',
          4: 'four',
          5: 'five',
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    closePackage() {
      this.$emit('close-package', false)
    },
    typeChoose(e) {
      this.type = e
      this.$emit('type', e);
    }
  }
}


</script>

<style scoped>

.openPackage {
  height: 60%;
  width: 100%;
  background-color: #DEB887;
}

.tips {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.box {
  display: flex;
  flex-flow: column;
  height: 95%;
  justify-content: space-between;
  border-color: #333333;
}

.row1 {
  height: 15%;
  z-index: 9999;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-content: center;
}

.row1-1 {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
}

.row1-1-1 {
  margin-left: 3px;
  cursor: pointer
}

.row2 {
  height: 5%;
  display: flex;
  flex-flow: row;
  align-items: center;
}

.row2 > span {
  padding: 3px 5px;
  cursor: pointer;
  font-weight: bold;
}

.row2 > span:hover {
}

.row2-choose {
  background-color: #a08560;
  border-bottom: 1px dashed #333333;
}

.row3 {
  height: 80%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow-y: auto;
}

.row3-1 {
  /*height: 100%;*/
  width: 100%;
  /*background-color: #42b983;*/
  z-index: 999;
  display: inline-block;
}

.row3-1-1 {
  padding: 5px 0 5px 3px;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px dashed #333333;
}

.dashedLine {
  border-bottom: 1px dashed #333333;
}

.popup,
.popup1 {
  display: none;
  position: absolute;
  width: 200px;
  background: RGBa(53, 70, 255, 0.4);
  color: #fff;
  font-size: 14px;
  z-index: 999999;
}


</style>