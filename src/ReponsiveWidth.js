import React, {Component} from "react";
import './App.css';
// import {CSSTransition} from 'react-transition-group';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import About from "./About"
import Test from "./testComponent"
// const {Provider, Consumer} = React.createContext(defaultValue)

class App extends React.Component{

  constructor(props){
    super(props)
  this.state = {
    width:0,
    height:0
  }
  this.updateDimenstions = this.updateDimenstions.bind(this)
  }

  componentWillMount(){
    this.updateDimenstions()
  }

  componentDidMount(){
    window.addEventListener('resize', this.updateDimenstions)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateDimenstions)
  }

  updateDimenstions(){
    console.log("12")
    this.setState({width: window.innerWidth, height: window.innerHeight})
  }

  render(){
    return (
      <div>
        {/* {this.state.hasError ? "Something Went Wrong" :""} */}
        {this.state.width} {this.state.height}
        
      </div>
    )
  }
}

export default App;
