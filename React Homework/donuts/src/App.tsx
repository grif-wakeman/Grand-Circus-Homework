import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import { Home } from './components/Routing/Home';
import { Donut } from './components/Routing/Donut';

function App() {

  const [donutId, setDonutId] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path={"/donut/:id"} element={<Donut />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

    </div>
  );
}

export default App;
