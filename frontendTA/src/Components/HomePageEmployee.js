import React from 'react';
import Table from "./table/Table";
import Header from "../Components/environment/Header";
import { redirect, useLoaderData } from 'react-router-dom';
import EventService from '../services/event.service';
import AuthService from '../services/auth.service';
import SidebarEmployee from "./environment/SidebarEmployee";
import EmployeeTable from "./table/EmployeeTable";

export const loader = async () => {
    const user = AuthService.getCurrentUser();
    if (!user || user.role != 'employee') {
        return redirect('/unauthorized');
    }
    try {
        return await EventService.getAllOpenEvent();
    } catch (error) {
        console.log("Error: ", error);
    }
}
export const HomePageEmployee = () => {
    const allEvent = useLoaderData();
    return (
        <div>
            <Header title={"Events"} />
            <SidebarEmployee/>
            <EmployeeTable events={allEvent}/>
        </div>
    );
};
