import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Router, Route, Link , browserHistory } from 'react-router';

// pages 
import Index from 'pages/Index';
import BookList from 'pages/BookList';
import About from 'pages/About';


// Font Awesome 
import 'font-awesome/css/font-awesome.css';

import 'styles/index.scss';



import successAbout from 'actions/bindAbout';


class Main extends Component{
  render() {
    return (
    	<div className="container">
    		<Router history={browserHistory}>
		    	<Route path="/" component={Index}/>
		    	<Route path="/booklist" component={BookList}/>
		    	<Route path="/about" component={About}/>
	  		</Router>
    	</div>);
  }

  componentWillMount(){
  	this.props.actions.successAbout('success');
  }
}

function mapStateToProps(state) {
	return {
		about:state.about
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		successAbout:successAbout
	}, dispatch);

	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(About);