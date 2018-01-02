import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Calculator/>
      <div className="coder">Designed & Coded by Vijay</div>
      </div>
    );
  }
}

export default App;
