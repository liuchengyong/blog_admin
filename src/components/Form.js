import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { formInit,formChange}  from 'actions/form';

import classNames from 'commons/ClassNames';
import DatePicker from 'components/DatePicker';



class Input extends Component{
	handleBlurOrFocusOrChange(event){
		this.props.handleChange(event.target.value);
	}
	render(){
		let { 
			lab, type, placeholder, readOnly, 
			iconBefore, iconAfter, form, 
			formName, name, nameMsg, focus, hasError} = this.props;
		let _props = {};
		let includedProps = ['className'];
		Object.keys(this.props).map(name => includedProps.includes(name) ? _props[name] = this.props[name] : '');

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
		    				value = { form[formName][name] || ''} 
		    				placeholder = { placeholder || ''} 
		    				onChange = {this.handleBlurOrFocusOrChange.bind(this)}
		    				// onBlur = {this.handleBlurOrFocusOrChange.bind(this)}
		    				// onFocus = {this.handleBlurOrFocusOrChange.bind(this)}
		    				readOnly = {readOnly}
		    				autoComplete="off" 
		    				autoFocus={focus}/>
		    			{
		    				iconAfter ?  <div className="after-icon"><i className={iconAfter}></i></div>: null
		    			}
		    			{
		    				hasError ? 
		    				<div className="cell-msg">
				    			{form[formName][nameMsg]}
				    		</div> : null
		    			}
		    		</div>
		    	</div>);
	}
}

class Radio extends Component{

	handleChange(item){
		this.props.handleChange(item.key);
	}

	render(){
		let { lab, list, form, formName, name, nameMsg, hasError} = this.props;
		let value = form[formName][name] || '';
		
		let _props = {};
		let includedProps = ['className'];
		Object.keys(this.props).map(name => includedProps.includes(name) ? _props[name] = this.props[name] : '');

		return (<div {..._props}>
					{
						lab ? <div className="cell-hd">{lab}</div> : null
					}
		    		<div className="cell-bd">
		    			{
							list.map(item => <div className="cell-radio" key={item.key} onClick={this.handleChange.bind(this,item)}><i className={classNames({
								"fa": true,
								"fa-dot-circle-o": value === item.key,
								"fa-circle-thin": value !== item.key,
								"fa-check": value === item.key
							})}></i>{item.value}</div>)
		    			}
		    			{
		    				hasError ? 
		    				<div className="cell-msg">
				    			{form[formName][nameMsg]}
				    		</div> : null
		    			}
		    		</div>
		    	</div>);
	}
}

class TextArea extends Component{
	handleChange(event){
		this.props.handleChange(event.target.value);
	}
	render(){
		let { lab, formName, form, name, nameMsg, hasError} = this.props;
		let _props = {};
		let includedProps = ['className'];

		Object.keys(this.props).map(name => includedProps.includes(name) ? _props[name] = this.props[name] : '');

		return (<div {..._props}>
					{
						lab ? <div className="cell-hd">{lab}</div> : null
					}
		    		<div className="cell-bd">
		    			<textarea 
		    				defaultValue={form[formName][name] || ''} 
		    				onChange = {this.handleChange.bind(this)}
		    				// onBlur = {this.handleChange.bind(this)}
		    				// onFocus = {this.handleChange.bind(this)}
		    			></textarea>
		    			{
		    				hasError ? 
		    				<div className="cell-msg">
				    			{form[formName][nameMsg]}
				    		</div> : null
		    			}
		    		</div>
		    	</div>);
	}
}

class Date extends Component{

	selectDate(date){
		this.props.handleChange(date);
	}

	render(){
		let { lab, form, formName, name, nameMsg, options, hasError} = this.props;
		let _props = {};
		let includedProps = ['className'];
		Object.keys(this.props).map(name => includedProps.includes(name) ? _props[name] = this.props[name] : "");
		return (<div {..._props}>
					{
						lab ? <div className="cell-hd">{lab}</div> : null
					}
		    		<div className="cell-bd">
		    			<DatePicker options={options} value={form[formName][name]} selectDate={this.selectDate.bind(this)}/>
		    			{
		    				hasError ? 
		    				<div className="cell-msg">
				    			{form[formName][nameMsg]}
				    		</div> : null
		    			}
		    		</div>
		    	</div>);
	}
}

class Form extends Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		let { name, formName , verify} = this.props;
		this.props.actions.formInit({formName, name, verify});
	}

	verify(value){
		let { name, formName, form } = this.props;
		this.props.actions.formChange({name,formName,form,value})
	}

	getVerifyObg(){
		let name = this.props.name;
		let nameStatus = name + '___status',
	        nameVerify = name + '____verify',
	        nameMsg = name + '____msg',
	        nameRule = name + '____rule';
		return {nameStatus,nameVerify,nameMsg,nameRule}
	}

  	render() {
  		let { form,formName } = this.props;
  		if(!form[formName]) return null;

	 	let _props = {};
		let excludedProps = ['actions','verify'];
		Object.keys(this.props).map(name => excludedProps.includes(name) ? '' : _props[name] = this.props[name]);

		let { nameStatus, nameVerify} = this.getVerifyObg();
		let hasError = form[formName][nameStatus] && !form[formName][nameVerify];
		_props = Object.assign(_props,{
			className: classNames('form-cell',{hasError: hasError},this.props.className),
			handleChange: this.verify.bind(this),
			hasError: hasError
		},this.getVerifyObg());

		switch(_props.type){
			case 'password':
			case 'text':
				return <Input {..._props} />;
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

Form.propTypes = {
	type: React.PropTypes.string.isRequired,
	formName: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
};

function mapStateToProps(state) {
	return {
		form: state.form
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		formInit,formChange
	}, dispatch);
	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);



