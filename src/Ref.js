import React, {Component} from "react";
import PropTypes, { element } from 'prop-types';
import ReactDom from "react-dom";
import Test from "./testComponent";
import './App.css';

// const TextInput = React.forwardRef((props,ref)=>(
//   <input type="text" placeholder="hello world" ref={ref} />
// ))

// const inputRef = React.createRef()

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      value:"",
      logged:[]
    }
    // this.callRef = React.createRef();
    this.addingRefInput = this.addingRefInput.bind(this)
    // window.localStorage.setItem("shubh", JSON.stringify({hello:"world"}))
    // console.log(JSON.parse(window.localStorage.getItem("shubh")).hello)
    // window.localStorage.clear()
    
    this.callRefInput = null
    
    this.setInputRef = element =>{
      this.callRefInput = element
    }

    this.focusRefInput = () =>{
      if(this.callRefInput){
        this.callRefInput.focus()
      }
    }


  }

  componentWillMount(){
    // if(JSON.parse(localStorage.getItem("logged"))){

    // }
    // this.setLogInValue()
  }

  componentDidMount(){
    this.focusRefInput()
  }

  addingRefInput = () =>{
    this.callRef.current.focus()
  }

  // appi function call
  // setState: {}


  // setLogInValue = () => {
  //   this.setState({
  //     logged:localStorage.getItem("logged") ? JSON.parse(localStorage.getItem("logged")) : false
  //   },()=>{
  //     this.componentWillMount()
  //   })
  // }

  call = () =>{
    console.log(this.callRef.current)
    // this.callRef
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(inputRef.current.value)
  }

  render(){
    return (
      <>
        {/* {this.state.logged ? "Log in " : "Logged out"} */}
      {/* <input type="text" ref={this.setInputRef} name="hello" />
      <input type="text" ref={this.setInputRef} name="hello1" />
      <button type="button" onClick={()=>this.focusRefInput()} >Hello</button> */}
        {/* <Test click={this.setLogInValue}/> */}
        <form>
          {/* <TextInput ref={inputRef} /> */}
          <button type="button" onClick={(e)=>this.handleSubmit(e)} >Submit</button>
          </form>
      </>
      
    )
  }
}

export default App;
