import React, { Component } from 'react'

import SearchContainer from './SearchContainer'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='header'>
        <h1>React TV Browser</h1>
        <SearchContainer />
      </div>
    )
  }
}

export default App;