import React, { useEffect, useState } from 'react';

import logo from './home.svg';
import './App.css';

function App() {

  let [ n , setN ] = useState(69.420);

  const handleChange = (e) => {
    e.preventDefault();
    let value = document.getElementById('floorceiling').value;
    setN(value);  
  }

  let ceiling = Math.ceil(n);
  let floor = Math.floor(n);
  let round = Math.floor(n);

  let decimalLength = 4;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Floor, Ceiling, and Round</h1>
        <a href='https://julio-react-portfolio.vercel.app/'>
          <img 
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </a>
        <input 
          placeholder="-> Click Home Icon <-"
          type='float'
          onChange={(e) => handleChange(e)}
          className='floorceiling'
          name='floorceiling'
          id='floorceiling'
        />
      <div className = 'flex-container'>
        <div>
          <p>Original = {n ? n : 0}</p>
        </div>
        <div>
          <p>Floor = {floor}</p>
          <p>Original - Floor = {(n - floor).toFixed(decimalLength)}</p>
        </div>
        <div>
          <p>Ceiling = {ceiling}</p>
          <p>Original - Ceiling = {(n - ceiling).toFixed(decimalLength)}</p>
        </div>
        <div>
          <p>Rounded = {round}</p>
          <p>Original - Round = {(n - round).toFixed(decimalLength)}</p>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
