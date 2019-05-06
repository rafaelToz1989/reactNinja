'use struct'

import React, { Component } from 'react'

class Plugin extends Component {
  constructor () {
    super()
  }

  handleClick () {
    console.log('clicou no botão!', this.myInput)
    this.myInput.focus()
  }

  render () {
    return (
      <div>
        <input type='text' ref={(node) => (this.myInput = node)} />
        <button onClick={(e) => this.handleClick(e)}>Focus</button>
      </div>
    )
  }
}

export default Plugin
