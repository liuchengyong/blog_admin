let defaults = {
    isHide:true,
    content:'加载中',
    type:''
};

let loading = (state = defaults, action) => {
    switch (action.type) {
        case 'loading_hide': 
            return {isHide:true}
        case 'loading_show': 
            return Object.assign({},{isHide:false},action.data);
        default:
            return state;
    }
}
export default loading;