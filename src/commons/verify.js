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
 *      {type:'fun',func:function(e){},msg:'手机号格式不正确，请输入正确的手机号'},
 * 
 *  ]
 * 
 */
let verify = obj => {
    let { val, rules} = obj;
    if (Array.isArray(rules)) {
    	return verifyItems(val,rules,0);
    } else if(typeof rules == 'object'){
    	return verifyItem(val,rules);
    }
};
let verifyItems = (val, rules, index) => {
    if(rules.length <= index) return Promise.resolve({verify: true});
    return verifyItem(val, rules[index++])
                .then(result=>{
                    if(!result.verify) return result;
                    return verifyItems(val,rules,index);
                })
}



let verifyItem = (val, rule) => {
    let result = true;
    switch (rule.type) {
        case 'null':
            if(val) break;
            else result = false;
            break;
        case 'reg':
            if(rule.reg.test(val)) break;
            else result = false;
            break;
        case 'length':
            if(verifyLength(val,rule)) break;
            else result = false;
            break;
        case 'size':
            if(verifySize(val,rule)) break;
            else result = false;
            break;
        case 'fun':
            if(rule.func(val)) break;
            else result = false;
            break;
        case 'remote':
            return rule.func(val).then(verify => verify ? {verify: true} : {verify: false, msg: rule.msg});
        default:
            break;
    }

    return Promise.resolve(result ? {verify: true} : {verify: false, msg: rule.msg});
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
