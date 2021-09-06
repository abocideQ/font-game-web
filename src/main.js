import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.bus = new Vue;
axios.defaults.baseURL='http://127.0.0.1:12345'
axios.defaults.timeout = 3000;
new Vue({
	render: h => h(App),
}).$mount('#app')
