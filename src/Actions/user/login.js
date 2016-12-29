import request from 'commons/request';



let login = text => {
	request({
		url:'/api/v1/blog/user/login',
		method:'POST',
		data:{
			password:123,
			phone:17701035267
		}
	})
	.then(response => response.json())
	.then(json => {
		localStorage.setItem("token", json.result.token);
		console.log(json);
	});
	return dispatch =>{
		dispatch({ type: 'ABOUT_SUCCESS', text });
	}
}
export default login 