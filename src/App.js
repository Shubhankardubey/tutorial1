import React, { Component } from "react";

const ThemeContext = React.createContext("light");

class App extends React.Component {
  render() {
    return <ThemeContext.Provider value="dark"><Toolbar></Toolbar></ThemeContext.Provider>;
  }
}

function Toolbar(props){
  return(
    <div>
      <ThemedButton></ThemedButton>
      </div>
  )
}

class ThemedButton extends React.Component{
  static contextType = ThemeContext
  render(){
    return <button theme={this.contextType}/>
  }
}

export default App;
