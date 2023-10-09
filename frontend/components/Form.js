import React from 'react'

export default class Form extends React.Component {
  // holds input field
  // add Todo button
    // accepts "enter" or click to submit
  // hide completed button
  render() {
    return (
      <form onSubmit={this.props.onSubmit} >
        <label> What needs done today? <br/>
          <input id={this.props.id} name='todoName' type='text' onChange={this.props.onChange} value={this.props.state.todos.find(i => i.id === this.props.id).name} />
        </label><br/><br/>
        <button>
          Add Todo
        </button>
        <button style={{display: "none"}} >
          Hide Completed
        </button>
      </form>
    )
  }
}
