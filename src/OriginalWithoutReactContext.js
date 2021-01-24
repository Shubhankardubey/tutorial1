import React, { Component } from "react";

class App extends React.Component {
  render() {
    return <Toolbar theme='dark'></Toolbar>;
  }
}

function Toolbar(props){
  return(
    <div>
      <ThemedButton theme={props.theme}></ThemedButton>
      </div>
  )
}

class ThemedButton extends React.Component{
  render(){
    return <button theme={this.props.theme}/>
  }
}

export default App;
