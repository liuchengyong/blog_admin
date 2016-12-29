import request from 'commons/request';

let list = text => {
	request({
		url:'/api/v1/blog/user/list',
		data:{
			page:0,
			pageSize:20
		}
	}).then(response => console.log(response));
	return dispatch =>{
		dispatch({ type: 'ABOUT_SUCCESS', text });
	}
}
export default list 