import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const actorName = ["mahadi", "mahdi hasan", "hasan mahadi", "jahid hasan"]
  return (
    <div className="App">
     
      <Actor name = {actorName[0]}></Actor>
      <Actor name = "nahid"></Actor>
      <Actor name = {actorName[2]}></Actor>
      <Actor name = "sahid"></Actor>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

//components and pass data(props)
function Actor(props){
  console.log(props.name)
  const actorStyle = {
    border: '.1rem solid red',
    margin: '10px 150px'

  }
  return (
    <div style = {actorStyle}>
      <h1>I am boss- {props.name}</h1>
      <h3>I have done my WOrk</h3>
   </div>
  )
}

export default App;
