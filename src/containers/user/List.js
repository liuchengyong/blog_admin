import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DataTable from 'components/DataTable';



class Home extends Component{
  render() {
    let list = [];
    for(let i = 0; i < 1000;i++){
      list.push({
        id: 10000 + i,
        name: 'liu' + i,
        sex: i%2 == 0 ? 'male':'female',
        age: i%30,
        weight: 100 + 1 + 'kg'
      });
    }

    let dataTable = {
      type:'remote',
      url:'/blog/user/getAll',
      search:true,
      page:true,
      length:true,
      info:true,
      header:[
        { 
          clomn:'id',
          name:'编号'
        },
        { 
          clomn:'name',
          name:'姓名'
        },
        { 
          clomn:'sex',
          name:'性别',
          format:(data)=>{
            return data.sex == 1 ? '男' : '女';
          },
        },
        { 
          clomn:'address',
          name:'地址',
        },
        { 
          clomn:'description',
          name:'简介',
          default:'暂无',
        },
        { 
          clomn:'email',
          name:'email'
        },
        {
          name:'操作',
          format:(data)=>{
            return <div>
              <button className='btn-sm btn-caution'>删除</button>
              <button className='btn-sm btn-action'>编辑</button>
            </div>
          }
        }
      ],
      data:list
    };

    return ( 
        <div className="container-user-list">
        	<DataTable {...dataTable}/>
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
		
	}, dispatch);

	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);