import Task from "./Task";
import React from "react";

const TaskBody = ({tasksData, isEditable}) => {
    return (
        <tbody className="overflow-auto">
        {
            tasksData.map((t) => (
                <Task isEditable={isEditable} task={t}/>
            ))
        }
        </tbody>
    );
}

export default TaskBody;