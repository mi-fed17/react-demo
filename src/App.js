/* eslint-disable no-unused-vars */
import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div>
        <Counter />
        <Counter />
        <Counter />
      </div>
    )
  }
}

export default App;
