import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import classNames from 'commons/ClassNames';
import Verify from 'commons/verify';
import DatePicker from 'components/DatePicker';



class Input extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		let {name,formObj:form,nameStatus,nameVerify} = this.props;
		this.props.actions.formSet({form,[form]:{
			[name]:'',
			[nameStatus]:false,
			[nameVerify]:false
		}})
	}

	handleChange(event){
		let {name,formObj:form} = this.props;
		let value = event.target.value;
		this.props.actions.formSet({form,[form]:{
			[name]:value,
		}})
		this.handleBlurOrFocus(event)
	}
	handleBlurOrFocusOrChange(event){
		let {name,formObj:form, form:_form,verify,nameStatus,nameVerify,nameMsg} = this.props;
		let obj = _form[form];
		let value = event.target.value;
		let formData = {};
		if(event.type == 'change'){
			formData[name] = value;
		}
		if(this.props.verify && !obj[nameStatus]){
			formData[nameStatus] = true;
		}
		if(this.props.verify){
			let result = Verify({val:value,rules:verify});
			formData[nameVerify] = result.verify;
			formData[nameMsg] = result.msg;
		}
		this.props.actions.formSet({form,[form]:formData});
	}

	render(){
		let {lab,type,placeholder,readOnly,iconBefore,iconAfter,form,formObj,name,nameStatus,nameVerify,nameMsg,focus} = this.props;
		let _props = {};
		let excludedProps = ['lab','placeholder','name','readOnly',
			'iconBefore','iconAfter','type','actions','form','formObj','verify','nameStatus','nameVerify','nameMsg','focus'];
		Object.keys(this.props).map(name => excludedProps.includes(name) ? '' : _props[name] = this.props[name]);

		if(!form[formObj]) return null;
		let hasError = form[formObj][nameStatus] && !form[formObj][nameVerify] 
		_props.className = classNames(_props.className,{
			hasError: hasError
		})
		return (<div {..._props}>
					{
						lab ? <div className="cell-hd">{lab}</div> : null
					}
		    		
		    		<div className={classNames("cell-bd",{
		    			'has-before-icon': iconBefore ? true : false,
		    			'has-after-icon': iconAfter ? true : false
		    		})}>
		    			{
		    				iconBefore ? <div className="before-icon"><i className={iconBefore}></i></div> : null
		    			}
		    			<input 
		    				type = {type || "text"}
		    				value = { form[formObj][name] || ''} 
		    				placeholder = { placeholder || ''} 
		    				onChange = {this.handleBlurOrFocusOrChange.bind(this)}
		    				onBlur = {this.handleBlurOrFocusOrChange.bind(this)}
		    				onFocus = {this.handleBlurOrFocusOrChange.bind(this)}
		    				readOnly = {readOnly}
		    				autoComplete="off" 
		    				autoFocus={focus}/>
		    			{
		    				iconAfter ?  <div className="after-icon"><i className={iconAfter}></i></div>: null
		    			}
		    			{
		    				hasError ? 
		    				<div className="cell-msg">
				    			{form[formObj][nameMsg]}
				    		</div> : null
		    			}
		    			
		    		</div>
		    		<br/>
		    		
		    	</div>);
	}
}

class Radio extends Component{
	handleChange(item){
		this.props.handleChange({[this.props.name]:item.key});
	}
	render(){
		let {lab,value,list} = this.props;
		let _props = {};
		let excludedProps = ['lab','value','list','name','handleChange'];
		Object.keys(this.props).map(name => excludedProps.includes(name) ? '' : _props[name] = this.props[name]);
		return (<div {..._props}>
					{
						lab ? <div className="cell-hd">{lab}</div> : null
					}
		    		<div className="cell-bd">
		    			{
							list.map(item => <div className="cell-radio" key={item.key} onClick={this.handleChange.bind(this,item)}><i className={classNames({
								"fa":true,
								"fa-dot-circle-o": value === item.key,
								"fa-circle-thin": value !== item.key,
								"fa-red": value === item.key
							})}></i>{item.value}</div>)
		    			}
		    		</div>
		    	</div>);
	}
}

class TextArea extends Component{
	handleChange(item){
		this.props.handleChange({[this.props.name]:item.key});
	}
	render(){
		let {lab,value} = this.props;
		let _props = {};
		let excludedProps = ['lab','value','name','handleChange'];
		Object.keys(this.props).map(name => excludedProps.includes(name) ? '' : _props[name] = this.props[name]);
		return (<div {..._props}>
					{
						lab ? <div className="cell-hd">{lab}</div> : null
					}
		    		<div className="cell-bd">
		    			<textarea defaultValue={value} onChange={this.handleChange.bind(this)} ></textarea>
		    		</div>
		    	</div>);
	}
}

class Date extends Component{
	handleChange(item){
		this.props.handleChange({[this.props.name]:item.key});
	}
	componentDidMount(){
	}

	selectDate(date){
		this.props.handleChange({[this.props.name]:date});
	}

	render(){
		let {lab,value,options} = this.props;
		let _props = {};
		let excludedProps = ['lab','value','name','handleChange','options'];
		Object.keys(this.props).map(name => excludedProps.includes(name) ? '' : _props[name] = this.props[name]);
		return (<div {..._props}>
					{
						lab ? <div className="cell-hd">{lab}</div> : null
					}
		    		<div className="cell-bd">
		    			<DatePicker options={options} value={value} selectDate={this.selectDate.bind(this)}/>
		    		</div>
		    	</div>);
	}
}

class Form extends Component{
	constructor(props){
		super(props);
	}

	getVerifyObg(){
		let name = this.props.name;
		let nameStatus = name + '_status';
		let nameVerify = name + '_verify';
		let nameMsg = name + '_msg';
		return {nameStatus,nameVerify,nameMsg}
	}

  	render() {
	 	// let _props = {};
		// let excludedProps = ['type'];
		// Object.keys(this.props).map(name => excludedProps.includes(name) ? '' : _props[name] = this.props[name]);

		let _props = Object.assign({},this.props,{className:classNames('form-cell',this.props.className)},this.getVerifyObg());
		switch(this.props.type){
			case 'password':
			case 'text':
				return <Input {..._props} type={this.props.type}/>;
			case 'radio':
				return <Radio {..._props} />;
			case 'area':
				return <TextArea {..._props} />;
			case 'date':
			 	return <Date {..._props} />
		}
		return <div>不支持这种类型表单</div>;
	}
}

function mapStateToProps(state) {
	return {
		form: state.form
	}
}

function formSet(data){
	return dispatch => {
		dispatch({type:'from-set',data});
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		formSet
	}, dispatch);
	return {actions: boundActionCreators};
}






export default connect(mapStateToProps,mapDispatchToProps)(Form);



