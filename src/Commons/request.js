// import config from 'configs/request';

let myHeaders = new Headers();

let defaultOptions = {
	method: 'GET',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded'
	},
};

let ObjectToSearchUrl = obj => {
	obj.token =  localStorage.getItem("token");
	let params = [];
	for (var key in obj) {
		if(Array.isArray(obj[key])){
			params.push(key + '=' + obj[key].join('&' + key + '='));
		}else{
			params.push(key+'='+obj[key]);
		}
	}

	return params.join('&');
};


let request = options => {
	if(!options.url) return console.error('请求地址不存在');
	
	// 请求地址	
	let url = options.baseUrl || '//blog.liuchengyong.cn'   + options.url;
	options.baseUrl ? delete options.baseUrl : null;
	options.url ? delete options.url : null;

	let data = ObjectToSearchUrl(options.data);
	options.data ? delete options.data : null;

	// 请求参数
	let cof = Object.assign({},defaultOptions,options);
	if(cof.method == 'GET'){
		url += "?" + data;
	}
	//else if(cof.method == 'POST'){
	else{
		cof.body = data
	}
	return fetch(url,cof);
}


export default request;