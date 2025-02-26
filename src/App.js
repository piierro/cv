import React from 'react';
import './App.css';

import SideBar from './components/sidebar/SideBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Stack from './components/stack/Stack';

function App() {
  return (
    <>
      <SideBar />
      <main className='main'>
        <Home />
        <About />
        <Stack />
      </main>
    </>
  );
}

export default App;
