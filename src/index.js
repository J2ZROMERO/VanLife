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
  redirect,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";
import "./style/custom.scss";
import Header from "./components/Nav/Header";
import "./server";
import Vans, { loader as vansLoader } from "./components/Vans/VansHome";
import VansDetails, {
  loader as detailsLoader,
} from "./components/Vans/VansDetails";
import Dashboard from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import Reviews from "./components/Host/Reviews";
import HeaderHost from "./components/Nav/HeaderHost";
import HomeLay from "./components/Layout/HomeLay";
import HostVans, { loader as hostVans } from "./components/Host/HostVans";
import HostVansDetails, {
  loader as hostDetailsLoader,
} from "./components/Host/HostVansDetails";
import HostSelectedVans from "./components/Host/HostSelectedVans";
import HostSelectedPricing from "./components/Host/HostSelectedPricing";
import HostSelectedPhotos from "./components/Host/HostSelectedPhotos";
import ErrorElem from "./Error/ErrorElem";
import homePage from "./components/Loaders/Loader";
import { requireAuth } from "./utils/Utils";
import Login, { loader as loaderMessage } from "./components/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<HomeLay />}>
      {/* <Route path="*" element={<ErrorElem />} /> */}
      <Route index element={<Home />} />

      <Route path="login" element={<Login />} loader={loaderMessage} />

      <Route
        path="/vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<ErrorElem />}
      />
      <Route
        path="/vans/:id"
        element={<VansDetails />}
        loader={detailsLoader}
      />

      <Route path="host" element={<HeaderHost />}>
        <Route index element={<HostVans />} loader={hostVans} />
        <Route
          path="dashboard"
          element={<Dashboard />}
          loader={async () => {
            const res = await requireAuth();
            return res;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            const res = await requireAuth();
            return res;
          }}
        />
        <Route path="vans" element={<HostVans />} loader={hostVans} />

        <Route
          path="vans/:id"
          element={<HostVansDetails />}
          loader={hostDetailsLoader}
        >
          <Route
            index
            element={<HostSelectedVans />}
            loader={async () => {
              const res = await requireAuth();
              return res;
            }}
          />
          <Route
            path="details"
            element={<HostSelectedVans />}
            loader={async () => {
              const res = await requireAuth();
              return res;
            }}
          />
          <Route
            path="pricing"
            element={<HostSelectedPricing />}
            loader={async () => {
              const res = await requireAuth();
              return res;
            }}
          />
          <Route
            path="photos"
            element={<HostSelectedPhotos />}
            loader={async () => {
              const res = await requireAuth();
              return res;
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
