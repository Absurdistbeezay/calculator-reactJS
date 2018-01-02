import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <h2>Calculator</h2>
        <div className="display">123456789</div>
        <div className="buttons">
          <div className="first-row">
            <button className="red" value="ac">AC</button>
            <button className="red" value="c">C</button>
            <button value="/">&divide;</button>
            <button value="x">x</button>
          </div>
          <div className="second-row">
            <button value="7">7</button>
            <button value="8">8</button>
            <button value="9">9</button>
            <button value="-">-</button>
          </div>
          <div className="third-row">
            <button value="4">4</button>
            <button value="5">5</button>
            <button value="6">6</button>
            <button value="+">+</button>
          </div>
          <div className="fourth-row">
            <button value="1">1</button>
            <button value="2">2</button>
            <button value="3">3</button>
            <button id = "equal" value="=">=</button>
          </div>
          <div className="fifth-row">
            <button id="zero" value="1">0</button>
            <button value="2">.</button>
            
          </div>
        </div>


      </div>
    );
  }
}

export default Calculator;