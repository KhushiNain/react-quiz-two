import React, { Component } from 'react';
import "../App.css";
import Questions from "../resources/quizQuestion.json"

export default class Quiz extends Component {
    
    constructor(){
        super()
        this.state={
            index:0
        }
    }
    handleBack=()=>{
        if(this.state.index!=0){
            this.setState({
                index:this.state.index-1
            })
        }
    }
    handleNext=()=>{
        if(this.state.index!=14){
            this.setState({
                index: this.state.index+1
            })
        }
    }
    handleAnswer=()=>{
        if(this.state.index!=14){
            this.setState({
                index: this.state.index+1
            })
        }
    }
    handleQuit=()=>{
    alert("Are you sure you want to Quit")
    console.log("Quited")
    }
  render() {
    return (
      <div className='flex just-center align-center body'>
        <div className='container flex just-center align-center'>
            <h1 style={{paddingBlock:"10px"}}>Question</h1>
            <p style={{position:"relative",right:"600px"}}>{this.state.index +1} of {Questions.length}</p>
            <p style={{paddingBlock:"30px"}}>{Questions[this.state.index].question}</p>
            <div className="options flex just-center align-center">
                <div className='option' onClick={this.handleAnswer}>{Questions[this.state.index].optionA}</div>
                <div className="option" onClick={this.handleAnswer}>{Questions[this.state.index].optionB}</div>
                <div className="option" onClick={this.handleAnswer}>{Questions[this.state.index].optionC}</div>
                <div className="option" onClick={this.handleAnswer}>{Questions[this.state.index].optionD}</div>
            </div>
            <div className="buttons ">
                <button style={{backgroundColor:"blue"}} onClick={this.handleBack}>Previous</button>
                <button style={{backgroundColor:"green"}} onClick={this.handleNext}>Next</button>
                <button style={{backgroundColor:"red"}} onClick={this.handleQuit}>Quit</button>
            </div>


        </div>

      </div>
    )
  }
}
