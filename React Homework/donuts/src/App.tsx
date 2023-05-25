import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Routing/Home';
import { Donut } from './components/Routing/Donut';

function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/donut/:id"} element={<Donut />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </div>
  );
}

export default App;
