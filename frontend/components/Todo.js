import React from 'react'

export default class Todo extends React.Component {
  // takes in Todo data (state)
  // toggle completed state on click
  // displays Todo to the screen
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
