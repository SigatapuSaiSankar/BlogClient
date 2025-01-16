import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Context from './components/context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Context>
        <App />
      </Context>
    </React.StrictMode>
  </Router>
);

// react tostify