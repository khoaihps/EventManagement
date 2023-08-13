import React from "react";
import Task from "./Task";

const TaskBody = ({ tasksData, updateStateValue, updateTaskData, isEditable }) => {
    return (
        <tbody className="overflow-auto">
        {tasksData.map((t, index) => (
            <Task
                key={index}
                index={index}
                task={{ ...t}}
                isEditable={isEditable}
                updateTaskData={updateTaskData}
                setStateValue={updateStateValue}
            />
        ))}
        </tbody>
    );
};

export default TaskBody;
