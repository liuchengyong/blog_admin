let defaults = {
	
};

let sidebar = (state = defaults, action) => {
    switch (action.type) {
        case 'init_sidebar':
            return Object.assign({},state,action.data);
        default:
            return state;
    }
}
export default sidebar;