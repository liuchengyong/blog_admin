import React, {Component} from 'react';
import classNames from 'commons/ClassNames';

class Loading extends Component{
  	render() {
  		if(this.props.hide) return null;
	  	let _props = {};
		let excludedProps = ['type','content','className','hide'];
		Object.keys(this.props).map(name => excludedProps.includes(name) ? '' : _props[name] = this.props[name]);
		return <div className={classNames('loading-component',this.props.className,{
			'hasContent': this.props.content ? true : false,
			'noback': this.props.type == 'noback',

		})} {..._props}>
			<div className="box">
				<i className="fa fa-spinner"></i>
				{
					this.props.content ? <span>{this.props.content}</span> : null
				}
			</div>
		</div>;
	}
}



export default Loading;



