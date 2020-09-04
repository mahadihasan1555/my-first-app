import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const [actor, setActor] = useState([])

  //Load data from API
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res =>  res.json())
    .then(data => setActor(data))
  }, [])

   const actorName = ["mahadi", "mahdi hasan", "hasan mahadi", "jahid hasan"]
  return (
    <div className="App">

      <MovieCounter></MovieCounter>
     
      {
    actorName.map(actorN => <Actor name = {actorN}></Actor>)
      
      /* <Actor name = {actorName[0]}></Actor>
      <Actor name = "nahid"></Actor>
      <Actor name = {actorName[2]}></Actor>
      <Actor name = "sahid"></Actor> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

//destructure usestate, 
function MovieCounter(){

//Event handler state update
  const [count, setCount] = useState(0);
  
  const handleClick = () =>setCount(count + 1) ;
  return(
    <div>
      <button onClick = {handleClick}>Add Movie</button>
     <h3>Number of movies: {count} </h3>
     <MovieDisplay movies = {count}></MovieDisplay>
     <MovieDisplay movies = {count + 10}></MovieDisplay>
     <MovieDisplay movies = {count + 100}></MovieDisplay>
     <MovieDisplay movies = {count}></MovieDisplay>
    </div>
  )
}

//pass state Recap
function MovieDisplay (props){
  return (
    <div>
      <h4>Movies I have acted: {props.movies}</h4>
    </div>
  )
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
