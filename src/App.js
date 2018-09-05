import React, { Component } from 'react';
import Header from './components/HeaderWithProps';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header showLogo />
        <p className="App-intro">
          This is a test app
        </p>
      </div>
    );
  }
}

export default App;
