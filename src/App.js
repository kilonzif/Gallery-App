import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Gallery from './components/Gallery';
import Album from './components/Album';

import Navbar from './components/Navbar';

import '../src/App.css';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/signin" element={ <SignIn /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/album/:id" element={ <Album />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
