import React, {Component} from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Form from 'components/Form';
import classNames from 'commons/ClassNames';
import { userAdd} from 'actions/user';

import { getByPhone} from 'requests/user';

import Verify from 'commons/verify';

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
	    this.verifys = {
			name:[
				{type:'null',msg:'请输入姓名，姓名不能为空'},
			],
			sex: {type:'null',msg:'请选择性别，性别不能为空'},
			phone:[
				{type:'null',msg:'请输入手机，手机不能为空'},
				{type:'fun',func:(val)=>{
					return val.startsWith('177')
				},msg:'手机号不是以177开头'},			
				{type:'reg',reg:/^1\d{10}$/,msg:'手机号格式不正确，请输入正确的手机号'},
				
				{type:'remote',func: (val)=>{
					return getByPhone({phone:val})
						.then(response => response.json())
						.then(data => data.code == 0 && data.result.length == 0)
				}, msg:'手机号已被使用'}

			],
			description:[
				{type:'null',msg:'请输入个性签名，个性签名不能为空'},
	    		{type:'length',min:0, max:100,msg:'个性签名的长度在1-100个字符之间'},
			],
			birth:[
				{type:'null',msg:'请选择出生日期，出生日期不能为空'}
			],
			password:[
				{type:'null',msg:'请输入密码，密码不能为空'}
			]
		}
	   
	}

	componentWillReceiveProps(nextProps){
		
	}

	handleCommit(){
		let {form,formName="adduser"} = this.props;
		this.props.actions.userAdd({formName,form});
	}       		

  	render() {

	    return ( 
	        <div className="container-user-add">
	        	<div className="user-from">
	        		<Form className="form-horizontal" type="text" name="name" lab="姓名" formName="adduser"
	        			placeholder="请输入姓名" verify={this.verifys.name} />

	        		<Form className="form-horizontal" type="radio" name="sex" lab="性别" formName="adduser"
	        			list={this.sexList} verify={this.verifys.sex} />

	        		<Form className="form-horizontal" type="text" name="phone" lab="手机" formName="adduser"
	        			placeholder="请输入手机号" verify={this.verifys.phone}/>

	        		<Form className="form-horizontal" type="text" name="nickname" lab="昵称" formName="adduser"
	        			placeholder="请输入昵称" />

	        		<Form className="form-horizontal" type="text" name="email" lab="邮箱" formName="adduser"
	        			placeholder="请输入邮箱" />

	        		<Form className="form-horizontal" type="date" name="birth" lab="出生日期" formName="adduser"
	        			placeholder="请输入出生日期" verify={this.verifys.birth}/>

	        		
	        		<Form className="form-horizontal" type="text" name="address" lab="居住地址" formName="adduser"
	        			placeholder="请输入居住地址" />

	        		<Form className="form-horizontal" type="text" name="icon" lab="头像" formName="adduser"
	        			placeholder="" readOnly={true} />

	        		<Form className="form-horizontal" type="area" name="description" lab="个性签名" formName="adduser"
	        			placeholder="请输入个性签名" verify={this.verifys.description}/>
	        		

	      			<button className="btn-primary" onClick={this.handleCommit.bind(this)} >提交</button>
	        		
	        	</div>
	        	
	        </div>);
	}
}

function mapStateToProps(state) {
	return {
		user:state.user,
		form:state.form
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		userAdd
	}, dispatch);

	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);