import React from 'react'

  // takes in Todo data (state)
  // toggle completed state on click
  // displays Todo to the screen

export default class Todo extends React.Component {

  // toggles which todos to display
  toggledArr = []
  render() {
    if (this.props.state.hidden){
      this.toggledArr = this.props.list.filter(i => !i.completed)
    } else {this.toggledArr = this.props.list}

    // displays desired todos
    return (
      <ul>
        {(this.toggledArr || []).map(i => {
          return (
            <li key={i.id} onClick={this.props.onClick} >
              <input type='checkbox' checked={i.completed} id={i.id} onChange={this.props.onChange} />
              {i.name}
            </li>
          )
        })}
      </ul>
    )
  }
}
