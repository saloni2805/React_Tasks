import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>FrontEnd</h1>
    <ul>
      <li>React</li>
      <li>Angular</li>
      <li>Vue</li>
    </ul>
    <h1>BackEnd</h1>
    <ul>
      <li>Node</li>
      <li>Java</li>
      <li>Python</li>
    </ul>
    <h1>FullStack</h1>
    <ul>
      <li>Node</li>
      <li>MongoDB</li>
      <li>Express</li>
      <li>React</li>
    </ul>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
