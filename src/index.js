import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes, Link   } from 'react-router-dom';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import './style/custom.scss';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';

const router = createBrowserRouter([
  {
  path: "/",
  element: <NavBar />,
  children: [
    {
      path: "/",
      element: <Home />, 
        
    },
    {
      path: "/about",
      element: <About />, 
        
    }]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    

    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

