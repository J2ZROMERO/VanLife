import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes, Link   } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import './style/custom.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
    </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

