
let defaults = {
	type : 'about',
	msg : 'no msg'
}

let about = (state = defaults, action) => {
    switch (action.type) {
        case 'ABOUT_SUCCESS':
            return Object.assign({},defaults,{msg:'success'});
        case 'ABOUT_ERROR':
            return Object.assign({},defaults,{msg:'error'});
        default:
            return defaults;
    }
}
export default about;