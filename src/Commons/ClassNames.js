
let ClassNames = options => {
	if(!options) return '';
	let _type = typeof options;
	if(_type == 'string') return options;
	if(_type == 'object'){
		let classNames = [];
		Object.keys(options).map(key => options[key] ? classNames.push(key) : null);
		return classNames.join(' ');
	}
	if(_type == 'function'){
		return options();
	}
	return '';
};

export default ClassNames