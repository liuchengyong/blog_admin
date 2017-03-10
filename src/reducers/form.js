let defaults = {

}

let data = {},fromDate = {};

// {from:'login',name:'',value:''}

//{from:'login',login:{'count':2}}

let form = (state = defaults, action) => {
	

    switch (action.type) {
        case 'from-set':
        	data = action.data;
        	fromDate = Object.assign({},state[data.form] || {},data[data.form]);

        	Object.keys(fromDate).map(key=>{
        		if(key.endsWith('_status')){
        			fromDate.status =  fromDate.status ? (fromDate.status && fromDate[key]) :fromDate[key];
        		}else if(key.endsWith('_verify')){
        			fromDate.verify = fromDate.verify ? (fromDate.verify && fromDate[key]) : fromDate[key];
        		}	 
        	})
            return Object.assign({},state,{[data.form]:fromDate});
        default:
            return state;
    }
}
export default form;