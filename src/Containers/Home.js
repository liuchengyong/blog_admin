import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Form from 'components/Form';
import Loading from 'components/Loading';
import Model from 'components/Model';

class Home extends Component{

  constructor(props) {
      super(props);
      this.state = {
        name: '',
        sex:'',
        birth:new Date(1993,2,21),
        isHideConfirm:true,
        isHideAlert:true,
        isHideLoading:true,
        isHideLoading2:true,

      };
      
      this.sexList = [
        {key:'1',value:'男'},
        {key:'0',value:'女'}
      ];
     
  }
  handleFormChange(obj){
    let state = Object.assign({},this.state,obj)
    this.setState(state)
  }
  handleModelEvent(name,type){
    if(type == 'close'){
      this.setState({[name]:true});
    }else if(type == 'ok'){
      this.setState({[name]:true});
    }else if(type == 'cancle'){
      this.setState({[name]:true});
    }
  }

  handleLoadingEvent(name){
    this.setState({[name]:false});
    setTimeout(()=>{
      this.setState({[name]:true});
    },3000);
  }


  render() {
    let { user} = this.props;
    let { name, sex, birth} = this.state;
    return ( 
        <div className="home-container">
            <code>{ JSON.stringify(user) }</code>

            <h2>loading</h2>
            <div>
                <button className="btn-primary" onClick={this.handleLoadingEvent.bind(this,'isHideLoading')}>点击打开loading</button>
                <button className="btn-primary" onClick={this.handleLoadingEvent.bind(this,'isHideLoading2')}>点击打开loading2</button>

                <Loading content="加载中" hide={this.state.isHideLoading}/>
                <Loading type="noback" content="加载中" hide={this.state.isHideLoading2}/>
            </div>
           

            <h2>model</h2>
            <div>
                <button className="btn-primary" onClick={()=>{this.setState({isHideConfirm:false})}}>点击打开confirm</button>
                <button className="btn-primary" onClick={()=>{this.setState({isHideAlert:false})}}>点击打开alert</button>

                <Model type="confirm" hide={this.state.isHideConfirm} content="我是一个confirm" handleEvent={this.handleModelEvent.bind(this,'isHideConfirm')} />
                <Model type="alert" hide={this.state.isHideAlert} content="我是一个alert" handleEvent={this.handleModelEvent.bind(this,'isHideAlert')} />
            </div>
           
           
            <h2>button styles</h2>
            <div>
                <button className='btn-sm'>small</button>
                <button className='btn-md'>medium</button>
            </div>
            <br/>
            <div>
                <button>default</button>
                <button className="btn-primary">default</button>
                <button className="btn-action">action</button>
                <button className="btn-highlight">highlight</button>
                <button className="btn-caution">caution</button>
                <button className="btn-royal ">royal</button>
            </div>

            <h2>froms</h2>
            <div className="froms style">
              <Form className="form-horizontal" type="input" name="name" lab="姓名" 
                  value={name || ''} placeholder="请输入姓名" handleChange={this.handleFormChange.bind(this)} />
              <Form className="form-horizontal" type="radio" name="sex" lab="性别" 
                  list={this.sexList} value={sex || ''}  handleChange={this.handleFormChange.bind(this)}/>
              <Form className="form-horizontal" type="date" name="birth" lab="出生日期" 
                value={birth || ''} placeholder="请输入出生日期" handleChange={this.handleFormChange.bind(this)}/>

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

export default connect(mapStateToProps,mapDispatchToProps)(Home);