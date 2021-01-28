import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const BtnColorContext = React.createContext('btn btn-darkyellow')

class App extends React.Component {
  render() {
    return (
      <BtnColorContext.Provider value="">
        <Button />
        </BtnColorContext.Provider>
    )
  }
}

function Button(props){
  return(
    <BtnColorContext.Consumer>
      {value => <div>{value}</div>}
      </BtnColorContext.Consumer>
  )
}

class ThemedButton extends React.Component{
  render(){
    return <button className={this.context}>
      welcome
      </button>
  }
}

export default App;
