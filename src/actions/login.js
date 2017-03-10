import { login} from 'requests/user'


export const loginAction = data => {
	return dispatch => {
		dispatch({type:'loading_show',data:{content:'正在登陆',type:'noback'}});
		login(data)
			.then(response => response.json())
			.then(data => {
				dispatch({type:'loading_hide'});
				if(data.code == 0){
					sessionStorage.user = JSON.stringify(data.result);
					dispatch({type:'user_init',data:data.result})
				}else{
					dispatch({type:'model_show',data:{content:data.msg}})
				}
			})
			.catch(e => {
				dispatch({type:'model_show',data:{content:'网络异常'}})
			});
	}
}
