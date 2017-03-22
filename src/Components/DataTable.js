import React, {Component} from 'react'
import classNames from 'commons/ClassNames'
import { Link } from 'react-router';

import request from 'commons/request';

class DataTable extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      isLoad:true,
	      list:[],
	      currentPage:1,
	      pageSize:2,
	    };
	    this.type = 'loacl'; // ['local','remote']
	    this.defaultOptions = {
	    	page:false,
	    	length:false
	    };
	}

	componentDidMount(){
		let options = Object.assign({},this.defaultOptions,this.props);
		this.initialize(options);
	}

	initialize(options){
		switch(options.type){
			case 'local': 
				this.initializeLocal(options);
				break;
			case 'remote': 
				this.initializeRemote(options);
				break;
		}
	}

	initializeLocal(options){
		let state = {};
		state.isLoad = false;
		state.totalSize = options.data.length;
		state.list = this.getCurrentDataList(this.state.currentPage,this.state.pageSize);
		this.setState(Object.assign({},this.state,state));
	}

	initializeRemote(options){
		this.getRemoteData({page:this.state.currentPage,pageSize:this.state.pageSize})
		
	}

	getRemoteData(data){
		let state = {};
		return request({url:this.props.url,data}).then(response => response.json()).then(res => {
			if(res.code == 0){
				let result = res.result;
				let state = {};
				state.isLoad = false;
				state.totalSize = result.totalSize;
				state.currentPage = result.page;
				state.pageSize = result.pageSize;
				state.list = result.list;
				this.setState(Object.assign({},this.state,state));
			}
		})
		
	}

	getCurrentDataList(currentPage,pageSize){
		let start = (currentPage - 1) * pageSize;
		let end = currentPage * pageSize;
		return this.props.data.slice(start,end);
	}


	handleChangeLengthLocal(state){
		if(this.props.page){
			state.currentPage = 1;
			state.list = this.getCurrentDataList(state.currentPage,state.pageSize);
		}else{
			state.list = this.props.data.slice(0,event.target.value);
		}
		this.setState(Object.assign({},this.state,state));
	}
	handleChangeLengthRemote(state){
		this.getRemoteData({page:1,pageSize:state.pageSize})
	}
	handleChangeLength(event){
		if(isNaN(event.target.value)) return;
		let state = {};
		state.pageSize = event.target.value;
		switch(this.props.type){
			case 'local': 
				this.handleChangeLengthLocal(state);
				break;
			case 'remote':
				this.setState({isLoad:true});
				this.handleChangeLengthRemote(state);
				break;
		}
	}

	handleChangePageRemote(item){
		if(item.type == 'num'){
			this.getRemoteData({page:item.value,pageSize:this.state.pageSize})
		}else{
			this.setState({isLoad:false});
		}
	}

	handleChangePageLocal(item){
		let state = {};
		if(item.type == 'num'){
			state.currentPage = item.value;
			state.list = this.getCurrentDataList(state.currentPage,this.state.pageSize);
		}
		this.setState(Object.assign({},this.state,state));
	}

	handleChangePage(item){
		switch(this.props.type){
			case 'local': 
				this.handleChangePageLocal(item);
				break;
			case 'remote':
				this.setState({isLoad:true});
				this.handleChangePageRemote(item);
				break;
		}
	}

  	render() {
  		let { isLoad, list, totalSize, pageSize, currentPage, start, end} = this.state;
  		let { page, search, length, header, info} = this.props;
 
  		let _start = (this.state.currentPage - 1) * this.state.pageSize;
  		let _end = this.state.currentPage * this.state.pageSize;
  		
	    return (
	      	<div className="datatable-container">
		      	<div className="datatable-container-header">
		      		{length ? <div className="datatable-length">显示<input type="text" value={pageSize} onChange={this.handleChangeLength.bind(this)}/>条数据</div> : null}
		      		{search ? <Search /> : null}
		      	</div>
		        <div className="datatable-container-from"></div>
		        <div className="datatable-container-table">
		        	{ isLoad ? <Toast /> : null }
		        	<Table data={list} header={header} />
		        </div>
		        <div className="datatable-container-footer">
		        	{
		        		info ? <div className="datatable-info">当前第{currentPage}页,从第{_start}条到第{_end}条,共{totalSize}条。</div> : null
		        	}
		        	
		        	{
		        		page && totalSize ? 
		        			<Page ChangePage={this.handleChangePage.bind(this)} totalSize={totalSize} currentPage={currentPage} pageSize={pageSize} />
		      				: null
		        	}
		       	</div>
		    </div>);
	}
}

