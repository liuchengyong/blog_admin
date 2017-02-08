import React from 'react';
import {render} from 'react-dom';

import { Router, Route, browserHistory,IndexRoute,hashHistory } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from 'stores';

import request from 'commons/request';




// pages 
import Main from 'containers/Main';
import Home from 'containers/Home';
import Login from 'containers/Login';
import Charts from 'containers/Charts';


import UserList from 'containers/user/List';
import UserAdd from 'containers/user/Add';
import Me from 'containers/user/Me';

import UserUpdatePwd from 'containers/user/UpdatePwd';


import 'normalize.css';
// Font Awesome 
import 'font-awesome/css/font-awesome.css';

import 'styles/index.scss';

let store = configureStore();

let intercept = (nextState, replace, callback)=>{
	let token = localStorage.getItem("token");
	if(!token){
		replace('/login');
		return callback();
	}
	request({
		url:'/api/v1/blog/user/login/check',
		method:'POST',
	}).then(response => response.json())
	.then(json => {
		if(json.code != 0){
			replace('/login')
		}else{
			let state = store.getState();
			if(state.user.status != "SUCCESS"){
				store.dispatch({type:'USER_SUCCESS',json:json})
			}
		}
		callback();
	}).catch(e => {
		// replace('/login');
		// callback();
	});	
}

render((
	<Provider store={store}>
		<Router history={hashHistory}>
	    	<Route path="/" component={Main} onEnter={intercept}>
	    		<IndexRoute name="home" component={Home} />
				<Route path="user/list" name="userList" component={UserList}/>
				<Route path="user/add" name="userAdd"  component={UserAdd} />
				<Route path="user/me" name="me"  component={Me} />
				<Route path="user/updatePwd" name="UserUpdatePwd"  component={UserUpdatePwd} />
				<Route path="charts" name="charts"  component={Charts} />
	    	</Route>
	    	<Route path="/login" name="login" component={Login}/>
  		</Router>
  	</Provider>), document.getElementById('root'));










