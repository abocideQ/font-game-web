<template>
  <div class="openPackage">
    <div class="baseline tips">
      <p>&nbsp&nbsp📦&nbsp&nbsp你身上共有&nbsp&nbsp8&nbsp/&nbsp20&nbsp&nbsp件物品</p>
    </div>
    <div class="box">
      <div class="column1">
        <div class="column1-1">&nbsp&nbsp武器</div>
        <div class="column1-1">&nbsp&nbsp头部</div>
        <div class="column1-1">&nbsp&nbsp衣服</div>
        <div class="column1-1">&nbsp&nbsp披风</div>
        <div class="column1-1">&nbsp&nbsp鞋</div>
        <div class="column1-1">&nbsp&nbsp戒指</div>
        <div class="column1-1">&nbsp&nbsp项链</div>
        <div class="column1-1">&nbsp&nbsp饰品</div>
      </div>
      <div class="column2">
        <div class="column2-1">测试的才多拿点测试的</div>
        <div class="column2-1">测试的才多拿点</div>
        <div class="column2-1">测试的才多拿点</div>
        <div class="column2-1">测试的才多拿点</div>
        <div class="column2-1">测试的才多拿点</div>
        <div class="column2-1">测试的才多拿点</div>
        <div class="column2-1">测试的才多拿点</div>
        <div class="column2-1">测试的才多拿点</div>

      </div>
      <div class="column3">
        <div class="column3-1">
          <div class="column3-1-1">测试的才多拿点测试的</div>
          <div class="column3-1-1">测试的才多拿点</div>
          <div class="column3-1-1">测试的才多拿点</div>
          <div class="column3-1-1">测试的才多拿点</div>
          <div class="column3-1-1">测试的才多拿点</div>
          <div class="column3-1-1">测试的才多拿点</div>
          <div class="column3-1-1">测试的才多拿点</div>
          <div class="column3-1-1">测试的才多拿点</div>
        </div>
        <div class="column3-2">
          <div class="column3-2-1">测试的才多拿点测试的</div>
          <div class="column3-2-1">测试的才多拿点</div>
          <div class="column3-2-1">测试的才多拿点</div>
          <div class="column3-2-1">测试的才多拿点</div>
          <div class="column3-2-1">测试的才多拿点</div>
          <div class="column3-2-1">测试的才多拿点</div>
          <div class="column3-2-1">测试的才多拿点</div>
          <div class="column3-2-1">测试的才多拿点</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Package",
  props: {},
  data() {
    return {}
  },
  methods: {
    closePackage() {
      this.$emit('close-package', false)
    },
  }
}
</script>

<style scoped>
.openPackage {
  height: 60%;
  width: 100%;
  background-color: #DEB887;
  display: flex;
  flex-flow: column;
}

.tips {
  height: 5%;
}

.box {
  display: flex;
  flex-flow: row;
  height: 95%;
  justify-content: space-between;
  border-color: #333333;
}

.column1,
.column2 {
  width: 6%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
}

.column1-1,
.column2-1 {
  width: 100%;

}

.column2 {
  width: 23.5%;
  height: 100%;
  border-right: 1px solid #333333;

}

.column3 {
  width: 70.5%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
}
.column3-2,
.column3-1 {
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: start;
}
.column3-1{
 border-right: 1px solid #333333;
}

.column3-1-1,
.column3-2-1{
  width: 100%;
}

.column3-2 {
  width: 100%;
  z-index: 1000;
}

.baseline {
  border-bottom: 1px dashed #333333;
}

</style>