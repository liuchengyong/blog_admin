
import request from 'commons/request';


export const add = data => {
	return request({
		method:'POST',
		url:'/blog/article/add',
		data,
	})
}


export const updateById = data => {
	return request({
		method:'PUT',
		url:'/blog/article/updateById',
		data,
	})
}



export const getAll = data => {
	return request({
		url:'/blog/article/getAll',
		data,
	})
}

export const getById = data => {
	return request({
		url:'/blog/article/getById',
		data,
	})
}

export const deleteByIds = data => {
	return request({
		method:'DELETE',
		url:'/blog/article/deleteByIds',
		data,
	})
}
