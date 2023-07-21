const API_URL = 'http://localhost:4000/event';

const getEventInfo = async (eventId) => {
    return axios.get(`${API_URL}/${eventId}`, { headers: authHeader() });
}
const getAllEvent = async () => {
    return axios.get(API_URL, { headers: authHeader() });
}


const EventService = {
    getEventInfo,
    getAllEvent
};

export default EventService;
