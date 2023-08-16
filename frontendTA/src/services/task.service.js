import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:4000/';
const getAllTaskEvent = async (eventID) => {
    const response = await axios.get(API_URL + "manager/event/" + eventID + "/task", { headers: authHeader() });
    return response.data;
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
        console.log(updatedTaskDetails);
        const response = await fetch(API_URL + "manager/task/"+ eventId + "/update", {
            method: 'PUT', 
            headers: {
                ...authHeader(),
                'Content-Type': 'application/json' // Set the Content-Type header
            },
            body: JSON.stringify(updatedTaskDetails) 
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
const TaskService = {
    getAllTaskEvent,
    getTaskInfo,
    updateTask
};

export default TaskService;
