import authHeader from "./auth-header";

const API_URL = 'http://localhost:4000/task';
const fetchAllTasks = async (eventId) => {
    return axios.get(API_URL, { headers: authHeader() });
}
const getTaskInfo = async (taskId) => {
    return axios.get(
        `${API_URL}/${taskId}`, 
        { 
            headers: authHeader(),
            params: { eventId }
        });
}
const TaskService = {
    fetchAllTasks,
    getTaskInfo
};

export default TaskService;
