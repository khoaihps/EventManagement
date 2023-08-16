import "../style/item.css";
import React, {useState} from "react";
import EmployeeDetail from "../event/employee/employeeDetail/EmployeeDetail";

const EmployeeElement = ({ employee }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    }

    return (
        <tr className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            onClick={handleClick}
        >
            <td className="px-6 py-4">
                {employee.username}
            </td>
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {employee.firstName + " " + employee.lastName}
            </td>
            <td className="px-6 py-4">
                {employee.email}
            </td>
            <td className="px-6 py-4">
                {employee.phone}
            </td>
            <td className="px-6 py-4">

            </td>
            <td className="px-6 py-4">
                {employee.department}
            </td>
            {
                visible &&
                <EmployeeDetail employee={employee} handleDismiss={setVisible}/>
            }
        </tr>
    );
};

export default EmployeeElement;
