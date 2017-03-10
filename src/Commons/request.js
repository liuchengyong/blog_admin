import config from 'config';

let defaultOptions = {
	method: 'GET',
	headers: {
		'Content-Type':'application/x-www-form-urlencoded'
	},
};

let ObjectToSearchUrl = obj => {
	let params = [];
	for (var key in obj) {
		if(Array.isArray(obj[key])){
			params.push(key + '=' + obj[key].join('&' + key + '='));
		}else{
			params.push(key+'='+obj[key]);
		}
	}
	return  params.join('&');
};

/**
 *
 * options
 * url method headers mode cache body 
 * 
 */

let request = options => {
	let excludeProps = ['url','data'];
	let _options = {};
	Object.keys(options).map(key => excludeProps.includes(key) ? null : _options[key] = options[key]);
	let data =  ObjectToSearchUrl(options.data || {});
	_options = Object.assign({},defaultOptions,_options);
	let url = config.baseUrl + options.url;
	if(_options.method == 'GET'){
		url += data ? ("?" + data) : '';
	}else{
		_options.body = data;
	}
	return fetch(url,_options);
}

/**
 * [description]  全局配置
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
let requestGloble = options => {
	return request(options);
}



export default requestGloble;