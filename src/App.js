import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Breathing from './component/Breathing';
import Header from './component/Header';
import Home from './component/Home';
import Step1 from './component/Step1';


class App extends Component {
  constructor(props) {
    super(props);
  }

  
  
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Home />
        {/* <Step1 /> */}
        {/* <Breathing /> */}
      </div>
    );
  }
}

export default App;
