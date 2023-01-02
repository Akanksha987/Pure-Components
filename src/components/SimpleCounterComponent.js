import React, { Component } from 'react'

export class SimpleCounterComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         toggle:false,
         value:0,
      }
    }
    handleToggle=()=>{
        this.setState({
            toggle:this.state.toggle===false?true:false
        })
    }
    increaseCounter=()=>{
        if(this.state.toggle===true){
            this.setState({
                value:this.state.value+1
            })
        }
        else{
            this.setState({
                value:this.state.value
            })
        }
    }
  render() {
    console.log("This is simple Component")
    return (
      <div>
        <h1>Simple Component</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleToggle}>Set toggle</button>
        <button onClick={this.increaseCounter}>Counter</button>
      </div>
    )
  }
}

export default SimpleCounterComponent
