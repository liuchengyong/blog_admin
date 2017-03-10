
import request from 'commons/request';


export const add = data => {
	return request({
		method:'POST',
		url:'/blog/type/add',
		data,
	})
}


export const updateById = data => {
	return request({
		method:'PUT',
		url:'/blog/type/updateById',
		data,
	})
}



export const getAll = data => {
	return request({
		url:'/blog/type/getAll',
		data,
	})
}

export const getById = data => {
	return request({
		url:'/blog/type/getById',
		data,
	})
}

export const deleteByIds = data => {
	return request({
		method:'DELETE',
		url:'/blog/type/deleteByIds',
		data,
	})
}
