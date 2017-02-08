import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Progress from 'components/Progress'

import headicon from 'images/picture.jpg';

let LineChart = require("react-chartjs").Line;

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


    let aa =  {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: rand(32, 100, 7)
          },
          {
              label: "My Second dataset",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: rand(32, 100, 7)
          }
      ]
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
              <div>
                <LineChart data={aa} width="600" height="250"/>
              </div>
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