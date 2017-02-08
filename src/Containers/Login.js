import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import userLoginAction from 'actions/user/login';
import userCheckLoginAction from 'actions/user/checkLogin';

class Login extends Component{

	verifyInput(){

	}

	componentDidMount(){
		if(localStorage.getItem("token")){
			this.props.actions.userCheckLoginAction();
		}
	}

	handleToLogin(){
		let password = this.refs.password.value;
		let phone = this.refs.count.value;
		this.props.actions.userLoginAction({password,phone});
	}

	componentWillReceiveProps(nextProps){
		let {user,router} =  nextProps;
		if(user.status == "SUCCESS" && user.json.code == 0){
			router.push('/');
		}
	}
	
  	render() {
  		let {user} = this.props;

	    return (<div className="login-container">
        	<form>
        		<h1 className="from-title">三根半·夜</h1>
				<div className="form-group">
			  		<div className="input-group-addon"><i className="fa fa-user"></i></div>
			    	<input type="text" className="form-control" ref="count" placeholder="请输入手机号／用户名／邮箱" />
			    	<div className="input-group-addon"><i className="fa fa-close"></i></div>
			  	</div>

				<div className="form-group">
				  	<div className="input-group-addon"><i className="fa fa-user"></i></div>
				    <input type="password" className="form-control" ref="password" placeholder="请输入密码" />
				</div>
				<button className="btn btn-info btn-block" onClick={this.handleToLogin.bind(this)} type="button">登录</button>
				{
					user.status == "SUCCESS" && user.json.code != 0 ? <div className="error-msg text-danger">{user.json.msg}</div> : null
				}
			</form>
        </div>);
  	}
}

function mapStateToProps(state) {
	return {
		user:state.user
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		userLoginAction:userLoginAction,
		userCheckLoginAction:userCheckLoginAction
	}, dispatch);
	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);