import TaskEmployee from './TaskEmployee';
import React from "react";

const TaskEmployeeBody = ({tasksData, isEditable, enrolled}) => {
    return (
        <tbody>
        {
            tasksData.map((t) => (
                <TaskEmployee
                    enrolled={enrolled}
                    isEditable={isEditable}
                    task={t}
                />
            ))
        }
        </tbody>
    );
}

export default TaskEmployeeBody;