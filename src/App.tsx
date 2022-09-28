import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './components/shared/Button';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1> Color Interpolator </h1>
    <Button>button</Button>
  </React.StrictMode>,
);
