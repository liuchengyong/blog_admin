import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import classNames from 'commons/ClassNames';
import { loginAction} from 'actions/login';
import { hideModel} from 'actions/model';
import { setUser} from 'actions/user';

import Loading from 'components/Loading';
import Model from 'components/Model';
import Form from 'components/Form';


class Login extends Component{
	constructor(props){
		super(props);
		this.state={};

		this.verifys = {
			count:[
				{type:'null',msg:'请输入手机号，手机号不能为空'},
	    		{type:'reg',reg:/^1\d{10}$/,msg:'手机号格式不正确，请输入正确的手机号'}
			],
			password:[
				{type:'null',msg:'请输入密码，密码不能为空'}
			]
		}
	}

	componentDidMount(){
		console.log(this);
		let { user,router,actions} =  this.props;
		if(user.id){
			router.push('/');
		}else if(sessionStorage.user){
			actions.setUser(JSON.parse(sessionStorage.user));
			router.push('/');
		}
	}

	handleToLogin(){

		console.log(this.props.form)
		// let password = this.refs.password.value;
		// let phone = this.refs.count.value;
		// this.props.actions.loginAction({password,phone});
	}

	componentWillReceiveProps(nextProps){
		let {user,router} =  nextProps;
		if(user.id){
			router.push('/');
		}
	}
	handleEvent(){
		this.props.actions.hideModel();
	}
	
  	render() {
  		let { user, loading, model, form} = this.props;
  		let { count, password} = this.state;
  		console.log(form);
	    return (<div className="login-container">
	    	<Loading type={loading.type} content={loading.content} hide={loading.isHide}/>
            <Model hide={model.isHide} content={model.content} handleEvent={this.handleEvent.bind(this)} />

        	<form>
        		<h1 className="from-title">三根半·夜</h1>

        		 <Form className="form-horizontal form-block"
        		 	formObj = 'login' name = "count"
        		 	type = "text" 
                  	placeholder = "请输入手机号" 
                  	iconBefore = "fa fa-user" iconAfter = "fa fa-close"
                  	verify = {this.verifys.count}
                  	focus = {true}/>

                <Form className="form-horizontal form-block"
                	formObj = 'login' name = "password"
        		 	type = "password" 
                  	placeholder = "请输入密码" 
                  	iconBefore = "fa fa-lock"
                  	verify={this.verifys.password} />
            
				<button className={classNames("btn-primary btn-md btn-block",{
					'btn-disable': form.login ? !(form.login.status && form.login.verify) : true
				})} onClick={this.handleToLogin.bind(this)} type="button">登录</button>
				{
					user.status == "SUCCESS" && user.json.code != 0 ? <div className="error-msg text-danger">{user.json.msg}</div> : null
				}
			</form>
        </div>);
  	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		loading: state.loading,
		model: state.model,
		form: state.form
	}
}
function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		loginAction,hideModel,setUser
	}, dispatch);
	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);