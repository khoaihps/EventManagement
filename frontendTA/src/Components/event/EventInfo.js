import EventTable from "./EventTable";
import Tasks from "./task/Tasks";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Employees from "../event/employee/Employees";

const EventInfo = () => {
    const navigate = useNavigate();

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

    const [event, setEvent] = useState(initialEvent);
    const [passEvent, setPassEvent] = useState(event);
    const [isEditable, setIsEditable] = useState(false);

    const handleEditButtonClick = () =>
    {
        if (isEditable)
        {
            console.log(passEvent)
            setEvent(passEvent);
            // api sends event to database
        }

        setIsEditable(!isEditable);
    };

    const handleDiscardChanges = () => {
        setEvent(initialEvent);
        setIsEditable(!isEditable);
    }

    const comeBack = () => {
        navigate('/manager/home/')
    }

    return (
        <div className="info">
            <div className="infoBody">
                <div className="mainInfo">
                    <EventTable event={passEvent} isEditable={isEditable} change={setPassEvent}/>
                    <div className="tasks">
                        <Tasks isEditable={isEditable} />
                        <Employees isEditable={isEditable} />
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <button type="submit"
                            className={`${isEditable ? 'bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800' :
                                'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            }
                        text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
                            onClick={handleEditButtonClick}
                    >
                        {isEditable ? 'Save' : 'Edit'}
                    </button>
                    {isEditable ? <button type="submit"
                                           className=" ml-4
                                          bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                           onClick={handleDiscardChanges}
                    >
                        Discard Changes
                    </button> : <button type="submit"
                                        className=" ml-4
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