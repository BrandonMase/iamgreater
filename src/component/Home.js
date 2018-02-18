import React, { Component } from 'react';

class Home extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <header className="bigHeader">
          <img className="bigLogo" src="bigLogo.png" />
          <p>I am <strong>greater</strong> than my ups and downs.</p>
        </header>    
        <div>  
        <a href="/Step1/"><button className="bigBtn">Get Help Now</button></a>
          <button className="bigBtn">Start Your Journey</button>
        </div>  
      </div>  
    )
  }
}

export default Home;