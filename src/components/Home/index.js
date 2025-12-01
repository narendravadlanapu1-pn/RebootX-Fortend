import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="home-section">
        <div className="container text-center">

          <h1 className="home-title">
            Restart Your Career with <span>RebootX</span>
          </h1>

          <p className="home-subtitle">
            AI-powered job portal & career tools to help you grow faster.
          </p>

          <button className="btn home-btn">
            Get Started
          </button>

        </div>
      </div>
    );
  }
}

export default Home;
