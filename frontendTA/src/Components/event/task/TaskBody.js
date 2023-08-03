import React, {useState} from "react";
import Task from "./Task";

const TaskBody = ({ tasksData, updateTaskData, isEditable }) => {
    const [taskStates, setTaskStates] = useState(() =>
        tasksData.map((task) => {
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

    return (
        <tbody className="overflow-auto">
        {tasksData.map((t, index) => (
            <Task
                key={index}
                index={index}
                task={taskStates[index]}
                isEditable={isEditable}
                updateTaskData={updateTaskData}
                setStateValue={updateStateValue}
            />
        ))}
        </tbody>
    );
};

export default TaskBody;
