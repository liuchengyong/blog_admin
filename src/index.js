import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import { Provider } from 'react-redux';
import configureStore from 'stores';


// import __suppport from 'commons/support';

import _polyfill from 'commons/polyfill';
// pages 
import Intercept from 'containers/Intercept';
import Login from 'containers/Login';

import Main from 'containers/Main';
import Home from 'containers/Home';


import Charts from 'containers/Charts';


import UserList from 'containers/user/List';
import UserAdd from 'containers/user/Add';
import Me from 'containers/user/Me';
import UserUpdatePwd from 'containers/user/UpdatePwd';


import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import 'styles/index.scss';


let store = configureStore();

let intercept = (nextState, replace, callback)=>{
	// if(sessionStorage.user){
	// 	store.dispatch({type:'user_success',data:JSON.parse(sessionStorage.user)});
	// }
	// callback();
}

render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Intercept}>
				<IndexRoute name="home" component={Home}/>
				<Route path="home" name="home" component={Home}/>

				<Route path="user">
	    			<Route path="add" name="userAdd"  component={UserAdd} />
	    			<Route path="list" name="userList" component={UserList}/>
					<Route path="me" name="me"  component={Me} />
					<Route path="updatePwd" name="UserUpdatePwd"  component={UserUpdatePwd} />
	    		</Route>


				<Route path="/main" component={Main} >
		    	</Route>
		    	
			</Route>
			<Route path="/login" name="login" component={Login}/>
  		</Router>
  	</Provider>), document.getElementById('root'));










