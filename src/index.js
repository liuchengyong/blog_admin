import React from 'react';
import {render} from 'react-dom';

import { Router, Route, Link , browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from 'stores';

import 'normalize.css';

// pages 
import Index from 'pages/Index';
import BookList from 'pages/BookList';
import About from 'pages/About';

// 全局css

// bootstrap
// import 'vendors/bootstrap/dist/css/bootstrap.min.css';
// // Font Awesome 
// import 'vendors/font-awesome/css/font-awesome.min.css';
// // NProgress 
// import 'vendors/nprogress/nprogress.css';
// // iCheck 
// import 'vendors/iCheck/skins/flat/green.css';
// // bootstrap-progressbar 
// import 'vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css';
// // JQVMap 
// import 'vendors/jqvmap/dist/jqvmap.min.css';
// // bootstrap-daterangepicker 
// import 'vendors/bootstrap-daterangepicker/daterangepicker.css';
// // Custom Theme Style 
// import 'vendors/gentelella/css/custom.min.css';


let store = configureStore();
render((
	<Provider store={store}>
		<Router history={browserHistory}>
	    	<Route path="/" component={Index}/>
	    	<Route path="/booklist" component={BookList}/>
	    	<Route path="/about" component={About}/>
  		</Router>
  	</Provider>), document.getElementById('root'));