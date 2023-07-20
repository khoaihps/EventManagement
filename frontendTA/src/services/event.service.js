const API_URL = 'http://localhost:4000/event';

const getEventInfo = async (eventId) => {
    try {
        const response = await fetch(`${API_URL}/${eventId}`);
        if (response.ok) {
            const data = await response.data;
            return data;
        }
    } catch (error) {
        console.error('An error occurred during fetch event data:', error);
    }
}


const EventService = {
    getEventInfo
};

export default EventService;
