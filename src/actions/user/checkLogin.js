import request from 'commons/request';



let checkLogin = () => {
	return dispatch => {
		dispatch({type:'USER_PROGRESS'});
		request({
			url:'/api/v1/blog/user/login/check',
			method:'POST',
		})
		.then(response => response.json())
		.then(json => dispatch({type:'USER_SUCCESS',json:json}))
		.catch(e => dispatch({type:'USER_ERROR'}));
	}
}
export default checkLogin; 