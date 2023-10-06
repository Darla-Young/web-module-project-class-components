import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  // state
    // keys: name=string, id=number, completed=bool
  constructor() {
    super()
    this.state = {
      name: "",
      id: 0,
      completed: false
    }
  }
  // handler functions
    // onChange
    // onClick
    // onSubmit
  onChange = e => {
    this.setState({...this.state, name: e.target.value})
    console.log(e.target.value)
  }
  onClick = e => {
    this.setState({...this.state, completed: !this.state.completed})
    console.log(e.target)
  }
  onSubmit = e => {
    this.todoArr.push({...this.state, id: this.state.id + 1, completed: false})
    console.log(e.target)
  }
  // render components
  render() {
    return (
      <div>
        <TodoList todoArr={this.todoArr} onClick={this.onClick} data={this.state} />
        <Form onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    )
  }
}
