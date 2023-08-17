import {useLoaderData, useParams} from "react-router-dom";
import Header from "../environment/Header";
import SidebarEmployee from "../environment/SidebarEmployee";
import '../style/eventDetail.css'
import EventService from "../../services/event.service";
import TaskService from "../../services/task.service";
import EventInfoEmployee from "./EventInfoEmployee";

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

export const EventDetailEmployee = () => {
    const eventInfo = useLoaderData();

    return (
        <div>
            <Header
                title={"Event Detail"}
            />
            <SidebarEmployee />
            <EventInfoEmployee
                initialEvent={eventInfo.details}
                initialTasks={eventInfo.tasks}
                initialEmployees={eventInfo.employees}
                initialUnregisteredEmployees={eventInfo.unregisteredEmployees}
            />
        </div>
    );
};