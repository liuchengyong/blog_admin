import React, {Component} from 'react';
import { Link } from 'react-router';

import 'styles/containerleft.scss';

import Sidebar from 'components/Sidebar';

class ContainerLeft extends Component{
  render() {
    return (<div className="col-md-3 container-left">
              <div className="logo">
                <Link to="/home"><span>MoreWalkSofar</span></Link>
              </div>
              
              <Sidebar />

          </div>);
  }
}

export default ContainerLeft