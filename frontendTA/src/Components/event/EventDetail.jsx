import {useLoaderData, useParams} from "react-router-dom";
import Header from "../environment/Header";
import Sidebar from "../environment/Sidebar"
import EventInfo from "./EventInfo";
import '../style/eventDetail.css'
import EventService from "../../services/event.service";
import TaskService from "../../services/task.service";

export const loader = async ({ params }) => {
    try {
        const details = await EventService.getEventInfo(params.eventID);
        const tasks = await TaskService.getAllTaskEvent(params.eventID);
        const employees = await EventService.getRegisteredEmployees(params.eventID);
        const unregisteredEmployees = await EventService.getUnregisteredEmployees(params.eventID);
        return {details, tasks, employees, unregisteredEmployees};
    } catch (error) {
        console.log("Error: ", error);
    }
    return null;
}

export const EventDetail = ({ }) => {
    const eventInfo = useLoaderData();

    return (
        <div>
            <Header
                title={"Event Detail"}
            />
            <Sidebar />
            <EventInfo
                initialEvent={eventInfo.details}
                initialTasks={eventInfo.tasks}
                initialEmployees={eventInfo.employees}
                initialUnregisteredEmployees={eventInfo.unregisteredEmployees}
            />
        </div>
    );
};