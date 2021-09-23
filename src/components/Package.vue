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
              <div class="popup1">{{ equipment.cheng_hao.property }}</div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover">【武器】：{{ equipment.wu_qi.name }}
              <div class="popup1">{{ equipment.wu_qi.info }}</div></span>
          </div>
        </div>
        <div class="row1-1">
          <div class="row1-1-1">
                   <span class="row1-1-1-hover">【头部】：{{ equipment.tou_bu.name }}
              <div class="popup1">{{ equipment.tou_bu.info }}</div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover">【衣服】：{{ equipment.yi_fu.name }}
              <div class="popup1">{{ equipment.yi_fu.info }}</div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover"> 【披风】：{{ equipment.pi_feng.name }}
              <div class="popup1">{{ equipment.pi_feng.info }}</div></span>
          </div>
        </div>
        <div class="row1-1">
          <div class="row1-1-1">
            <span class="row1-1-1-hover"> 【护腕】：{{ equipment.hu_wang.name }}
              <div class="popup1">{{ equipment.hu_wang.info }}</div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover"> 【腰带】：{{ equipment.yao_dai.name }}
              <div class="popup1">{{ equipment.yao_dai.info }}</div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover"> 【鞋】：{{ equipment.xie_zi.name }}
              <div class="popup1">{{ equipment.xie_zi.info }}</div></span>
          </div>
        </div>
        <div class="row1-1">
          <div class="row1-1-1">
            <span class="row1-1-1-hover">  【戒指】：{{ equipment.jie_zhi.name }}
            <div class="popup1">{{ equipment.jie_zhi.info }}</div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover"> 【项链】：{{ equipment.xiang_liang.name }}
            <div class="popup1">{{ equipment.xiang_liang.info }}</div></span>
          </div>
          <div class="row1-1-1">
            <span class="row1-1-1-hover">   【饰品】：{{ equipment.shi_ping.name }}
            <div class="popup1">{{ equipment.shi_ping.info }}</div></span>
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
            <span class="row3-1-1-hover">{{ item.name }}
              <div class="popup">{{ item.info }}</div></span>
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
  line-height: 30px;
  display: inline-block;
}

.row3-1-1 {
  padding-left: 3px;
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
  font-size: 15px;
  z-index: 999999;
}

</style>