import React from 'react';
import {render} from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from 'stores';




// pages 
import Home from 'containers/Home';
import Login from 'containers/Login';


import 'normalize.css';
// Font Awesome 
import 'font-awesome/css/font-awesome.css';

import 'styles/index.scss';

let store = configureStore();
render((
	<Provider store={store}>
		<Router history={browserHistory}>
	    	<Route path="/" name="home" component={Home}/>
	    	<Route path="/home" name="home" component={Home}/>
	    	<Route path="/login" name="login" component={Login}/>
	    	
  		</Router>
  	</Provider>), document.getElementById('root'));

