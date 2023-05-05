import React from 'react';
import './App.css';
import { ArraysEx } from './Components/ArraysEx/ArraysEx';
import { Typing } from './Components/Typing/Typing';
import { Shapes } from './Components/Shapes/Shapes';

function App() {
  return (
    <div className="ColorsAndPets">
      <ArraysEx />
      <Typing />
      <Shapes />
    </div>
  );
}

export default App;
