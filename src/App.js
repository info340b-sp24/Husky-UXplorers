import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App(props) {
  return (
    <Routes>
      <Route path = "" element = {<Main />}/>
    </Routes>
  );
}

function Main(props) {
  const testing = (
    <div>
      <h1>This is our website</h1>
      <p>helo helo</p>
    </div>
  );
  return testing;
}