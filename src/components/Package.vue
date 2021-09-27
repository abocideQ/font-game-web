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
            【称号】：<span class="row1-1-1-hover">{{ equipment.cheng_hao.name }}
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.cheng_hao.level]">{{ equipment.cheng_hao.name }}</p>
                <p> {{ levelMap.boolean[equipment.cheng_hao.level] }}</p>
                <p> {{ equipment.cheng_hao.info }}</p>
                <p> {{ equipment.cheng_hao.property }}</p>
                <p v-html="equipment.cheng_hao.property"> </p>
              </div></span>
          </div>
          <div class="row1-1-1">
            【武器】：<span class="row1-1-1-hover"><span
              :class="colorMap.boolean[equipment.wu_qi.level]">{{ equipment.wu_qi.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.wu_qi.level]">{{ equipment.wu_qi.name }}</p>
                <p> {{ levelMap.boolean[equipment.wu_qi.level] }}</p>
                <p> {{ equipment.wu_qi.info }}</p>
                <p v-html="equipment.wu_qi.property"> </p>
              </div></span>
          </div>
        </div>
        <div class="row1-1">
          <div class="row1-1-1">
            【头部】：<span class="row1-1-1-hover"><span
              :class="colorMap.boolean[equipment.tou_bu.level]">{{ equipment.tou_bu.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.tou_bu.level]">{{ equipment.tou_bu.name }}</p>
                                <p> {{ levelMap.boolean[equipment.tou_bu.level] }}</p>

                <p> {{ equipment.tou_bu.info }}</p>
                <p> {{ equipment.tou_bu.property }}</p>
                <p v-html="equipment.tou_bu.property"> </p>
              </div></span>
          </div>
          <div class="row1-1-1">
            【衣服】：<span class="row1-1-1-hover"><span
              :class="colorMap.boolean[equipment.yi_fu.level]">{{ equipment.yi_fu.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.yi_fu.level]">{{ equipment.yi_fu.name }}</p>
                                                <p> {{ levelMap.boolean[equipment.yi_fu.level] }}</p>

                <p> {{ equipment.yi_fu.info }}</p>
                <p v-html="equipment.yi_fu.property"> </p>
              </div></span>
          </div>
          <div class="row1-1-1">
            【披风】：<span class="row1-1-1-hover"> <span
              :class="colorMap.boolean[equipment.pi_feng.level]">{{ equipment.pi_feng.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.pi_feng.level]">{{ equipment.pi_feng.name }}</p>
            <p> {{ levelMap.boolean[equipment.pi_feng.level] }}</p>
                <p> {{ equipment.pi_feng.info }}</p>
                <p v-html="equipment.pi_feng.property"> </p>
              </div></span>
          </div>
        </div>
        <div class="row1-1">
          <div class="row1-1-1">
            【护腕】：<span class="row1-1-1-hover"> <span
              :class="colorMap.boolean[equipment.hu_wang.level]">{{ equipment.hu_wang.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.hu_wang.level]">{{ equipment.hu_wang.name }}</p>
                <p> {{ levelMap.boolean[equipment.hu_wang.level] }}</p>
                <p> {{ equipment.hu_wang.info }}</p>
                <p v-html="equipment.hu_wang.property"> </p>
              </div></span>
          </div>
          <div class="row1-1-1">
            【腰带】：<span class="row1-1-1-hover"> <span
              :class="colorMap.boolean[equipment.yao_dai.level]">{{ equipment.yao_dai.name }}</span>
              <div class="popup1">
                 <p :class="colorMap.boolean[equipment.yao_dai.level]">{{ equipment.yao_dai.name }}</p>
                    <p> {{ levelMap.boolean[equipment.yao_dai.level] }}</p>
                <p> {{ equipment.yao_dai.info }}</p>
                <p v-html="equipment.yao_dai.property"> </p>
              </div></span>
          </div>
          <div class="row1-1-1">
            【鞋】：<span class="row1-1-1-hover"><span
              :class="colorMap.boolean[equipment.xie_zi.level]">{{ equipment.xie_zi.name }}</span>
              <div class="popup1">
                <p :class="colorMap.boolean[equipment.xie_zi.level]">{{ equipment.xie_zi.name }}</p>
                  <p> {{ levelMap.boolean[equipment.xie_zi.level] }}</p>
                <p> {{ equipment.xie_zi.info }}</p>
                <p v-html="equipment.xie_zi.property"> </p>
              </div></span>
          </div>
        </div>
        <div class="row1-1">
          <div class="row1-1-1">
            【戒指】：<span class="row1-1-1-hover"><span
              :class="colorMap.boolean[equipment.jie_zhi.level]">{{ equipment.jie_zhi.name }}</span>
            <div class="popup1">
                <p :class="colorMap.boolean[equipment.jie_zhi.level]">{{ equipment.jie_zhi.name }}</p>
                  <p> {{ levelMap.boolean[equipment.jie_zhi.level] }}</p>

                <p> {{ equipment.jie_zhi.info }}</p>
                <p> {{ equipment.jie_zhi.property }}</p>

            </div></span>
          </div>
          <div class="row1-1-1">
            【项链】：<span class="row1-1-1-hover"> <span
              :class="colorMap.boolean[equipment.xiang_liang.level]">{{ equipment.xiang_liang.name }}</span>
            <div class="popup1">
                <p :class="colorMap.boolean[equipment.xiang_liang.level]">{{ equipment.xiang_liang.name }}</p>
                                <p> {{ levelMap.boolean[equipment.xiang_liang.level] }}</p>

                <p> {{ equipment.xiang_liang.info }}</p>
                <p> {{ equipment.xiang_liang.property }}</p>

            </div></span>
          </div>
          <div class="row1-1-1">
            【饰品】：<span class="row1-1-1-hover"><span
              :class="colorMap.boolean[equipment.shi_ping.level]"> {{ equipment.shi_ping.name }} </span>
            <div class="popup1">
                <p :class="colorMap.boolean[equipment.shi_ping.level]"> {{ equipment.shi_ping.name }}</p>
                                              <p> {{ levelMap.boolean[equipment.shi_ping.level] }}</p>

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
            <span :class="colorMap.boolean[item.level]" class="row3-1-1-hover" @click.stop="pop($event)">{{ item.name }}
              <div class="popup">
                  <p :class="colorMap.boolean[item.level]">{{ item.name }}</p>
                  <p> {{ levelMap.boolean[item.level] }}</p>
                  <p>{{ item.info }}</p>
                  <p v-html="item.property"></p>
                  <p>出售价格 {{ item.sellPrice }}银两</p>
              </div></span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isPop" class="pop" :style="{'left':mouse.left+'px','top':mouse.top+'px'}">
      <div @click="wear">装备</div>
      <div @click="丢弃">丢弃</div>
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
            console.log("element",element)
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
      isPop: false, //弹出选择菜单
      mouse: {
        left: 0,
        top: 0
      },
      type: 1,
      where: {x: 0, y: 0},
      x: 0,
      y: 0,
      levelMap: {
        boolean: {
          1: '品质 一般',
          2: '品质 良好',
          3: '品质 上乘',
          4: '品质 完美',
          5: '品质 神品',
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
    document.addEventListener('click', () => {
      if (this.isPop === true) {
        this.isPop = false
      }
    })
  },
  methods: {
    wear() {
      let data = {
        "command": "wear",
        "itemId": "123",
      }
      this.globalWs.send(JSON.stringify(data))
    },
    丢弃() {
      console.log("丢弃")
    },
    pop(e) {
      this.mouse.left = e.pageX + 5;
      this.mouse.top = e.pageY + 5;
      this.isPop = true;
    },
    closePackage() {
      this.$emit('close-package', false)
    },
    typeChoose(e) {
      this.type = e
      let req = {
        "type": e.toString(),
        "command": "package"
      }
      this.globalWs.send(JSON.stringify(req))
    }
  }
}


</script>

<style scoped>
.pop {
  position: absolute;
  background: #eac087;
  box-shadow: 1px 1px 4px #888;
  font-size: 12px;
  border-radius: 5px;
  z-index: 999;
}

.pop > div {
  margin: 15px 10px;
  cursor: pointer;
  border-bottom: 1px dashed #333333;
}

.pop > div:hover {
  border-radius: 5px;
  background-color: #eeeeee;
}

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