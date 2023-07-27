import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css';
import LoginForm from './Components/LoginForm';
import { HomePageManager } from './Components/HomePageManager';
import {
  HomePageEmployee,
  loader as allOpenEventLoader
} from './Components/HomePageEmployee';
import { loader as allEventLoader } from './Components/HomePageManager';
import {
  EventDetail as ED,
  loader as eventDetailLoader
} from './Components/EventDetail'
import { EventDetail } from './Components/event/EventDetail';

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
    path: "/manager/event",
    loader: allEventLoader,
    element: <HomePageManager />
  },
  {
    path: "/manager/event/:eventID",
    loader: eventDetailLoader,
    element: <ED />
  },
  {
    path: "/employee/home",
    element: <HomePageEmployee />
  },
  {
    path: "/employee/event",
    loader: allOpenEventLoader,
    element: <HomePageEmployee />
  },
  {
    path: "/team-member/event",
    loader: allOpenEventLoader,
    element: <HomePageEmployee />
  },
  {
    path: "/test/event/:eventID",
    loader: eventDetailLoader,
    element: <EventDetail />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

