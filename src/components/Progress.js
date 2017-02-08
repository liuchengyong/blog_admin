
import React, {Component} from 'react'


class Progress extends Component{
  render() {
    return (
      <div className={"progress " + this.props.className}>
      	<span className={"progress-bar " + this.props.barClassName} style={{
      		width:this.props.size
      	}}></span>
      </div>
    );
  }
}

export default Progress