import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DataTable from 'components/DataTable';

import getSideBarAction from 'actions/getSideBarAction';


class Home extends Component{
  render() {
    

    return ( 
        <div className="container">
        	
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