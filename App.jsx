import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: "center", paddingTop: "200px" }}>
      <h1>Paradise Nursery 🌿</h1>
      <p>Your one-stop shop for beautiful houseplants</p>
      <button onClick={() => window.location.href='/plants'}>
        Get Started
      </button>
    </div>
  );
}

export default App;
