import React, {Component} from 'react'
import classNames from 'commons/ClassNames'
import { Link } from 'react-router';

class DataTable extends Component{

	constructor(props) {
	    super(props);
	    this.state = {
	      currentPage: 1,
	      pageSize: 10
	    };
	}
	handleChange(event){
		this.setState({pageSize: event.target.value,currentPage:1});
	}
	handleChangePage(item){
		if(item.type == 'num'){
			this.setState({currentPage: item.value});
		}
	}	

  	render() {
  		let _start = (this.state.currentPage - 1) * this.state.pageSize;
  		let _end = this.state.currentPage * this.state.pageSize;
  		let totalSize = this.props.data.length;
  		let list = this.props.data.slice(_start,_end);
	    return (
	      <div className="datatable-container">
	      	<div className="datatable-container-header">
	      		<div className="datatable-length">显示<input type="text" value={this.state.pageSize} onChange={this.handleChange.bind(this)}/>条数据</div>
	      		{this.props.search ? <Search /> : null}
	      	</div>
	        <div className="datatable-container-from"></div>
	        <Table data={list} header={this.props.header}/>
	        <div className="datatable-container-footer">
	        	<div className="datatable-info">当前第1页,从第1条到第20条</div>
	        	<Page ChangePage={this.handleChangePage.bind(this)} totalSize={totalSize} currentPage={this.state.currentPage} pageSize={this.state.pageSize} />
	        </div>
	    </div>);
	}
}

class Table extends Component{
	render() {
	    return (<table className="table table-bordered table-striped table-hover">
	    	<thead>
	    		<tr>
	    			{this.props.header.map((thead,index) => <th key={index}>{thead.name || thead.clomn}</th>)}
	    		</tr>
	    	</thead>
	    	<tbody>
	    		{this.props.data.map(tbody => <TableTr key={tbody.id} header= {this.props.header} tbody={tbody}/> )}
	    	</tbody>
	    </table>);
	}
}

class TableTr extends Component{
	render() {
	    return (<tr>
	    	{this.props.header.map((th,index) => <td key={index}>{this.props.tbody[th.clomn]}</td>)}
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
		let {currentPage,pageSize,totalSize,ChangePage} = this.props;
		let totalPageSize = totalSize % pageSize > 0 ? totalSize/pageSize + 1 : totalSize/pageSize;
		let list = this.getPageList(currentPage,totalPageSize,3);
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