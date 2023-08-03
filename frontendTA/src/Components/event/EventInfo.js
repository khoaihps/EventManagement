import EventTable from "./EventTable";
import Tasks from "./task/Tasks";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Employees from "../event/employee/Employees";
import tasksData from "../database/tasksData";
import employeesData from "../database/employeesData";

const EventInfo = () => {
    const navigate = useNavigate();

    // api call specific event
    const initialEvent = {
        "name": "Gray Mathews",
        "place": "Tarapacá",
        "id": "9479",
        "budget": "$31,024,40",
        "description": "job join joint joke journal journalist journey joy judge judgment juice jump junior jury just",
        "deadline": "Dec 5, 2023",
        "status": "preparing",
        "datePropose": "Sep 28, 2023",
        "lastModified": "Jun 12, 2024",
        "typeOfEvent": "Community"
    }

    // api call specific tasks associated with the event
    const initialTasks = tasksData;
    // api call specific employees associated with the event
    const initialEmployees = employeesData;


    const [event, setEvent] = useState(initialEvent);
    const [passEvent, setPassEvent] = useState(initialEvent);

    const [tasks, setTasks] = useState(initialTasks);
    const [passTasks, setPassTasks] = useState(initialTasks);

    const [passEmployees, setPassEmployees] = useState(initialEmployees);
    const [employees, setEmployees] = useState(initialEmployees);

    const [isEditable, setIsEditable] = useState(false);


    const handleEditButtonClick = () =>
    {
        if (isEditable)
        {
            console.log(passEvent);
            console.log(passTasks);
            // console.log(passEmployees);

            setEvent(passEvent);
            setTasks(passTasks);
            setEmployees(passEmployees);

            // api sends things to database
        }

        setIsEditable(!isEditable);
    };

    const handleDiscardChanges = () => {
        setEvent(initialEvent);
        setTasks(initialTasks);
        setEmployees(initialEmployees);

        setIsEditable(!isEditable);
    }

    const comeBack = () => {
        navigate('/manager/home/')
    }

    return (
        <div className="info">
            <div className="infoBody">
                <div className="mainInfo">
                    <EventTable event={passEvent} change={setPassEvent} isEditable={isEditable}/>
                    <div className="tasks">
                        <Tasks tasks={passTasks} change={setPassTasks} isEditable={isEditable} />
                        <Employees employees={passEmployees} change={setPassEmployees} isEditable={isEditable} />
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <button type="submit"
                            className={`${isEditable ? 'aaa bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800' :
                                'aaa bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            }
                        text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
                            onClick={handleEditButtonClick}
                    >
                        {isEditable ? 'Save' : 'Edit'}
                    </button>
                    {isEditable ? <button type="submit"
                                           className=" aaa ml-4
                                          bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                           onClick={handleDiscardChanges}
                    >
                        Discard Changes
                    </button> : <button type="submit"
                                        className=" aaa ml-4
                                          bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                        onClick={comeBack}
                    >
                        Move Back
                    </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default EventInfo;