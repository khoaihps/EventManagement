import Employee from './Employee';
import React from "react";

const EmployeeBody = ({tasksData, isEditable}) => {
    return (
        <tbody>
        {
            tasksData.map((t) => (
                <Employee isEditable={isEditable} task={t}/>
            ))
        }
        </tbody>
    );
}

export default EmployeeBody;