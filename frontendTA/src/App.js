import './Components/style/App.css';
import { LoginForm } from "./Components/LoginForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import { HomePageEmployee } from "./Components/HomePageEmployee";
import { HomePageManager } from './Components/HomePageManager';
import { EventDetail } from "./Components/event/EventDetail";
import { EmployeeList } from "./Components/EmployeeList";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/manager/home" element={<HomePageManager />} />
                <Route path="/manager/employees" element={<EmployeeList/>}/>
                <Route path="/employee/home" element={<HomePageEmployee />} />
                <Route path="/manager/home/:id" element={<EventDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
