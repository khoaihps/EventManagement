import TaskEmployee from './TaskEmployee';
import React from "react";

const TaskEmployeeBody = ({tasksData, handleChangeEnrolled, handleChangeNotEnrolled, isEditable, enrolled}) => {
    return (
        <tbody>
        {
            tasksData.map((t, index) => (
                <TaskEmployee
                    enrolled={enrolled}
                    isEditable={isEditable}
                    task={{ ...t}}
                    index={index}
                    handleChangeEnrolled={handleChangeEnrolled}
                    handleChangeNotEnrolled={handleChangeNotEnrolled}
                />
            ))
        }
        </tbody>
    );
}

export default TaskEmployeeBody;