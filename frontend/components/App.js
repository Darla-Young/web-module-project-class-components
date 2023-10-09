import React from 'react'
import Todo from './Todo'
import Form from './Form'

let newId = 0

export default class App extends React.Component {
  // state
  constructor() {
    super()
    this.state = {
      todos: [{
        name: "",
        id: 0,
        completed: false
      }]
    }
  }

  // handler functions
    // onClick
  onClick = e => {
    console.log(e.target.value)
    this.setState(state => {
      const todos = state.todos.map((todo, id) => {
        if(id === e.target.id) {
          todo.completed = !todo.completed
          return todo
        } else {return todo}
      })
      return {todos}
    })
  }
  
    // onChange
  onChange = e => {
    console.log(e.target.value)
    const volatile = this.state.todos.map(i => {
      if(i.id == e.target.id){
        return ({
          ...i,
          name: e.target.value
        })
      } else {return i}
    })
    this.setState({todos: volatile})
  }
  
    // onSubmit
  onSubmit = e => {
    e.preventDefault()
    newId = Date.now()
    this.setState(state => {
      const todos = state.todos.concat({
        name: "",
        id: newId,
        completed: false
      })
      return {todos}
    })
    console.log(this.state)
  }

  // render components
  render() {
    return (
      <div>
        <Todo onClick={this.onClick} data={this.state} />
        <Form id={newId} onChange={this.onChange} onSubmit={this.onSubmit} state={this.state} />
      </div>
    )
  }
}
