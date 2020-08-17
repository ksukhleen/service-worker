import React from 'react';
import './App.css';
import q from "./images/1.jpg"
import w from "./images/2.jpg"
import e from "./images/3.jpg"
import r from "./images/4.jpg"
import t from "./images/5.jpg"

function App() {
  return (
    <div>
      <div className="w">
      <img src={q} alt="wtf"></img>
      <img src={w} alt="wtf2"></img>
      <img src={e} alt="wtf3"></img>
      <img src={r} alt="wtf4"></img>
      <img src={t} alt="wtf5"></img>


      </div>
    
    </div>
  );
}

export default App;
