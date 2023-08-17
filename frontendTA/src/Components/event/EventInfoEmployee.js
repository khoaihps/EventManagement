import EventTable from "./EventTable";
import Tasks from "./task/Tasks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Employees from "../event/employee/Employees";
import tasksData from "../database/tasksData";
import employeesData from "../database/employeesData";
import registeredEmployeesData from "../database/registeredEmployeesData";
import EventService from "../../services/event.service";
import TaskService from "../../services/task.service";
import authHeader from "../../services/auth-header";
import AuthService from "../../services/auth.service";

const EventInfo = ({initialEvent, initialTasks, initialEmployees, initialUnregisteredEmployees}) => {
    const navigate = useNavigate();
    const [enroll, setEnroll] = useState(false);
    // api call specific event

    // api call specific tasks associated with the event
    // const initialTasks = tasksData;
    // api call specific employees associated with the event
    // const initialRegisteredEmployees = registeredEmployeesData;


    const [event, setEvent] = useState(initialEvent);
    const [passEvent, setPassEvent] = useState(initialEvent);

    const [tasks, setTasks] = useState(initialTasks);
    const [passTasks, setPassTasks] = useState(initialTasks);

    const [passEmployees, setPassEmployees] = useState(initialEmployees);
    const [employees, setEmployees] = useState(initialEmployees);

    const [passUnregisteredEmployees, setPassUnregisteredEmployees] = useState(initialUnregisteredEmployees);
    const [unregisteredEmployees, setUnregisteredEmployees] = useState(initialUnregisteredEmployees);

    const [isEditable, setIsEditable] = useState(false);

    const [order, setOrder] = useState("show");


    const handleEnrollButtonClick = async () => {
        console.log("dak");
        try {
            const t_member_id = AuthService.getCurrentUser().id;
            console.log(t_member_id)
            // Call the updateEvent API function
            await EventService.addEventRegister(passEvent._id, t_member_id);
            window.location.reload();
        } catch (error) {
            console.log("Error enroll event:", error);
        }
    };

    const handleDiscardChanges = () => {
        setPassEvent(initialEvent);
        setPassTasks(initialTasks);
        setPassEmployees(initialEmployees);
        setUnregisteredEmployees(initialUnregisteredEmployees);
        setOrder("discard changes");
    }

    const comeBack = () => {
        navigate('/employee/home/')
    }

    return (
        <div className="info">
            <div className="infoBody">
                <div className="mainInfo">
                    <EventTable
                        event={passEvent}
                        change={setPassEvent}
                        isEditable={isEditable}
                    />
                    <div className="tasks">
                        <Tasks
                            tasks={passTasks}
                            change={setPassTasks}
                            isEditable={false}
                            order={order}
                        />
                        <Employees
                            employees={passEmployees}
                            changeEmployees={setPassEmployees}
                            unregisteredEmployees={passUnregisteredEmployees}
                            changeUnregisteredEmployees={setPassUnregisteredEmployees}
                            isEditable={false}
                        />
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <button type="submit"
                            className={`
                                aaa bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                           
                        text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
                            onClick={handleEnrollButtonClick}
                    >
                        {enroll ? "Enroll" : ""}
                    </button>
                    <button type="submit"
                                        className=" aaa ml-4
                                          bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                        onClick={comeBack}
                    >
                        Move Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventInfo;