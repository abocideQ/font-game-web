<template>
  <div class="openPackage">
    <div class="dashedLine tips">
      <p>你身上共有&nbsp&nbsp8&nbsp/&nbsp20&nbsp&nbsp件物品</p>
      <span  @click="closePackage" style="margin-right: 2px;cursor: pointer">关闭</span>
    </div>
    <div class="box">
      <div class="row1 dashedLine">
        <div class="row1-1">
          <div class="row1-1-1">称号：测试的才多拿点</div>
          <div class="row1-1-1">武器：测试的才多拿点</div>
        </div>
        <div class="row1-1">
          <div class="row1-1-1">头部：测试的才多拿点</div>
          <div class="row1-1-1">衣服：测试的才多拿点</div>
          <div class="row1-1-1">披风：测试的才多拿点</div>
        </div>
<!--        <div class="row1-1">-->
<!--          <div class="row1-1-1">腰带：测试的才多拿点</div>-->
<!--          <div class="row1-1-1">戒指：测试的才多拿点</div>-->
<!--        </div>-->
        <div class="row1-1">
          <div class="row1-1-1">护腕：测试的才多拿点</div>
          <div class="row1-1-1">腰带：测试的才多拿点</div>
          <div class="row1-1-1">鞋：测试的才多拿点</div>
        </div>
        <div class="row1-1">
          <div class="row1-1-1">戒指：测试的才多拿点</div>
          <div class="row1-1-1">项链：测试的才多拿点</div>
          <div class="row1-1-1">饰品：测试的才多拿点</div>
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
              <div
                  class="popup">
                32y1839721839712893代表苏啊地方奤UI护肤的四方还顺带u分三等分发撒的
                32y1839721839712893代表苏啊地方奤UI护肤的四方还顺带u分三等分发撒的</div></span>
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
    itemList:[],
    equipmentList:[]
  },
  data() {
    return {
      type: 1,
      where: {x: 0, y: 0},
      x: 0,
      y: 0,
      itemList: [
        [
          {
            name: "测试的才多拿点1"
          },
          {
            name: "测试的才多拿点4"
          },
        ],
        [
          {
            name: "测试的才多拿点2"
          }
        ],
        [
          {
            name: "测试的才多拿点3"
          }
        ], [
          {
            name: "测试的才多拿点3"
          }
        ],
      ]
    }
  },
  mounted: function () {
    var ele = document.querySelectorAll(".row3-1-1");
    var len = ele.length;
    for (var i = 0; i < len; i++) {
      let element = ele[i].querySelector(".row3-1-1-hover")
      let alert = ele[i].querySelector(".popup")
      element.onmousemove = function (e) {
        alert.style.left = e.clientX + 10 + "px"
        // alert.style.top = e.clientY - alert.clientHeight + "px"
        alert.style.top = e.clientY + "px"

        alert.style.display = "block";
      };//鼠标移入
      element.onmouseout = function () {
        alert.style.display = "none";
      };//鼠标移出
    }

  },
  methods: {
    closePackage() {
      this.$emit('close-package', false)
    },
    typeChoose(e) {
      this.type = e
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
  justify-content: space-around;
  align-items: center;
}

.row1-1-1 {
  margin-left: 3px;
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

.popup {
  display: none;
  position: absolute;
  width: 200px;
  background: RGBa(53, 70, 255, 0.4);
  color: #fff;
  font-size: 15px;
  z-index: 999999;
}

</style>