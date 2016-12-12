import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import successAbout from 'actions/bindAbout';


class About extends Component{
  render() {
  	console.log(this);
    return (<h1>i am About</h1>);
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