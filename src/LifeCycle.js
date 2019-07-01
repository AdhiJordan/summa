import React, {Component} from 'react';

export default class LifeCycle extends Component{
  constructor(props){
    super(props);
    this.state = {
      newData: "abcde"
    };
  }

  componentDidMount(){
    //console.log("props value", this.props)
  }

  componentWillReceiveProps(newProps){
    //console.log("componentWillReceiveProps", newProps)
    this.setState({
      newData: newProps.sendData
    })
  }

  componentWillUpdate(nextProps, nextState){
    //console.log("componentWillUpdate", nextProps, nextState)
    // this.setState({
    //   newData: "abcde"
    // })
  }

  componentDidUpdate(prevProps, prevState){
    //console.log("componentDidUpdate", prevProps, prevState)
  }

  shouldComponentUpdate(nextProps, nextState){
    //console.log("shouldComponentUpdate", nextProps)
    return true;
  }


  render(){
    return(
      <div className="container">
          Life cycle Component
          <h1>{this.state.newData}</h1>
      </div>
    );
  }
}

