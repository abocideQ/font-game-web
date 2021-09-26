<template>
  <div id="app">
    <loading></loading>
    <Login v-on:show-view="type = $event" v-if="type === 1"/>
    <Register v-on:show-view="type = $event" v-if="type === 2 "/>
    <Role v-on:show-view="type =$event" v-if="type === 3"/>
    <RoleCreate v-on:show-view="type = $event" v-if="type === 4"/>
    <Content v-on:show-view="type = $event" v-if="type ===5"/>
  </div>
</template>

<script>
import  Login from './components/Login.vue'
import Register from './components/Register.vue'
import Content from './components/Content.vue'
import Role from './components/Role.vue'
import RoleCreate from './components/RoleCreate.vue'
import Loading from './components/Loading.vue'

export default {
  name: 'app',
  components: {
    Login,
    Register,
    Role,
    RoleCreate,
    Content,
    Loading
  },
  data() {
    return {
      type: 1
    }
  },
  watch: {
    type(newValue, oldValue) {
    }
  },
  created() {
    var t = localStorage.getItem("t")
    console.log("t==>", t)
    if (t) {
      this.type = 3;
    } else {
      this.type = 1;
    }

  },

}
</script>

<style>
.error-text {
  color: red;
}

.home-title {
  width: 60%;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  align-items: center;
  flex-flow: column;
  background-color: #eacd76;
}

.welcome {
  color: white;
  font-size: 14px !important;
  background-color: chocolate;
  width: 100%;
  text-align: center;
  border-radius: 12px 12px 0 0;
}

.pointer {
  padding: 2px 10px;
  border-radius: 12px;
  cursor: pointer;
}

.pointer-nickname {
  cursor: pointer;
  border-radius: 5px;
}

.pointer-nickname:hover {
  background-color: #DEB887;
}

.pointer:hover {
  background-color: burlywood;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;
  padding: 10px 0;
  border-top: #eeeeee solid 1px;
}

.options > span {
  margin: 2px 0;
}

body {
  background-color: #F0F8FF;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}

red {
  color: red;
}
.red{
  color: red;
}

cadetblue {
  color: cadetblue;
}

.one{
  color: white;
}
.two{
  color: #0fb80f;
}
.three{
  color: #0ad9d9;
}
.four{
  color: #6009ec;
}
.five{
  color: #d40404;
}
</style>
