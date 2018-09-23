// Code SimpleComponent Here
import React, {Component} from 'react'

class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  }

  changeMood = () => {
    let newMood = this.state.mood === "happy" ? "sad" : "happy"
    this.setState({
      mood: newMood
    })
  }

  render(){
    return(
      <div>
        <div>{this.state.mood}</div>
        <button
          onClick={this.changeMood}
          >
          Change Mood
        </button>
      </div>

    )
  }
}

export default SimpleComponent
