import React, {Component} from 'react';
import { Link } from 'react-router';

import 'styles/containerleft.scss';

import Sidebar from 'components/Sidebar';

class ContainerLeft extends Component{
  render() {
    return (<div className="container-left">
              <div className="logo">
                <Link to="/home"><span>MoreWalkSofar</span></Link>
              </div>
              <Sidebar {...this.props} />
          </div>);
  }
}

export default ContainerLeft