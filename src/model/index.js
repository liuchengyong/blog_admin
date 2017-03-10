import React, {Component} from 'react';
import ChartJs from 'chart.js';

class Chart extends Component{
	constructor() {
	    super();
		this.type = ['line','bar','radar','polarArea','pie','doughnut','bubble'];
		this.methods = ['destroy', 'update', 'reset', 'render', 'stop', 'resize', 'clear', 'toBase64Image', 'generateLegend', 'getElementAtEvent' , 'getDatasetMeta'];
    
	}
	getChart(){
		return this.state.chart;
	}
	getCanvass(){
		return this.refs.canvas
	}
	initializeChart(props){
		let ctx = this.refs.canvas.getContext("2d");
		let chart = new ChartJs(ctx, {
		    type: props.type || 'bar',
		    data: props.data,
		    options: props.options || {}
		});
		console.log(ChartJs.prototype);
		this.setState({chart:chart});
	}
	componentDidMount(){
		this.methods.map(name => this[name] = (...args) => this.state.chart[name].bind(this.state.chart,args));
		this.initializeChart(this.props);
	}
	componentWillUnmount(){
		this.state.chart.destroy();
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.redraw){
			this.state.chart.destroy();
			this.initializeChart(nextProps);
		}else{

		}
	}
	render() {
		let _props = {
			ref:"canvas",
		};
		let excludedProps = ['type', 'data', 'options', 'redraw'];
		Object.keys(this.props).map(name => excludedProps.includes(name) ? '' : _props[name] = this.props[name])
	    return (<canvas {..._props} ></canvas>);
	}
}

export default Chart