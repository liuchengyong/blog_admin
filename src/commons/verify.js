//phoneRule:[{type:'null',msg:'请输入手机号，手机号不能为空'},{type:'reg',msg:'手机号格式不正确，请输入正确的手机号'}],


/**
 * [description]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 *
 *  [
 *      {type:'null',msg:'请输入手机号，手机号不能为空'},
 *      {type:'length',min:1,max:2,msg:'手机号格式不正确，请输入正确的手机号'},
 *      {type:'size',min:1,max:2,msg:'手机号格式不正确，请输入正确的手机号'},
 *      {type:'reg',reg:/\d/,msg:'手机号格式不正确，请输入正确的手机号'},
 *  ]
 * 
 */
let verify = obj => {
    if (Array.isArray(obj)) {
    	for (let i = 0; i < obj.length; i++) {
    		let result = verifyItem(obj[i]);
    		if(!result.verify) return result;
    	}
    	return {verify: true};
    } else {
    	return verifyItem(obj);
    }
};

let verifyItem = obj => {
    let { val, rules } = obj;
    for (let i = 0; i < rules.length; i++) {
        let rule = rules[i];
        switch (rule.type) {
            case 'null':
                if (val) break;
                else return {verify: false, msg: rule.msg};
            case 'reg':
        		if(rule.reg.test(val)) break;
        		else return {verify: false, msg: rule.msg};
            case 'length':
                if(verifyLength(val,rule)) break;
                else return {verify: false, msg: rule.msg};
            case 'size':
                if(verifySize(val,rule)) break;
                else return {verify: false, msg: rule.msg};
            default:
                break;
        }
    }
    return {verify: true};
}

let verifyLength = (val,rule) =>{
    if(!rule.min) rule.min = Number.MIN_VALUE;
    if(!rule.max) rule.max = Number.MAX_VALUE;
    val += '';
    if(val.length > rule.min && val.length < rule.max){
        return true;
    }else{
        return false;
    }
}

let verifySize = (val,rule) => {
    if(isNaN(val)) return false;
    if(!rule.min) rule.min = Number.MIN_VALUE;
    if(!rule.max) rule.max = Number.MAX_VALUE;
    val = val - 1 + 1;
    if(val > rule.min && val < rule.max){
        return true;
    }else{
        return false;
    }
}



export default verify
