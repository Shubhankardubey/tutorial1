import React, {Component} from "react";
import PropTypes, { element } from 'prop-types';
import ReactDom from "react-dom";
import Test from "./testComponent";
import './App.css';
import styled from 'styled-components';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      value:"",
      logged:[]
    }
  }

  componentWillMount(){
    // if(JSON.parse(localStorage.getItem("logged"))){

    // }
    // this.setLogInValue()
  }

 

  render(){
    const Div = styled.div`margin:20px;border:5px dashed green`;
    return (
      <Div hoverColor="Orange" />
      
    )
  }
}

export default App;
