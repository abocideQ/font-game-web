import axios from './request.js'

export function loginApi(data) {
	return axios({
		method: "POST",
		url: '/user/login',
		data: data
	});
}
