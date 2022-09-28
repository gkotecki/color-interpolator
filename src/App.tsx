import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './components/Button';
import './index.css';
import { Home } from './views/Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
);
