import React, {Component} from 'react'



import Tree from 'components/tree/Tree';

import 'styles/sidebar.scss';

class Sidebar extends Component{

  componentDidMount(){
    this.props.actions.getSideBarAction();
  }



  render() {
    console.log(this.props);

    let sideBar = this.props.sideBar;
    if(sideBar.status != 'success'){
      return (<div className="sidebar-container">你没有任何权限</div>);
    }
    let list = sideBar.param.result,
        listDom = null;
    if(list.length == 0)
      return (<div className="sidebar-container">你没有任何权限</div>);
    else{
      listDom = (<ul className="side-menu">
        {list.map(function(item){
          return(<li key={item}><a><i className="fa fa-home"></i>{item.text}<span className="fa fa-chevron-down"></span>
                </a>
              </li>)
        })}
      </ul>)
    }
    return (
      <div className="sidebar-container">
          <Tree tree={list} level={1} />
      </div>);
  }
}

export default Sidebar