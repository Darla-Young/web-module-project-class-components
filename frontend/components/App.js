import React from 'react'
import Todo from './Todo'
import Form from './Form'

export default class App extends React.Component {
  // state
  constructor() {
    super()
    this.state = {
      name: "",
      id: Date.now(),
      completed: false,
      hidden: false,
    }
  }
  todoArr = []
    
  // handler functions
    // onClick
  onClick = e => {
    e.target.id === "toggle" ?
    this.setState({...this.state, hidden: !this.state.hidden}) :
    console.log(this.todoArr)
    this.todoArr.map(i => {
      if(i.id == e.target.id){
        console.log(i.completed)
        return {
          ...i,
          completed: !i.completed
        }
      } else {return i}
    })
  }
  
    // onChange
  onChange = e => {
    this.setState({...this.state, name: e.target.value})
  }
  
    // onSubmit
  onSubmit = e => {
    e.preventDefault()
    this.todoArr.push(this.state)
    this.setState({
      name: "",
      id: Date.now(),
      completed: false,
      hidden: false
    })
  }

  // render components
  render() {
    return (
      <div>
        <Todo onClick={this.onClick} list={this.todoArr} state={this.state} />
        <Form onChange={this.onChange} onSubmit={this.onSubmit} state={this.state} onClick={this.onClick} />
      </div>
    )
  }
}
