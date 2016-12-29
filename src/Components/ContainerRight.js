import React, {Component} from 'react';
import { Link } from 'react-router';

import 'styles/containerright.scss';

import NavBar from 'components/NavBar';

class ContainerLeft extends Component{
  render() {
    return (<div className="container-right">
             <NavBar />
             {this.props.children}
          </div>);
  }
}

export default ContainerLeft