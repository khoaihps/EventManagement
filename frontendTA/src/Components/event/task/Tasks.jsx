import TaskBody from "./TaskBody";
import React, {useEffect, useState} from "react";
import TaskDetail from "./taskDetail/TaskDetail";

const Tasks = ({tasks, change, isEditable}) => {
    const updateTaskData = (taskId, newData) => {
        if (taskId === tasks.length) {
            // If taskId is equal to tasks.length, add newData to the end of tasks array
            const updatedTasksData = [...tasks, newData];
            change(updatedTasksData);
        }
        else
        {
            const taskIndex = tasks.findIndex((task) => tasks.indexOf(task) === taskId); // Assuming each task has an 'id' property that uniquely identifies it

            if (taskIndex !== -1) {
                // Create a new array with the updated task data
                const updatedTasksData = [...tasks];

                if (newData === null) {
                    // If newData is null, delete the element from updatedTasksData array
                    updatedTasksData.splice(taskIndex, 1);
                } else {
                    // Update the task with newData
                    updatedTasksData[taskIndex] = { ...updatedTasksData[taskIndex], ...newData };
                }

                // Update the state with the modified tasksData array
                change(updatedTasksData);
            }
        }
    };

    const [taskStates, setTaskStates] = useState(() =>
        tasks.map((task) => {
            return { ...task }; // Assuming your tasksData is an array of objects
        })
    );

    // Function to update the state value for a specific task
    const updateStateValue = (index, newValue) => {
        setTaskStates((prevStates) => {
            const updatedStates = [...prevStates];
            updatedStates[index] = newValue;
            return updatedStates;
        });
    };

    useEffect(() => {
        setTaskStates(tasks.map((task) => ({ ...task })));
    }, [tasks]);

    const [isTaskInfoVisible, setIsTaskInfoVisible] = useState(false);

    const [task, setTask] = useState({
        name: "",
        deadline: "",
        budget: 0,
        description: "",
        department_involved: "",
        event_id: ""
    });

    const index = tasks.length;

    const handleDisplay = () => {
        setIsTaskInfoVisible(true);
        setTask({
            name: "",
            deadline: "",
            budget: 0,
            description: "",
            department_involved: "",
            event_id: ""
        });
        setTaskStates((prevStates) => [...prevStates, task]);
    }

    return (
        <div className="taskss shadow-2xl rounded-lg relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Task name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Deadline
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Budget
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Department involved
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span
                            className={`${
                                isEditable ? "" : "hidden"
                            } bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg px-2 py-1 absolute top-2`}
                            onClick={handleDisplay}
                        >
                          Add new Task
                        </span>
                    </th>
                </tr>
                </thead>
                <TaskBody updateStateValue={updateStateValue} tasksData={taskStates} updateTaskData={updateTaskData} isEditable={isEditable}/>
                {isTaskInfoVisible && <TaskDetail index={index} task={task} setTask={updateStateValue} updateTaskData={updateTaskData} isEditable={isEditable} handleDismiss={setIsTaskInfoVisible}/>}
            </table>
        </div>
    );
}

export default Tasks;