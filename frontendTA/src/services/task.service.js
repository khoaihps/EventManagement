const API_URL = 'http://localhost:4000/task';
const fetchAllTasks = async (eventId) => {
    try {
        const response = await fetch(`${API_URL}/${eventId}`);
        if (response.ok) {
            const data = await response.data;
            return data;
        }
    } catch (error) {
        console.error('An error occurred during login:', error);
    }
}
const TaskService = {
    fetchAllTasks
};

export default TaskService;
