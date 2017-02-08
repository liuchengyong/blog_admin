import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


let LineChart = require("react-chartjs").Line;
let BarChart = require("react-chartjs").Bar;
let RadarChart = require("react-chartjs").Radar;
let PieChart = require("react-chartjs").Pie;
let PolarAreaChart = require("react-chartjs").PolarArea;
let DoughnutChart = require("react-chartjs").Doughnut;


function rand(min, max, num) {
  var rtn = [];
  while (rtn.length < num) {
    rtn.push((Math.random() * (max - min)) + min);
  }
  return rtn;
}

class Charts extends Component{
  
  render() {
    console.log(this.props);


    let data1 =  {
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

    
    let data2 ={
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
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
   

    let data3 =  [{
              value: rand(25, 300, 1)[0],
              color:"#F7464A",
              highlight: "#FF5A5E",
              label: "Red"
          },{
              value: rand(25, 300, 1)[0],
              color: "#46BFBD",
              highlight: "#5AD3D1",
              label: "Green"
          },{
              value: rand(25, 300, 1)[0],
              color: "#FDB45C",
              highlight: "#FFC870",
              label: "Yellow"
          },{
              value: rand(25, 300, 1)[0],
              color: "#949FB1",
              highlight: "#A8B3C5",
              label: "Grey"
          },{
              value: rand(25, 300, 1)[0],
              color: "#4D5360",
              highlight: "#616774",
              label: "Dark Grey"
          }];

      
      
      
        
    return ( 
        <div className="me-container">
          	<LineChart data={data1} width="600" height="250"/>
		  	<BarChart data={data1} width="600" height="250"/>
		  	<RadarChart data={data2} width="600" height="250"/>
		  	<PolarAreaChart data={data3} width="600" height="250"/>
		  	<PieChart data={data3} width="600" height="250"/>
		  	<DoughnutChart data={data3} width="600" height="250"/>
        </div>);
  }
}

function mapStateToProps(state) {
	return {
		
	}
}

function mapDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		
	}, dispatch);

	return {actions: boundActionCreators};
}

export default connect(mapStateToProps,mapDispatchToProps)(Charts);