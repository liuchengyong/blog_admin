let defaults = {
	
};

let path = (state = defaults, action) => {
    switch (action.type) {
        case 'set_path':
            return Object.assign({},state,action.data);
        default:
            return state;
    }
}
export default path;