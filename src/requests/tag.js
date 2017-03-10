
import request from 'commons/request';


export const add = data => {
	return request({
		method:'POST',
		url:'/blog/tag/add',
		data,
	})
}


export const updateById = data => {
	return request({
		method:'PUT',
		url:'/blog/tag/updateById',
		data,
	})
}



export const getAll = data => {
	return request({
		url:'/blog/tag/getAll',
		data,
	})
}

export const getById = data => {
	return request({
		url:'/blog/tag/getById',
		data,
	})
}

export const deleteByIds = data => {
	return request({
		method:'DELETE',
		url:'/blog/tag/deleteByIds',
		data,
	})
}
