import React, {Component} from "react";

class Test extends React.Component{
  render(){
    return (
      <div style={{padding:"10px"}}>
        <button type="button" onClick={()=>this.props.changeName(Math.random())}>{this.props.btnName}</button>
      </div>
    )
  }
}

export default Test;
