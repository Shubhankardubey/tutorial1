import React, {Component} from "react";

class Test extends React.Component{
  
  buttonClick = () => {
    localStorage.setItem("logged", true)
    this.props.click()
  }

  render(){
    return (
      <div style={{padding:"10px"}}>
        <button type="button" onClick={()=>this.buttonClick()}>Click</button>
      </div>
    )
  }
}

export default Test;
