
import { login, add} from 'requests/user'
import { formCheck}  from 'actions/form';

export const setUser = data =>{
	return {type:'user_init',data};
}

/**
 * [description] 登陆状态操作
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const userLogin = data => {
	return dispatch => {
		formCheck(data)
		.then(res =>{
			let {formName, form} = res;
			if(form.status && form.verify) {
				dispatch({type:'loading_show',data:{content:'正在登陆',type:'noback'}});
				let {count:phone,password} = form;
				login({phone,password})
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
			}else{
				dispatch({type:'form-check',data:{formName,[formName]:form}});
			}

		})
	}
}

export const userAdd = data => {
	return dispatch => {
		formCheck(data)
		.then(res => {
			let {formName, form} = res;
			if(form.status && form.verify) {
				dispatch({type:'loading_show',data:{ content:'正在添加',type:'noback' }});
				let { name, sex, nickname, email, birth, phone, mobile, address, icon, description} = form;
				add({name, sex, nickname, email, birth, phone, mobile, address, icon, description})
					.then(response => response.json())
					.then(result => {
						dispatch({type:'loading_hide'});
						if(result.code == 0){
							dispatch({type:'model_show',data:{content:'添加成功'}})
						}else{
							dispatch({type:'model_show',data:{content:result.msg}})
						}
					})
					.catch(e => {
						dispatch({type:'model_show',data:{content:'网络异常'}})
					});
			}else{
				dispatch({type:'form-check',data:{formName,[formName]:form}});
			}

		})
	}

}
