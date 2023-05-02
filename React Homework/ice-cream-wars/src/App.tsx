import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { AdDesigner } from './components/AdDesigner/AdDesigner';
import { Vote } from './components/Vote/Vote';

function App() {
  return (
    <div className='IceCreamWars'>
      <Header />
      <div className='mainContent'>
        <AdDesigner />
        <Vote />
      </div>
    </div>
  );
}

export default App;
