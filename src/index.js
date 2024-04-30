import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const testing = (
  <div>
    <h1>testing</h1>
    <p>testing testing testing</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  testing
);