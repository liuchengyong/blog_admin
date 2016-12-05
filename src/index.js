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



// store.dispatch({ type: 'INCREMENT' })
let store = configureStore();
render((
	<Provider store={store}>
		<Router history={browserHistory}>
	    	<Route path="/" component={Index}/>
	    	<Route path="/booklist" component={BookList}/>
	    	<Route path="/about" component={About}/>
  		</Router>
  	</Provider>), document.getElementById('root'));