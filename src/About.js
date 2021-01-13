import React, { Component } from "react";
import {
  BrowserRouter as Route,
  Link,
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import myData from "./hello";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      newData: myData,
    });
  }

  render() {
    return <h1>{this.state.newData && this.state.newData.toString()}</h1>;
  }
}

export default About;
