import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './views/home/Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
