import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <h1>Hello</h1>
    <App />
  </React.StrictMode>
);