let defaults = {

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

let form = (state = defaults, action) => {
	let data = {},fromDate = {};
    switch (action.type) {
        case 'form-init':
            data = action.data;
            Object.assign(fromDate,state[data.formName] || {},data[data.formName]);
            if(typeof fromDate.status == "undefined") Object.assign(fromDate,{status:false,verify:false});
            return Object.assign({},state,{[data.formName]:fromDate});

        case 'form-change':
        case 'form-check':
            data = action.data;
            return Object.assign({},state,{[data.formName]:data[data.formName]});

        default:
            return state;
    }
}
export default form;