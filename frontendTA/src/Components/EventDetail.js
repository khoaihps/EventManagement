import { useLoaderData } from "react-router-dom";
import EventService from "../services/event.service";
import TaskService from "../services/task.service";

export const loader = async ({ params }) => {
    try {
        const details = await EventService.getEventInfo(params.eventID);
        const tasks = await TaskService.getAllTaskEvent(params.eventID);
        return {details, tasks};
    } catch (error) {
        console.log("Error: ", error);
    }
    return null;
}

export const EventDetail = () => {
    const event_detail = useLoaderData();
    console.log("HEllo ?")
    return (
    <div>
        {JSON.stringify(event_detail)}
    </div>
    );
}