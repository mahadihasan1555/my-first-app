import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <Actor></Actor>
      <Actor></Actor>
      <Actor></Actor>
      <Actor></Actor>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

//components
function Actor(){
  const actorStyle = {
    border: '.1rem solid red',
    margin: '10px 150px'

  }
  return <div style = {actorStyle}>
    <h1>I am boss</h1>
    <h3>I have done my WOrk</h3>
  </div>
}

export default App;
