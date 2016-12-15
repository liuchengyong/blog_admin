import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContainerLeft from 'components/ContainerLeft';

import getSideBarAction from 'actions/getSideBarAction';

import 'styles/home.scss';

class Home extends Component{
  render() {
    return ( 
        <div className="home-container">
        	<ContainerLeft {...this.props} />
        	<div className="container-right">
        		
        	</div>
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
		getSideBarAction:getSideBarAction
	}, dispatch);

	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);