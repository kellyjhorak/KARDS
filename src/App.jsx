import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Den from './components/Den';
import Shop from './components/Shop';
import Popup from './components/Popup';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Popup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/den" element={<Den />} />
      </Routes>
  );
}

export default App;
