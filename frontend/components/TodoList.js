import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  // receives Todo array
  // creates Todo to add to array
  // rerenders on submit
  render() {
    return (
      <div>
        <Todo />
      </div>
    )
  }
}
