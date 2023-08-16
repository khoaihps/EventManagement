import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = 'http://localhost:4000/';
const role = AuthService.getCurrentUser().role;

const getAllTaskEvent = async (eventID) => {
    try {
        const response = await fetch(API_URL + `${role}` + "/event/" + eventID + "/task", {
            method: 'GET',
            headers: authHeader(),
        });
        if (response.ok){
            const data = await response.json();
            return data.tasks;
        }
    } catch (error) {
        console.log("Error: ", error);
    }
    // return response.data;
}
const getTaskInfo = async (taskId) => {
    return axios.get(
        `${API_URL}/${taskId}`, 
        { 
            headers: authHeader()
        });
}
const updateTask = async (eventId, updatedTaskDetails) => {
    try {
        const response = await fetch(API_URL + `${role}` + "/task/"+ eventId + "/update", {
            method: 'PUT', 
            headers: {
                ...authHeader(),
                'Content-Type': 'application/json' // Set the Content-Type header
            },
            body: JSON.stringify(updatedTaskDetails) 
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
const getAssignedEmployees = async (taskId) => {
    try {
        const response = await fetch(API_URL + `${role}` + "/task/" + taskId + "/employees", {
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
const TaskService = {
    getAllTaskEvent,
    getTaskInfo,
    updateTask,
    getAssignedEmployees
};

export default TaskService;
