import axios from "axios";
import authHeader from "./auth-header";
import {authHeaderTest, authHeaderTestTeamMember} from "./auth-header-test"

const API_URL = 'http://localhost:4000/';

const getEventInfo = async (eventID) => {
    try {
        const response = await fetch(API_URL + "manager/event/" + eventID, {
            method: 'GET',
            headers: authHeaderTest(),
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
            headers: authHeaderTestTeamMember(),
        });
        if (response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}

const EventService = {
    getEventInfo,
    getAllEvent,
    getAllOpenEvent
};

export default EventService;
