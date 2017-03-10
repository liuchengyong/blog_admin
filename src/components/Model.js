import React, {Component} from 'react';
import classNames from 'commons/ClassNames';




class Model extends Component{
	constructor(props){
		super(props);
		this.default = {
			title:'提示',
			ok:'确定',
			cancle:'取消'
		};
	}
	handleEvent(type){
		this.props.handleEvent(type);
	}
  	render() {
  		if(this.props.hide) return null;
  		let options = Object.assign({},this.default,this.props.options);
	  	let _props = {};
		let excludedProps = ['type','content','className','hide','options','html','children','handleEvent'];
		Object.keys(this.props).map(name => excludedProps.includes(name) ? '' : _props[name] = this.props[name]);
		return <div className={classNames('model-component',this.props.className,{
			
		})} {..._props}>
			<div className="box">
				<div className="hd">
					{ options.title ? <span>提示</span> : null }
					<i className="fa fa-times" onClick={this.handleEvent.bind(this,'close')}></i>
				</div>
				{
					this.props.children ? 
					<div className="bd">{this.props.children}</div> :
					<div className="bd">{this.props.content}</div>
				}
				<div className="ft">
					<button className="btn-primary btn-md" onClick={this.handleEvent.bind(this,'ok')}>{options.ok}</button>
					{
						this.props.type == 'confirm' ? <button className="btn-md" onClick={this.handleEvent.bind(this,'cancle')}> {options.cancle}</button> : null
					}
				</div>
			</div> 
			
		</div>;
	}
}



export default Model;