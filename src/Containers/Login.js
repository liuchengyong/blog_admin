import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import 'styles/login.scss';

import userloginAction from 'actions/user/login';
import userListAction from 'actions/user/list';

class Login extends Component{

	handleToLogin(){
		this.props.actions.userloginAction();
	}
	handleToList(){
		this.props.actions.userListAction();
	}
  	render() {
	    return (<div className="login-container">
        	<form role="form">
			  <div className="form-group">
			    <input type="email" className="form-control" placeholder="请输入用户名" />
			  </div>
			  <div className="form-group">
			    <input type="password" className="form-control" placeholder="请输入密码" />
			  </div>
			  <button className="btn btn-default" onClick={this.handleToLogin.bind(this)} type="button">登录</button>
			  <button className="btn btn-default" onClick={this.handleToList.bind(this)} type="button">list</button>
			</form>
        </div>);
  	}
}

function mapStateToProps(state) {
	return {
		sideBar:state.sideBar
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		userloginAction:userloginAction,
		userListAction:userListAction
	}, dispatch);
	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);