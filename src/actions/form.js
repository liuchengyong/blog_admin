import Verify from 'commons/verify';

let getVerifyObg = (name)=>{
    let nameStatus = name + '___status',
        nameVerify = name + '____verify',
        nameMsg = name + '____msg',
        nameRule = name + '____rule';
    return { nameStatus, nameVerify, nameMsg, nameRule};
}

export const formInit = data =>{
	let { name, formName, verify } = data;
	let { nameStatus, nameVerify, nameMsg, nameRule} = getVerifyObg(name);
	let result = {
		formName,
		[formName]: {
			[name] : '',
			[nameStatus] : verify ? false : true,
			[nameVerify] : verify ? false : true,
			[nameRule] : verify
		}
	}
	return dispatch => {
		dispatch({type:'form-init',data:result});
	}
}

let checkStatus = (fromDate) => {
    let status = true,verify = true;
    Object.keys(fromDate).map(key=>{
        if(key.endsWith('___status')){
            status =  status && fromDate[key];
        }else if(key.endsWith('____verify')){
            verify = verify && fromDate[key];
        }    
    })
    return Object.assign(fromDate,{status,verify});
}

export const formChange = data =>{
	let { name, formName, value, form} = data;
	let { nameStatus, nameVerify, nameMsg, nameRule} = getVerifyObg(name);
	let item = form[formName];

	item[name] = value;
	if(item[nameRule] && !item[nameStatus]){
		item[nameStatus] = true;
	}

	if(item[nameRule]){
		return dispatch => {
			Verify({val:value,rules:item[nameRule]})
				.then(result=>{
					item[nameVerify] = result.verify;
					item[nameMsg] = result.msg;
					item = checkStatus(item);
					dispatch({type:'form-change',data:{formName,[formName]:item}});
				})
		}
	}else{
		item = checkStatus(item);
		return {type:'form-change',data:{formName,[formName]:item}};
	}


	
}

/**
 * [description] form 的工具类，提交前请检查
 * @param  {[type]} data [description] {formName, form}
 * @return {[type]}      [description]
 */
export const formCheck = data =>{
	let {formName, form} = data;
	let item = form[formName];
	// if( item.status && item.verify) return Promise.resolve({formName,form:item});
	let formData = {};

	let promiss = [],keys = [];
	Object.keys(item).map(key=>{
		if(key.includes('___')) return;
		let { nameStatus, nameRule} = getVerifyObg(key);
		if(typeof item[nameStatus] == 'undefined') return;
		// if(item[nameStatus] && item[nameVerify]) return;
		if(!item[nameRule]) return;
		if(!item[nameStatus]) formData[nameStatus] = true;
		
		keys.push(key);
		promiss.push(Verify({val: item[key], rules:item[nameRule]}));
	});

	return Promise
		.all(promiss)
		.then(res =>{
			keys.map((key,index) =>{
				let {nameVerify, nameMsg} = getVerifyObg(key);
				formData[nameVerify] = res[index].verify;
				formData[nameMsg] = res[index].msg;
			})
			Object.assign(item,formData);
			item = checkStatus(item);
			return {formName,form:item}
		})
}







