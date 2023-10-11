import React from 'react'

  // holds input field
  // add Todo button
  // hide completed button

export default class Form extends React.Component {

  render() {
    // displays hide completed button only after first todo has been submitted
    let button = ""
    if(this.props.list.length > 0){
      button = 
        <button id='toggle' onClick={this.props.onClick}>
          {this.props.state.hidden ? "Show Completed" : "Hide Completed"}
        </button>
    }

    return (
      <div>
        <form onSubmit={this.props.onSubmit} >
          <input name='todoName' type='text' onChange={this.props.onChange} value={this.props.state.name} /><br/><br/>
          <button>
            Add Todo
          </button>
        </form>
        {button}
      </div>
    )
  }
}
