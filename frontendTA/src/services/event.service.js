import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:4000/';

const getEventInfo = async (eventID) => {
    try {
        const response = await fetch(API_URL + "manager/event/" + eventID, {
            method: 'GET',
            headers: authHeader(),
        });
        if (response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}
const getAllEvent = async () => {
    try {
        const response = await fetch(API_URL + "manager/event/all", {
            method: 'GET',
            headers: authHeader(),
        });
        if (response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}
const getAllOpenEvent = async () => {
    try {
        const response = await fetch(API_URL + "team-member/event/all", {
            method: 'GET',
            headers: authHeader(),
        });
        if (response.ok){
            const data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}
const getEmployees = async (eventID) => {
    try {
        const response = await fetch(API_URL + "manager/event/" + eventID + "/remployees", {
            method: 'GET',
            headers: authHeader(),
        });
        if (response.ok){
            const data = await response.json();
            return data.employees;
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}

const updateEvent = async (eventId, updatedEventDetails) => {
    try {
        console.log(updatedEventDetails);
        const response = await fetch(API_URL + "manager/event/"+ eventId + "/update", {
            method: 'PUT', 
            headers: {
                ...authHeader(),
                'Content-Type': 'application/json' // Set the Content-Type header
            },
            body: JSON.stringify(updatedEventDetails) 
        });
        if (response.ok){
            const data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        console.log("Error: ", error);
        throw error;
    }
}

const EventService = {
    getEventInfo,
    getAllEvent,
    getAllOpenEvent,
    getEmployees,
    updateEvent
};

export default EventService;
