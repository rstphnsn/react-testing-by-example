import React, { Component } from 'react'
import Header from './components/HeaderWithProps'
import Button from './components/Button'

import './App.css'

class App extends Component {
  clickHandler = (e) => {
    console.log('Clicked something', e)
  }

  render() {
    return (
      <div className="App">
        <Header showLogo />
        <p className="App-intro">
          This is a test app
        </p>
        <Button onClick={this.clickHandler}>
          Click me
        </Button>
      </div>
    )
  }
}

export default App
