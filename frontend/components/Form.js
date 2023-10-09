import React from 'react'

export default class Form extends React.Component {
  // holds input field
  // add Todo button
  // hide completed button
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit} >
          <input name='todoName' type='text' onChange={this.props.onChange} value={this.props.state.name} /><br/><br/>
          <button>
            Add Todo
          </button>
        </form>
        <button id='toggle' onClick={this.props.onClick}>
          {this.props.state.hidden ? "Show Completed" : "Hide Completed"}
        </button>
      </div>
    )
  }
}
