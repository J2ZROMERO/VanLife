import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/Vans";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";
import "./style/custom.scss";
import NavBar from "./components/NavBar";
import './server'
import Vans from "./pages/Vans";
import VansDetails from "./pages/VansDetails";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
