let defaults = {
    isHide:true
};

let model = (state = defaults, action) => {
    switch (action.type) {
        case 'model_hide': 
            return {isHide:true}
        case 'model_show':
            return Object.assign({},{isHide:false},action.data);
        default:
            return state;
    }
}
export default model;