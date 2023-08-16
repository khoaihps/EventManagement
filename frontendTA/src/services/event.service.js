import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = 'http://localhost:4000/';


const getEventInfo = async (eventID) => {
    try {
        const role = AuthService.getCurrentUser().role;
        const response = await fetch(API_URL + `${role}` + "/event/" + eventID, {
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
      const role = AuthService.getCurrentUser().role;
        const response = await fetch(API_URL + `${role}` + "/event/all", {
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
      const role = AuthService.getCurrentUser().role;
        const response = await fetch(API_URL + `${role}` + "/event/all", {
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
const getRegisteredEmployees = async (eventID) => {
    try {
        const role = AuthService.getCurrentUser().role;
        const response = await fetch(API_URL + `${role}` + "/event/" + eventID + "/remployees", {
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
const getUnregisteredEmployees = async (eventID) => {
    try {
      const role = AuthService.getCurrentUser().role;
        const response = await fetch(API_URL + `${role}` + "/event/" + eventID + "/uremployees", {
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

const updateEvent = async (eventId, updatedEventDetails) => {
    try {
      const role = AuthService.getCurrentUser().role;
        const response = await fetch(API_URL + `${role}` + "/event/"+ eventId + "/update", {
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

const addEventRegister = async (eventId, t_member_id) => {
    try {
      const role = AuthService.getCurrentUser().role;
        const response = await fetch(API_URL + `${role}` + "/event/"+ eventId + "/eventregister/add", {
            method: 'POST', 
            headers: {
                ...authHeader(),
                'Content-Type': 'application/json' // Set the Content-Type header
            },
            body: JSON.stringify({t_member_id: t_member_id}) 
        });
        if (response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("Error: ", error);
        throw error;
    }
}

const removeEventRegister = async (eventId, t_member_id) => {
    try {
      const role = AuthService.getCurrentUser().role;
        const response = await fetch(API_URL + `${role}` + "/event/"+ eventId + "/eventregister/remove", {
            method: 'DELETE', 
            headers: {
                ...authHeader(),
                'Content-Type': 'application/json' // Set the Content-Type header
            },
            body: JSON.stringify({t_member_id: t_member_id}) 
        });
        if (response.ok){
            const data = await response.json();
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
    getRegisteredEmployees,
    getUnregisteredEmployees,
    updateEvent,
    addEventRegister,
    removeEventRegister
};

export default EventService;
