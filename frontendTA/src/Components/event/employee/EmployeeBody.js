import Employee from './Employee';
import React from "react";

const EmployeeBody = ({employeesData, isEditable, updateEmployeeData}) => {
    return (

        <tbody>
        {
            employeesData.map((e, index) => (
                <Employee
                    key={index}
                    index={index}
                    isEditable={isEditable}
                    updateEmployeeData={updateEmployeeData}
                    employee={{ ...e}}
                />
            ))
        }
        </tbody>
    );
}

export default EmployeeBody;