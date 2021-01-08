import React, {Component} from "react";
import PropTypes, { element } from 'prop-types';
import ReactDom from "react-dom";
import Test from "./testComponent";
import {TransitionGroup} from 'react-transition-group';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      items:["Advanced", "Reactjs", "Angular", "JS"]
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(){
    const newItems = this.state.items.concat([prompt("Enter Item name")])
    this.setState({
      items: newItems
    })
  }

  handleRemove(i){
    let newItems = this.state.items.slice()
    newItems.splice(i,1)
    this.setState({
      items: newItems
    })
  } 

  render(){
    const items = this.state.items.map((item, i)=>{
      <div key={i} onClick={()=>this.handleRemove(i)}>
        {item}
        </div>
    })
    return (
      <div>
        <button type="button" onClick={this.handleAdd}></button>
        <TransitionGroup 
        transitionName="example"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={600}
        >
          {items}
          </TransitionGroup>
        </div>      
    )
  }
}

export default App;
