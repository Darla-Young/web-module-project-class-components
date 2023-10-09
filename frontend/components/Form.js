import React from 'react'

export default class Form extends React.Component {
  // holds input field
  // add Todo button
    // accepts "enter" or click to submit
  // hide completed button
  render() {
    return (
      <form>
        <label> What needs done today? <br/>
          <input type='text' />
        </label><br/><br/>
        <button>
          Add Todo
        </button>
        <button>
          Hide Completed
        </button>
      </form>
    )
  }
}