class Toast extends Component{
	render() {
		return <div>
			<div className="datatable-mask"></div>
			<div className="datatable-toast">
	            <i className="datatable-loading datatable-icon_toast"></i>
	            <p className="datatable-toast__content">数据加载中</p>
	        </div>
		</div>
	}
}

class Table extends Component{
	render() {
		let { header, data} = this.props;
	    return (<table className="table table-bordered table-striped table-hover">
	    	<thead>
	    		<tr>
	    			{ header.map((option,index) => <th key={index} style={option.style}>{ option.name || option.clomn }</th>) }
	    		</tr>
	    	</thead>
	    	<tbody>
	    		{
	    			data.length == 0 ? <tr><td className="table-null" colSpan={header.length}> 暂无数据 </td></tr> : null 
	    		}
	    		{ data.map(tbody => <TableTr key={tbody.id} header= {this.props.header} data={tbody}/>) }
	    	</tbody>
	    </table>);
	}
}

class TableTr extends Component{
	renderTd(key,data,options){
		let content = options.format ? options.format(data) : data[options.clomn];

		return <td key={key} style={options.style}> 
	    			{
	    				content || options.default
	    			}
    			</td>
	}

	render() {
		let { header, data} = this.props;
	    return (<tr>
			    	{
			    		header.map((options,key) => this.renderTd(key,data,options))
			    	}
	    		</tr>);
	  }
}

class Search extends Component{
  	render(){
    	return (<div className="datatable-search">搜索：<input type="text" /></div>)
  	}
}

class Page extends Component{

	createNumList(current,totalPageSize,showPageSize){
		let list = [],
			dis_r = (showPageSize-1) / 2,
			dis_r_more = (showPageSize-1) % 2,
			dis_before = current - dis_r,
			dis_after = current + dis_r + dis_r_more;
		dis_after = dis_before < 1 ? (dis_after - dis_before + 1) : dis_after;
		dis_before = dis_after > totalPageSize ? (dis_before - dis_after + totalPageSize) : dis_before;
		let	start = dis_before >= 1 ? dis_before : 1,
			end = dis_after <= totalPageSize ? dis_after : totalPageSize;
		for(let i = start; i <= end; i++){
			list.push({type:'num',value: i});
		}
		return list;
	}

	getPageList(current,totalPageSize,showPageSize){
		let pageList = this.createNumList(current,totalPageSize,showPageSize);
		if(pageList.length < showPageSize) return pageList;
		if(pageList[0].value > 1){
			pageList.unshift({type:'point',value: '...'});
			pageList.unshift({type:'pre',value: '<<'});
			pageList.unshift({type:'first',value: '首页'});
		}
		if(pageList[pageList.length -1].value < totalPageSize){
			pageList.push({type:'point',value: '...'});
			pageList.push({type:'next',value: '>>'});
			pageList.push({type:'last',value: '尾页'});
		}
		return pageList;
	}
	
	render(){
		if(this.props.pageSize == 0) return null;
		let {currentPage,pageSize,totalSize,ChangePage} = this.props;
		let totalPageSize = totalSize % pageSize > 0 ? parseInt(totalSize/pageSize) + 1 : totalSize/pageSize;
		let list = this.getPageList(currentPage -1+1,totalPageSize,3);
	    return (<div className="datatable-page">
	    	<ul>
	    		{list.map((item,index)=>{
	    			return <li key={index} className={classNames({
	    				current:item.value == currentPage
	    			})} onClick={() => ChangePage(item)}><a>{item.value}</a></li>
	    		})}
	    	</ul>
	    </div>)
	}
}



export default DataTable