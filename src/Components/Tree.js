import React, {Component} from 'react'
import classNames from 'commons/ClassNames'
import { Link } from 'react-router';

class Tree extends Component{
  render() {
    let level = this.props.level;
    let tree = this.props.tree;
    let path = this.props.path;
    let height = this.props.height;
    return (
      <ul style={{height: height }} className={level == 1 ? 'side-menu' : 'child_menu'}>
        {tree.map((node, index) => <TreeNode key={node.id} node={node} level={level} path={path}/> )}
      </ul>);
  }


}

class TreeNode extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      height:0
    };
  }

  handleClickNode(state,event){
    let height = state ? 0 : 36 * this.props.node.child.length;
    this.setState({isActive: !state, height:height});
  }

  render() {
    let node = this.props.node;
    let level = this.props.level;
    let path = this.props.path;
    let childTree = null,_node = null;
    if(node.child && node.child.length > 0){
      _node = <a onClick={this.handleClickNode.bind(this,this.state.isActive)}>
                { level == 1 ? <i className="fa fa-home"></i> : null }
                { node.text }
                <span className="fa fa-chevron-down"></span>
              </a>;
      childTree = <Tree level={++level} tree={node.child}  path={path} height={this.state.height}/>
    }else{
      _node = <Link to={node.path}>
                { level == 1 ? <i className="fa fa-home"></i> : null }
                { node.text }
              </Link>;
    }
    return (<li className ={classNames({
                              'active': this.state.isActive,
                              'current-page': path == node.pname
                            })}>

              { _node }
              { childTree }
            </li>);
  }


}


export default Tree