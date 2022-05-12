import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Off from './components/Off'
import './blocks/App.scss'
// import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Off />
  </React.StrictMode>
);
