import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './Components/style/index.css';
import { LoginForm, loader as checkLoginStatus } from './Components/LoginForm';
import { HomePageManager } from './Components/HomePageManager';
import {
  HomePageEmployee,
  loader as allOpenEventLoader
} from './Components/HomePageEmployee';
import { loader as allEventLoader } from './Components/HomePageManager';
import {
  EventDetail,
  loader as eventDetailLoader
} from './Components/event/EventDetail';
import Unauthorized from './Components/Unauthorized';
import Logout from './Components/Logout';
import NotFound from './Components/NotFound';
import { 
  EmployeeList,
  loader as allEmployeesLoader 
} from "./Components/EmployeeList";

const router = createBrowserRouter([
  {
    path: "/unauthorized",
    element: <Unauthorized />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/login",
    loader: checkLoginStatus,
    element: <LoginForm />
  },
  {
    path: "/manager/home",
    loader: allEventLoader,
    element: <HomePageManager />
  },
  {
    path: "/manager/employees",
    loader: allEmployeesLoader,
    element: <EmployeeList/>
  },
  {
    path: "/manager/event",
    loader: allEventLoader,
    element: <HomePageManager />
  },
  {
    path: "/manager/event/:eventID",
    loader: eventDetailLoader,
    element: <EventDetail />
  },
  {
    path: "/employee/event/:eventID",
    loader: eventDetailLoader,
    element: <EventDetail />
  },
  {
    path: "/employee/home",
    loader: allOpenEventLoader,
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
  {
    path: "/:path",
    element: <NotFound />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

