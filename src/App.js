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
    this.state={}
  }


  componentDidMount(){
    this.interval = setInterval(()=>this.setState({time: new Date().toISOString()}), 1000) 
  }

  componentWillMount(){
    clearInterval(this.interval)
  }

  render(){
    return <div>
      <input type="file" ref={input=>this.inputEleRef = input} style={{display:"none"}}/>
      <button type="buton" onClick={()=>this.inputEleRef.click()}>Hello Please Upload File</button>
    </div>
  }
}

export default App;
