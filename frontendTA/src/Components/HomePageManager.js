import React from 'react';
import Sidebar from "../Components/environment/Sidebar";
import Table from "./table/Table";
import Header from "../Components/environment/Header";
import { redirect, useLoaderData } from 'react-router-dom';
import EventService from '../services/event.service';
import AuthService from '../services/auth.service';

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
export const HomePageManager = () => {
    const allEvent = useLoaderData();
    return (
        <div>
            <Header title={"Events"} />
            <Sidebar/>
            <Table events={allEvent}/>
        </div>
    );
};
