import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = 'http://localhost:4000/';

const getAllTaskEvent = async (eventID) => {
    try {
        const role = AuthService.getCurrentUser().role;
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
    const role = AuthService.getCurrentUser().role;
    return axios.get(
        `${API_URL}/${taskId}`, 
        { 
            headers: authHeader()
        });
}
const updateTask = async (eventId, updatedTaskDetails) => {
    try {
        const role = AuthService.getCurrentUser().role;
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
const getAssignedEmployees = async (taskId, eventId) => {
    try {
        const role = AuthService.getCurrentUser().role;
        const response1 = await fetch(API_URL + `${role}` + "/task/" + taskId + "/employees", {
            method: 'GET',
            headers: authHeader(),
        });

        const response2 = await fetch(API_URL + `${role}` + "/event/" + eventId + "/remployees", {
            method: 'GET',
            headers: authHeader(),
        });
        if (response1.ok && response2.ok) {
            const data1 = await response1.json();
            const data2 = await response2.json();
            
            const employeeIdsFromResponse1 = data1.map(employee => employee._id);

            // Filter the second response to get elements not present in data1
            const unAssignedEmployees = data2.filter(employee => !employeeIdsFromResponse1.includes(employee._id));

            console.log(data1);
            console.log(unAssignedEmployees);
            return {assignEmployees: data1 , unAssignedEmployees };
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
