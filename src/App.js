import React, { Component } from 'react';
import './App.css';
import FetchNASA from './components/FetchNASA'

class App extends Component {
  render() {
    return (
      <div className="App">
       <FetchNASA/>
      </div>
    );
  }
}

export default App;
