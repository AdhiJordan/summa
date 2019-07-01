import React from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

class Display extends React.Component{
  constructor(props){
    super(props);
    this.state={
        treasure :""
    }
    this.getString = "";
  }

  componentWillReceiveProps(newProps){
    console.log("newProps", newProps);
  }

  shouldComponentUpdate(newProps, newState){
    return true;
  }

  componentWillUpdate(newProps, newState){
    console.log("componentWillUpdate", newProps, newState);
    this.getString = newProps.text;
    console.log("getString", this.getString)
  }

  componentDidUpdate(prevProps, prevState){
      console.log("componentDidUpdate", prevProps, prevState)
  }

  render(){
    return (
      <div>
        Display Component
        <p>{this.props.text}</p>
      </div>
    );
  }
}

// function mapStateToProps(state){
//   console.log(state);
//   return {
//     userDetails: state.user.user
//   };
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({}, dispatch);
// }

export default Display;