import React, {Component} from 'react';

class Day extends Component{

	constructor(props){
		super(props);
	}
	createDay(){
		let {weekFirst,mouthDays} = this.props;
		if(!mouthDays) return [];
		let rows = [],colls = [];
		for(let i = 0; i < weekFirst; i++){
			colls.push('');
		}
		for(let i = 1; i <= 43; i++){
			if(colls.length == 7){
				rows.push(colls);
				if(i > mouthDays) break;
				colls = [];
			}
			if(i <= mouthDays){
				colls.push(i);
			}else{
				colls.push('');
			}
		}
		return rows;
	}
	selectDate(event){
		let dom = event.target;
		if(dom.className.includes('item')){
			let {year,mouth} = this.props;
			this.props.select(new Date(year,mouth-1,dom.dataset.value));
		}
	}
	render(){
		let {days,day,isShow} = this.props;
		if(!isShow) return null;
		let rows = this.createDay();

		return (<table className="date-picker-days" onClick={this.selectDate.bind(this)}>
				<thead>
	    			<tr>
	    				{
	    					days.map(value => <th key={value}>{value}</th>)
	    				}
	    			</tr>
	    		</thead>
	    		<tbody>
	    			{
	    				rows.map((list,index) => {
	    					return 	<tr key={index}>
			    						{
			    							list.map((value,index) => value ? 
			    								<td key={index} data-value={value} className={ day == value ? 'current item' : 'item'} > {value} </td> : 
			    								<td key={index}>{value}</td>)
			    						}
		    						</tr>;
	    				})
	    			}
	    		</tbody>
			</table>)
	}
}

class DatePicker extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
			isShow:false
		};
	    this.options = {
	    	format:'yyyy-MM-dd',
	    	placeholder:'请选择日期',
		    days: ['日', '一', '二', '三', '四', '五', '六'],
	    };

	}

	changeYear(type){
		let year = this.state.year;
		type == 'minus' ? year -- :  year ++;
		let date = new Date(year,this.state.mouth - 1)
		let isSelect = this.isSampleMouth(date);
		this.parseDay(date,isSelect);
	}
	changeMouth(type){
		let mouth = this.state.mouth;
		type == 'minus' ? mouth -- :  mouth ++;
		let date = new Date(this.state.year,mouth - 1);
		let isSelect = this.isSampleMouth(date);
		this.parseDay(date,isSelect);
	}
	
	componentDidMount(){
		let isSelect = this.props.value ? true : false;
		this.parseDay(this.props.value || new Date(),isSelect);
	}

	componentWillReceiveProps(nextProps){
		let isSelect = nextProps.value ? true : false;
		this.parseDay(nextProps.value || new Date(),isSelect);
	}

	parseDay(date,isSelect){
		let year = date.getFullYear();
		let mouth = date.getMonth() + 1;
		let day = isSelect ? date.getDate() : -1;
		let mouthDays = new Date(year,mouth,0).getDate();
		let weekFirst = new Date(year,mouth - 1).getDay();
		this.setState({year,mouth,day,mouthDays,weekFirst});
	}
	isSampleMouth(date){
		let now = this.props.value;
		if(!now) return false;
		let nowStr = this.props.value.Format('yyyy-MM');
		let newStr = date.Format('yyyy-MM');
		return nowStr ==  newStr;
	}

	selectDate(date){
		this.setState({isShow:!this.state.isShow});
		this.props.selectDate(date);
	}

	render(){
		let options = Object.assign({},this.options,this.props.options);
		return (<div ref='box' className="date-picker-container" tabIndex="1" onBlur={()=>{this.setState({isShow:false})}}>
			<div className="date-picker-value" onClick={()=>{this.setState({isShow:!this.state.isShow})}}>
				<input value={this.props.value ? this.props.value.Format(options.format|| '') : ''} placeholder={options.placeholder} readOnly />
			 	<i className="fa fa-calendar"></i>
			</div>
			{
				this.state.isShow ? 
				<div className="date-picker-box">
					<div className="date-picker-header">
						<button className="btn-sm" onClick={this.changeYear.bind(this,'minus')}><i className="fa fa-angle-double-left"></i></button>
						<button className="btn-sm" onClick={this.changeMouth.bind(this,'minus')}><i className="fa fa-angle-left"></i></button>
						<span>{this.state.year + '年' + this.state.mouth + '月'}</span>
						<button className="btn-sm" onClick={this.changeMouth.bind(this,'add')}><i className="fa fa-angle-right"></i></button>
						<button className="btn-sm" onClick={this.changeYear.bind(this,'add')}><i className="fa fa-angle-double-right"></i></button>
					</div>
					<Day days={options.days} {...this.state} select={this.selectDate.bind(this)} />
				</div> : null
			}
			
		</div>);
	}
}

export default DatePicker;