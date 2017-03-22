import React, {Component} from 'react'
import Tree from 'components/Tree';



class Sidebar extends Component{
  render() {
    let {sideBar} = this.props;
    let path = "home";
    if(sideBar.code != 0){
      return (<div className="sidebar-container">你没有任何权限</div>);
    }
    return (
      <div className="sidebar-container">
          <Tree tree={sideBar.result} level={1} path={path} />
      </div>);
  }
}

export default Sidebar