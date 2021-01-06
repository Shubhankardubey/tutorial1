import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDom from "react-dom";
import Test from "./testComponent";
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      value:"",
      logged:[]
    }
    // window.localStorage.setItem("shubh", JSON.stringify({hello:"world"}))
    // console.log(JSON.parse(window.localStorage.getItem("shubh")).hello)
    // window.localStorage.clear()
  }

  componentWillMount(){
    // if(JSON.parse(localStorage.getItem("logged"))){

    // }
    // this.setLogInValue()
  }

  // appi function call
  // setState: {}


  setLogInValue = () => {
    this.setState({
      logged:localStorage.getItem("logged") ? JSON.parse(localStorage.getItem("logged")) : false
    },()=>{
      this.componentWillMount()
    })
  }

  render(){
    return (
      <div style={{padding:"40px"}}>
        {this.state.logged ? "Log in " : "Logged out"}

        <Test click={this.setLogInValue}/>
      </div>
    )
  }
}

export default App;
