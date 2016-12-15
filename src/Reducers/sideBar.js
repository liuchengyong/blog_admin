let defaults = {
	status: 'start',
	param: {},
};

let sidebar = (state = defaults, action) => {
    switch (action.type) {
        case 'SIDEBAR_SUCCESS':
            console.log(action);
            return Object.assign({},defaults,{status:'success',param:action.param});
        case 'SIDEBAR_ERROR':
            return Object.assign({},defaults,{status:'error',param:action.param});
        case 'SIDEBAR_LOAD':
            return Object.assign({},defaults,{status:'load'});
        default:
            return defaults;
    }
}
export default sidebar;