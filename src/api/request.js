import axios from 'axios'
import QS from 'qs'


// 请求超时时间
axios.defaults.timeout = 3000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';
// 设置公共url
axios.defaults.baseURL = 'http://127.0.0.1:12345'
axios.defaults.timeout = 3000;

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
	if (config.url !== "/user/login" && config.url !== "/user/register") {
		if(localStorage.getItem("t")){
			config.headers.t = localStorage.getItem("t")
		}else{
			alert("登录凭证不存在，请重新登录")
			location.reload();
		}
	}
	// 在发送请求之前做些什么
	return config;
}, function(error) {
	console.log(error);
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
	console.log(response);
	// 对响应数据做点什么
	return response;
}, function(error) {
	console.log(error);
	// 对响应错误做点什么
	return Promise.reject(error);
});

export default axios
