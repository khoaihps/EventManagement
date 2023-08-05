import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:4000/';
const getAllTaskEvent = async (eventID) => {
    // const response = await axios.get(API_URL + "manager/event/" + eventID + "/task", { headers: authHeader() });
    try {
        const response = await fetch(API_URL + "manager/event/" + eventID + "/task", {
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
const TaskService = {
    getAllTaskEvent,
    getTaskInfo
};

export default TaskService;
