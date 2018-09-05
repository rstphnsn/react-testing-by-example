import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  renderLogo(showLogo =  false) {
    if (showLogo) {
      return (
        <img src={logo} className="App-logo" alt="logo" />
      )
    }
    return null;
  }

  render() {
    return (
      <header className="App-header">
          {this.renderLogo(this.props.showLogo)}
          <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

export default Header
