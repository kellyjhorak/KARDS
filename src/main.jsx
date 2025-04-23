import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import { MemoryRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <MemoryRouter initialEntries={['/']}>
    <App />
  </MemoryRouter>
);
