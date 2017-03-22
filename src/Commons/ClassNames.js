let ClassNames = (...args) => {
	if(args.length == 0) return '';
	let _result = [];
	args.map(item =>{
		let _type = typeof item;
		if(_type == 'string') {
			item ? _result.push(item) : null;
		}else if(_type == 'function'){
			_result.push(item());
		}else if(_type == 'object'){
			Object.keys(item).map(key => item[key] ? _result.push(key) : null);
		}
	})
	return _result.join(' ');
};


export default ClassNames