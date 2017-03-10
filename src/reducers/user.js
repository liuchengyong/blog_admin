


let defaults = {

}
let user = (state = defaults, action) => {
    switch (action.type) {
        case 'user_init': 
            return action.data;
        

        //登陆
        case 'login_load':
            return Object.assign({},state,{login_status:'laod'});
        case 'login_error':
            return Object.assign({},state,{login_status:'error'});
        case 'login_success':
            return Object.assign({},state,{login_status:'success',data:action.data}); 

        //添加
        case 'add_load':
            return Object.assign({},state,{add_status:'laod'});
        case 'add_error':
            return Object.assign({},state,{add_status:'error'});
        case 'add_success':
            return Object.assign({},state,{add_status:'success',add:action.data}); 

        //

        default:
            return state;
    }
}
export default user;