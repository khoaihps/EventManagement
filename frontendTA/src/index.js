import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css';
import App from './App';
import LoginForm from './Components/LoginForm';
import HomePageManager from './Components/HomePageManager';
import HomePageEmployee from './Components/HomePageEmployee';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/manager/home",
    element: <HomePageManager />
  },
  {
    path: "/employee/home",
    element: <HomePageEmployee />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

