import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false


Vue.prototype.bus = new Vue;

new Vue({
	render: h => h(App),
}).$mount('#app')
