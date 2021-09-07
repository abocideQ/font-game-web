import axios from './request.js'

export function loginApi(data) {
	return axios({
		method: "POST",
		url: '/user/login',
		data: data
	});
}

export function createApi(data) {
	return axios({
		method: 'POST',
		url: '/user/register',
		data: data
	})
}

export function createRoleApi(data) {
	return axios({
		method: 'POST',
		url: '/user/role/create',
		data: data
	})
}

export function getRoleListApi(){
	return axios({
		method: 'GET',
		url: '/user/role/list',
	})
}