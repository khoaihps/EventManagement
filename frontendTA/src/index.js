import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css';
import App from './App';
import LoginForm from './Components/LoginForm';
import {HomePageManager} from './Components/HomePageManager';
import HomePageEmployee from './Components/HomePageEmployee';
import { loader as allEventLoader } from './Components/HomePageManager';
import {EventDetail, loader as eventDetailLoader} from './Components/EventDetail'
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/manager/home",
    loader: allEventLoader,
    element: <HomePageManager />
  },
  {
    path: "/employee/home",
    element: <HomePageEmployee />
  },
  {
    path: "/employee/event",
    element: <HomePageEmployee />
  },
  {
    path: "/manager/event/:eventID",
    loader: eventDetailLoader,
    element: <EventDetail />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

