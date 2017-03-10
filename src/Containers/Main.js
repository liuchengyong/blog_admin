import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';


// pages 
import Sidebar from 'components/Sidebar';
import NavBar from 'components/NavBar';

import getSideBarAction from 'actions/getSideBarAction';


class Main extends Component{
  
  render() {
    
    let path = 'home';
    if(this.props.routes.length > 0){
      path = this.props.routes[this.props.routes.length-1].name; 
    }

    return (
    	<div className="main-container">
    		<div className="container-left">
          <div className="logo">
            <Link to="/home"><span></span></Link>
          </div>
          <Sidebar path={path} actions={this.props.actions} sideBar={this.props.sideBar} />
        </div>
    		<div className="container-right">
           <NavBar />
           {this.props.children}
          </div>
    	</div>);
  }
}

function mapStateToProps(state) {
	return {
		sideBar:state.sideBar,
    user:state.user
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		getSideBarAction:getSideBarAction
	}, dispatch);

	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);