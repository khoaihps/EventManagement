import axios from "axios";
import authHeader from "./auth-header";
import {authHeaderTest} from "./auth-header-test";

const API_URL = 'http://localhost:4000/';
const getAllTaskEvent = async (eventID) => {
    const response = await axios.get(API_URL + "manager/event/" + eventID + "/task", { headers: authHeaderTest() });
    return response.data;
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
