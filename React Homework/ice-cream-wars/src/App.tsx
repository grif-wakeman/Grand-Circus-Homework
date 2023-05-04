import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { AdDesigner } from './components/AdDesigner/AdDesigner';
import { Vote } from './components/Vote/Vote';
import { Ad } from './components/Ad/Ad';

function App() {
  return (
    <div className='IceCreamWars'>
      <Header name="Grif" />
      <div className='adBoards'>
        <Ad flavor="Oreo Smash" fontSize={45} darkTheme={true} />
        <Ad flavor="Cherry Garcia" fontSize={30} darkTheme={false} />
        <Ad flavor="Superman" fontSize={30} darkTheme={true} />
      </div>
      <div className='mainContent'>
        <AdDesigner />
        <Vote />
      </div>
    </div>
  );
}

export default App;
