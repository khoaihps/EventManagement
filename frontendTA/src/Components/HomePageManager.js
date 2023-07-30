import React from 'react';
import Sidebar from "./Sidebar";
import Table from "./table/Table";
import Header from "./Header";
import { useLoaderData } from 'react-router-dom';
import EventService from '../services/event.service';

export const loader = async () => {
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

