import React, {Component} from 'react'


class Tree extends Component{
  render() {
    let level = this.props.level;
    let tree = this.props.tree;
    return (
      <ul className={level == 1 ? 'side-menu' : 'child_menu'}>
        {tree.map((node, index) => <TreeNode key={node.id} node={node} level={level}/> )}
      </ul>);
  }


}

class TreeNode extends Component{

  render() {
    let node = this.props.node;
    let level = this.props.level;
    let childTree = null;
    if(node.child && node.child.length > 0){
      childTree = <Tree level={++level} tree={node.child} />
    }
    return (<li className="active">
              <a>
                { level == 1 ? <i className="fa fa-home"></i> : null }
                {node.text}
                {node.child && node.child.length > 0 ? <span className="fa fa-chevron-down"></span> : null}
              </a>
              {childTree}
            </li>);
  }


}


export default Tree