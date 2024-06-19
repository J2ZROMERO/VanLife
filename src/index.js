import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/Vans";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";
import "./style/custom.scss";
import Header from "./components/Nav/Header";
import "./server";
import Vans, { loader as vansLoader } from "./components/Vans/VansHome";
import VansDetails from "./components/Vans/VansDetails";
import Dashboard from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import Reviews from "./components/Host/Reviews";
import HeaderHost from "./components/Nav/HeaderHost";
import HomeLay from "./components/Layout/HomeLay";
import HostVans from "./components/Vans/HostVans";
import HostVansDetails from "./components/Vans/HostVansDetails";
import HostSelectedVans from "./components/Vans/HostSelectedVans";
import HostSelectedPricing from "./components/Vans/HostSelectedPricing";
import HostSelectedPhotos from "./components/Vans/HostSelectedPhotos";
import ErrorElem from "./Error/ErrorElem";
import homePage from "./components/Loaders/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<HomeLay />}>
      {/* <Route path="*" element={<ErrorElem />} /> */}
      <Route index element={<Home />} />
      <Route
        path="/vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<ErrorElem />}
      />
      <Route path="/vans/:id" element={<VansDetails />} />

      <Route
        path="host"
        element={<HeaderHost />}
        loader={async () => {
          return null;
        }}
      >
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="dashboard"
          element={<Dashboard />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={async () => {
            return null;
          }}
        />

        <Route
          path="vans/:id"
          element={<HostVansDetails />}
          loader={async () => {
            return null;
          }}
        >
          <Route
            index
            element={<HostSelectedVans />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="details"
            element={<HostSelectedVans />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<HostSelectedPricing />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="photos"
            element={<HostSelectedPhotos />}
            loader={async () => {
              return null;
            }}
          />
        </Route>

        <Route path="review" element={<Reviews />} />
      </Route>
    </Route>,
  ])
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
