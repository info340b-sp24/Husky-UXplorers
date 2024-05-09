import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';

const firebaseConfig = {
  apiKey: "AIzaSyBXARIC1CxeowtoBkz4LgVGI0TDakFuDbw",
  authDomain: "husky-uxplorers.firebaseapp.com",
  projectId: "husky-uxplorers",
  storageBucket: "husky-uxplorers.appspot.com",
  messagingSenderId: "9456045489",
  appId: "1:9456045489:web:fd6b1e1f96da743cc88190"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);