import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';



import Loading from 'components/Loading';
import Model from 'components/Model';

import Sidebar from 'components/Sidebar';
import NavBar from 'components/NavBar';

import { setUser} from 'actions/user';
import { initSidebar} from 'actions/sidebar';
import { hideModel} from 'actions/model'

class Intercept extends Component{

	handleEvent(){
		this.props.actions.hideModel();
	}
  	
  	componentDidMount(){
		let {actions} =  this.props;
		this.loginIntercept();
		actions.initSidebar();
		// console.log('Intercept componentDidMount');
	}

	loginIntercept(){
		let { user, router, actions} =  this.props;
		if( !user.id ){
			if(sessionStorage.user){
				actions.setUser(JSON.parse(sessionStorage.user));
			}else{
				router.push('/login');
			}
		}
	}

	componentWillReceiveProps(nextProps){
		this.loginIntercept();
		// console.log('Intercept componentWillReceiveProps');
	}


  	render() {
	  	let { loading, model, children, sidebar, user} = this.props;
	    return (
	    	<div className="intercept-container">
	    		<Loading type={loading.type} content={loading.content} hide={loading.isHide} />
	            <Model hide={model.isHide} content={model.content} handleEvent={model.handleEvent || this.handleEvent.bind(this)} />

	            <div className="container-left">
          			<div className="logo">
            			<Link to="/home"><span></span></Link>
          			</div>
          			<Sidebar sideBar={sidebar} />
        		</div>
	    		<div className="container-right">
			        <NavBar />
		           	{
		           		user.id ? children : null
		           	}
         		</div>
	    	</div>);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		loading: state.loading,
		model: state.model,
		sidebar:state.sidebar
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		setUser,initSidebar,hideModel
	}, dispatch);

	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Intercept);