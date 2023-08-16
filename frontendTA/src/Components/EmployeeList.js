import React from 'react';
import Sidebar from "../Components/environment/Sidebar";
import Header from "../Components/environment/Header";
import { redirect, useLoaderData } from 'react-router-dom';
import EventService from '../services/event.service';
import AuthService from '../services/auth.service';
import Table from "../Components/employeeTable/Table"
import employeesData from "./database/employeesData";
import ProfileService from '../services/profile.service';

export const loader = async () => {
    const user = AuthService.getCurrentUser();
    if (!user || user.role != 'manager') {
        return redirect('/unauthorized');
    }
    try {
        return await ProfileService.getAllEmployees(user.id);
    } catch (error) {
        console.log("Error: ", error);
    }
}
export const EmployeeList = () => {
    const employeesList = useLoaderData();
    return (
        <div>
            <Header title={"Employees"} />
            <Sidebar/>
            <Table employees={employeesList}/>
        </div>
    );
};
