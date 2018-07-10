import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <BurgerBuilder />
      </div>
    );
  }
}

export default App;
