
import React from 'react';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const handleGetStarted = () => {
    window.location.href = '#plants';
  };

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery!
        Discover beautiful houseplants and bring
        nature into your home.
      </p>

      <button
        className="get-started-btn"
        onClick={handleGetStarted}
      >
        Get Started
      </button>

      <section>
        <AboutUs />
      </section>
    </div>
  );
}

export default App;
