import React, {Component} from 'react'

import Tree from 'components/Tree';



class Sidebar extends Component{

  componentDidMount(){
    this.props.actions.getSideBarAction();
  }

  render() {
    let {path,sideBar} = this.props;
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
          <Tree tree={list} level={1} path={path} />
      </div>);
  }
}

export default Sidebar