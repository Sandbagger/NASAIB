import React, { Component } from 'react';
import './App.css';
import FetchNASA from './components/FetchNASA';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
       <FetchNASA/>
      </div>
    );
  }
}

export default App;
