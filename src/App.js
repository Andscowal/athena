import React, { Component } from 'react';
import Quiz from './Quiz';
import Randomizer from './Randomizer';

class App extends Component {
  render() {
    return (
      <div>
          <Quiz />
          <Randomizer />
      </div>
    );
  }
}

export default App;
