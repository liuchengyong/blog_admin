import React, {Component} from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Form from 'components/Form';



class Home extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	name: '',
	    	sex:'',
	    	birth:new Date(1993,2,21)
	    };
	    this.sexList = [
	    	{key:'1',value:'男'},
	    	{key:'0',value:'女'}
	    ];
	   
	  }
	handleFormChange(obj){
		let state = Object.assign({},this.state,obj)
		this.setState(state)
	}
  	render() {

  		let {name,sex,nickname,email,phone,mobile,address,icon,description,birth} = this.state;
	    return ( 
	        <div className="container-user-add">
	        	<div className="user-from">
	        		<Form className="form-horizontal" type="input" name="name" lab="姓名" 
	        			value={name || ''} placeholder="请输入姓名" handleChange={this.handleFormChange.bind(this)} />

	        		<Form className="form-horizontal" type="radio" name="sex" lab="性别" 
	        			list={this.sexList} value={sex || ''}  handleChange={this.handleFormChange.bind(this)}/>

	        		<Form className="form-horizontal" type="input" name="nickname" lab="昵称" 
	        			value={nickname || ''} placeholder="请输入昵称" handleChange={this.handleFormChange.bind(this)} />

	        		<Form className="form-horizontal" type="date" name="birth" lab="出生日期" 
	        			value={birth || ''} placeholder="请输入出生日期" handleChange={this.handleFormChange.bind(this)}/>

	        		<Form className="form-horizontal" type="input" name="email" lab="邮箱" 
	        			value={email || ''} placeholder="请输入邮箱" handleChange={this.handleFormChange.bind(this)} />

	        		<Form className="form-horizontal" type="input" name="phone" lab="手机" 
	        			value={phone || ''} placeholder="请输入手机号" handleChange={this.handleFormChange.bind(this)} />
	        		
	        		<Form className="form-horizontal" type="input" name="mobile" lab="电话" 
	        			value={mobile || ''} placeholder="请输入电话号码" handleChange={this.handleFormChange.bind(this)} />

	        		<Form className="form-horizontal" type="input" name="address" lab="居住地址" 
	        			value={address || ''} placeholder="请输入居住地址" handleChange={this.handleFormChange.bind(this)} />

	        		<Form className="form-horizontal" type="input" name="icon" lab="头像" 
	        			value={icon || ''} placeholder="" readOnly={true} />

	        		<Form className="form-horizontal" type="area" name="description" lab="个性签名" 
	        			value={'2017-02-03'} placeholder="请输入个性签名" handleChange={this.handleFormChange.bind(this)}/>

	        		<button className="btn-primary">提交</button>
	        		
	        	</div>
	        	
	        </div>);
	}
}

function mapStateToProps(state) {
	return {
		
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		
	}, dispatch);

	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);