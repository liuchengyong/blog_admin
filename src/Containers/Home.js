import React, {Component} from 'react';
import { Link } from 'react-router';

import ContainerLeft from 'components/ContainerLeft';


import 'styles/home.scss';

class Home extends Component{
  render() {
    return ( 
        <div className="home-container">
          <ContainerLeft />
        </div>);
  }
}

export default Home