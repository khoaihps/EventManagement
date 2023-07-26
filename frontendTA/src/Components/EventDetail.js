import { useLoaderData } from "react-router-dom";
import EventService from "../services/event.service";

export const loader = async ({ params }) => {
    try {
        return await EventService.getEventInfo(params.eventID);
    } catch (error) {
        console.log("Error: ", error);
    }
    return null;
}

export const EventDetail = () => {
    const event_detail = useLoaderData();

    return (
    <div>
        {JSON.stringify(event_detail)}
    </div>
    );
}