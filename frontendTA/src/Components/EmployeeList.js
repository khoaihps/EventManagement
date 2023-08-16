import React from 'react';
import Sidebar from "../Components/environment/Sidebar";
import Header from "../Components/environment/Header";
import { redirect } from 'react-router-dom';
import EventService from '../services/event.service';
import AuthService from '../services/auth.service';
import Table from "../Components/employeeTable/Table"
import employeesData from "./database/employeesData";

export const loader = async () => {
    const user = AuthService.getCurrentUser();
    if (!user || user.role != 'manager') {
        return redirect('/unauthorized');
    }
    try {
        return await EventService.getAllEvent();
    } catch (error) {
        console.log("Error: ", error);
    }
}
export const EmployeeList = () => {
    return (
        <div>
            <Header title={"Employees"} />
            <Sidebar/>
            <Table employees={employeesData}/>
        </div>
    );
};
