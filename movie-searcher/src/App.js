import React, { Component } from 'react';
import NavBar from './nav-bar';
import ContentRenderer from './content-renderer';
import './App.css';

class App extends Component {
  render() {
    return (<div className="container">
        <NavBar />
        <ContentRenderer />
      </div>);
  }
}

export default App;
