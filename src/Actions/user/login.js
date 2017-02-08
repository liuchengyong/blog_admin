import request from 'commons/request';



let login = data => {
	return dispatch => {
		dispatch({type:'USER_PROGRESS'});
		request({
			url:'/api/v1/blog/user/login',
			method:'POST',
			data,
		})
		.then(response => response.json())
		.then(json => {
			console.log(json);
			dispatch({type:'USER_SUCCESS',json:json})
		})
		.catch(e => dispatch({type:'USER_ERROR'}));
	}
}
export default login 