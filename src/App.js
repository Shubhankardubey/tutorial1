import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDom from "react-dom";
import Test from "./testComponent";
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      name:"Shubhankar",
      btnName:"Hello"
    }
  }

  changeStateName = (name) => {
    this.setState({name:name, btnName:"world"})
  }

  render(){
    return (
      <div style={{padding:"40px"}}>
        {this.state.name}
        <Test btnName={this.state.btnName} changeName={this.changeStateName}/>
      </div>
    )
  }
}

export default App;
