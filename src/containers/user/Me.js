import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Progress from 'components/Progress';
import Chart from 'components/Chart';


import headicon from 'images/picture.jpg';



function rand(min, max, num) {
  var rtn = [];
  while (rtn.length < num) {
    rtn.push((Math.random() * (max - min)) + min);
  }
  return rtn;
}

class Me extends Component{
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  render() {
    console.log(this.props);

    
    let data = {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };
    let options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        };
        
    return ( 
        <div className="me-container">
          <div className="me-container-header">
            个人资料
          </div>
          <div className="me-container-body">
            <div className="me-base">
              <img className="me-head-icon" src={headicon}/>
              <span className="me-name">Samuel Doe</span>
              <span className="me-address"><i className="fa fa-map-marker"></i>San Francisco, California, USA</span>
              <span className="me-job"><i className="fa fa-briefcase"></i>Software Engineer</span>
              <span className="me-home-page"><i className="fa fa-external-link"></i>www.kimlabs.com</span>
              <botton type="button" >edit profile</botton>
              <span className="title">skills</span>
              <span className="skill">
                Web Applications
                <Progress size={'80%'} className="progress-sm" barClassName="bg-green"/>
              </span>
              <span className="skill">
                Website Design
                <Progress size={'70%'} className="progress-sm" barClassName="bg-green"/>
              </span>
              <span className="skill">
                Automation & Testing
                <Progress size={'40%'} className="progress-sm" barClassName="bg-green"/>
              </span>
              <span className="skill">
                UI / UX
                <Progress size={'50%'} className="progress-sm" barClassName="bg-green"/>
              </span>
              <span className="title">likes</span>
              <span className="skill">
                gemes
                <Progress size={'80%'} className="progress-sm" barClassName="bg-green"/>
              </span>
              <span className="skill">
                basketball
                <Progress size={'70%'} className="progress-sm" barClassName="bg-green"/>
              </span>
              <span className="skill">
                travel
                <Progress size={'40%'} className="progress-sm" barClassName="bg-green"/>
              </span>
            </div>
            <div className="me-other">
              <div className="profile-title">
                操作历史记录
              </div>
              <Chart type="bar" data={data} options={options}/>
              
            </div>
          </div>
        </div>);
  }
}

function mapStateToProps(state) {
	return {
		user:state.user
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		
	}, dispatch);

	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Me);