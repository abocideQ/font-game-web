import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
// Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
axios.defaults.baseURL='http://127.0.0.1:12345'

new Vue({
	render: h => h(App),
}).$mount('#app')
