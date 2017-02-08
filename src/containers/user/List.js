import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DataTable from 'components/DataTable';

import getSideBarAction from 'actions/getSideBarAction';


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
      search:true,
      page:true,
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
          name:'性别'
        },
        { 
          clomn:'age',
          name:'年龄'
        },
        { 
          clomn:'weight',
          name:'体重'
        },
      ],
      data:list
    };

    return ( 
        <div className="home-container">
        	<ContainerLeft {...this.props} />
          <ContainerRight>
            <DataTable {...dataTable}/>
          </ContainerRight>
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