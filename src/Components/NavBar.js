
import React, {Component} from 'react'

class NavBar extends Component{
  render() {
    return (<div className="navbar-container">
        <div className="sidebar_toggle"><i className="fa fa-bars"></i></div>
        <div className="navbar-right">
          <div className="msg-list"><i className="fa fa-envelope-o"></i></div>
          <div className="user-profile">
            <i className="fa fa-user"></i>
            <span>刘诚勇</span>
          </div>
        </div>
      </div>);
  }
}

export default NavBar;