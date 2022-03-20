import React from 'react';
import './App.css';

import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar';
import Profile from './component/profile/Profile';

function App() {
  return (
    
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;




