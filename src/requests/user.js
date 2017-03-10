
import request from 'commons/request';

export const login = data => {
	return request({
		method:'POST',
		url:'/blog/user/login',
		data,
	})
}

export const add = data => {
	return request({
		method:'POST',
		url:'/blog/user/add',
		data,
	})
}

export const updateById = data => {
	return request({
		method:'PUT',
		url:'/blog/user/updateById',
		data,
	})
}

export const getAll = data => {
	return request({
		url:'/blog/user/getAll',
		data,
	})
}


export const getById = data => {
	return request({
		url:'/blog/user/getById',
		data,
	})
}

export const deleteByIds = data => {
	return request({
		method:'DELETE',
		url:'/blog/user/deleteByIds',
		data,
	})
}
