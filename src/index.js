import React from 'react';
import {render} from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from 'stores';




// pages 
import Home from 'containers/Home';
import BookList from 'containers/BookList';
import About from 'containers/About';

// 全局css

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// // Font Awesome 
import 'font-awesome/css/font-awesome.css';

import 'styles/index.scss';

let store = configureStore();
render((
	<Provider store={store}>
		<Router history={browserHistory}>
	    	<Route path="/" component={Home}/>
	    	<Route path="/home" component={Home}/>
	    	<Route path="/booklist" component={BookList}/>
	    	<Route path="/about" component={About}/>
  		</Router>
  	</Provider>), document.getElementById('root'));

