


let defaults = {
	status: 'INIT',
	json: null
}
// status :init progress success error
let user = (state = defaults, action) => {
    switch (action.type) {
        case 'USER_PROGRESS':
            return Object.assign({},state,{status:'PROGRESS'});
        case 'USER_ERROR':
            return Object.assign({},state,{status:'ERROR'});
        case 'USER_SUCCESS':
            if(action.json.code == 0){
                localStorage.setItem('token', action.json.result.token);
            }
            return Object.assign({},state,{status:'SUCCESS',json:action.json}); 
        default:
            return state;
    }
}
export default user;