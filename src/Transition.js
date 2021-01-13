import React, {Component} from "react";
import './App.css';
import {CSSTransition} from 'react-transition-group';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
     showList: true,
     highlightedHobby:false
    }
  }
  
  switch = () =>{
    this.setState(prevState=>({
      showList: !prevState.showList
    }))
  }

  listSwitch = () => {
    this.setState(state=>({
      highlightedHobby: !state.highlightedHobby   
    }))
  }

  // submit = () => {
  //   let score = 0
  //   let tempArr = JSON.parse(JSON.stringify(this.state.quetionArray))
  //   tempArr.forEach((eachQues,index)=>{
  //     if(eachQues.multiple){
  //       let userSelectedAns = eachQues.answerArray.filter(eachAns => eachAns["userSelected"]).map(eachAns=>eachAns["label"])
  //       if(userSelectedAns && userSelectedAns.length > 0){
  //         tempArr[index]["questionAttempted"] = true
  //         console.log("userSelectedAns",userSelectedAns)
  //         console.log("eachQu", eachQues["correctAnswer"])
  //         if(JSON.stringify(userSelectedAns) === JSON.stringify(eachQues["correctAnswer"])){
  //           score += 10
  //         }
  //       }
  //     }else{
  //       let userSelectedAns = eachQues.answerArray.filter(eachAns => eachAns["userSelected"])
  //       if(userSelectedAns && userSelectedAns.length > 0){
  //         tempArr[index]["questionAttempted"] = true
  //       if(userSelectedAns[0]['label'] === eachQues["correctAnswer"]){
  //         score += 10
  //       }
  //     }
  //     else{
  //       console.log("1", index)
  //     }
  //     }
  //   })
  //   this.setState({
  //     quetionArray: tempArr,
  //     isSubmit: true
  //   })
  // }

  // selectAnswer = (quesIndex, ansIndex) => {
  //   let tempArr = JSON.parse(JSON.stringify(this.state.quetionArray))
  //   tempArr[quesIndex]["answerArray"][ansIndex]["userSelected"] = true
  //   this.setState({
  //     quetionArray:tempArr
  //   })
  // }


  render(){
    return (
      // <div style={{padding: "40px"}}>
      //     {this.state.quetionArray.map((eachQues, quesIndex)=>{
      //       return (
      //         <>
      //         <div style={{padding: "40px"}}>
      //           {eachQues.questionLabel} {eachQues.multiple ? "Multiple" : null} 
      //           {this.state.isSubmit && <>
      //             {eachQues.questionAttempted ? null : "Not Attempted"}
      //           </>}
      //           </div>
      //         {eachQues.answerArray.map((eachAns, ansIndex)=>{
      //           return (
      //             <>
      //             <input type="checkbox" checked={eachAns.userSelected} onChange={()=>this.selectAnswer(quesIndex, ansIndex)} /> {eachAns.label}
      //             </>
      //           )
      //         })}
      //         </>
      //       )
      //     })}
      //     <br/>
      //     <button type="button" onClick={()=>this.submit()}> Hello</button>
      //   </div>  
      <div className="container">
        <button className="display" onClick={this.switch}>
          Hello
          </button>
          <CSSTransition
          in={this.state.showList}
          timeout={400}
          classNames="list-transition"
          unmountOnExit
          appear
          onEntered={this.listSwitch}
          onExit={this.listSwitch}
          >
            <div className="list-body">
              <ul className="list">
                hello
                </ul>
              </div>
          </CSSTransition>
        </div>    
    )
  }
}

export default App;
