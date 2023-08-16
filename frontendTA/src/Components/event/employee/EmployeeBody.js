import Employee from './Employee';
import React from "react";

const EmployeeBody = ({employeesData, isEditable, updateEmployeeData, updateUnregisteredEmployeeData}) => {
    return (

        <tbody>
        {
            employeesData.map((e, index) => (
                <Employee
                    key={index}
                    index={index}
                    isEditable={isEditable}
                    updateEmployeeData={updateEmployeeData}
                    updateUnregisteredEmployeeData={updateUnregisteredEmployeeData}
                    employee={{ ...e}}
                />
            ))
        }
        </tbody>
    );
}

export default EmployeeBody;