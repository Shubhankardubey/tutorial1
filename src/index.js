import React, {useCallback, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Contact';
// import About from './About';
import NotFound from './notfound';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { func } from 'prop-types';


// const routing = (
//   <BrowserRouter>
// <App/>
//   </BrowserRouter>
// )

// class ErrorBoundary extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {error:null, errorInfo:null}
//   }

//   componentDidCatch(error, errorInfo){
//     this.setState({
//       error: error,
//       errorInfo: errorInfo
//     })
//     // api call 
//   }

//   render(){
//     if(this.state.errorInfo){
//       return (
//         <div>
//           <h2> Something Went Wrong</h2>
//           <details style={{whiteSpace:"pre-wrap"}}>
//             {this.state.error && this.state.error.toString()}
//           </details>
//           <br/>
//           {this.state.errorInfo.componentStack}
//           </div>
//       )
//     }
//     return this.props.children
//   }

// }

// class BuggyCounter extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {counter:0}
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(){
//     this.setState(({counter})=>({
//       counter:counter+1
//     }))
//   }

//   render(){
//     if(this.state.counter === 5){
//       throw new Error('I am Crashed')
//     }
//     return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
//   }
// }

// function App(){
//   return (
//     <div>
//       <p> Hello there</p>
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>
//       </div>
//   )
// }

// const functionsCounter = new Set()

const Counter =  () => {
  // const [count, setCount] = useState(0)
  // const [otherCounter, setOtherCounter] = useState(0)


  // const increment = () => {
  //   setCount(count + 1)
  // }

  // const increment = useCallback(
  //   () => {
  //     setCount(count + 1)
  //   },
  //   [count],
  // )

  // const decrement = useCallback(
  //   () => {
  //     setCount(count - 1)
  //   },
  //   [count],
  // )

  // const incrementOtherCounter = useCallback(
  //   () => {
  //     setOtherCounter(otherCounter + 1)
  //   },
  //   [otherCounter],
  // )
 

  // const decrement = () => {
  //   setCount(count - 1)
  // }

  // const incrementOtherCounter = () => {
  //   setOtherCounter(otherCounter + 1)
  // }

  // functionsCounter.add(increment)
  // functionsCounter.add(decrement)
  // functionsCounter.add(incrementOtherCounter)

  // alert(functionsCounter)


  const textInput = useRef();

  function focusTestInput() {textInput.current.focus()}

  return (
    <>
    {/* Count : {count}<br/>
    <button onClick={increment}>+</button><br/>
    <button onClick={decrement}>-</button><br/>
    <button onClick={incrementOtherCounter}>incrementOtherCounter</button> */}
    <input type="text" ref={textInput}/>
    <button onClick={focusTestInput}>Focs text</button>
    </>
  )
}



ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
