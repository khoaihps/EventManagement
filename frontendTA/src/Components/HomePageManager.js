import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Sidebar from "./Sidebar";
import EventService from '../services/event.service'
import Table from './table/Table';

export const loader = async () => {
    try {
        return await EventService.getAllEvent();
    } catch (error) {
        console.log("Error: ", error);
    }
}
export const HomePageManager = () => {
    const allEvent = useLoaderData();
    console.log(allEvent);
    return (
        <div>
            <Sidebar/>
            <Table events={allEvent}/>
        </div>
    );
};

