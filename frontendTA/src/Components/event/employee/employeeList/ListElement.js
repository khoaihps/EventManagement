import React, {useState} from "react";
import EmployeeDetail from "../employeeDetail/EmployeeDetail";
const ListElement = ({employee, index, updateRegisteredEmployeeData, updateEmployeeData}) => {
    const [employeeInfoVisible, setEmployeeInfoVisible] = useState(false);
    const handleDelete = () => {
        updateRegisteredEmployeeData(index, null);
        updateEmployeeData("add", index, employee)
    };

    const handleDisplayEmployeeInfo = () => {
        setEmployeeInfoVisible(true);
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {employee.username}
            </th>
            <td className="px-6 py-4">
                {employee.email}
            </td>
            <td className="px-6 py-4">
                {employee.phone}
            </td>
            <td className="px-6 py-4">
                {employee.department}
            </td>
            <td className="px-6 py-4 text-right">
                <a href="#" onClick={handleDisplayEmployeeInfo}
                   className="
                inline-block w-20 h-6 text-center leading-12 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Show
                </a>
            </td>
            <td className="px-6 py-4 text-right">
                <a href="#" onClick={handleDelete}
                   className="
                inline-block w-20 h-6 text-center leading-12 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Add
                </a>
            </td>
            {
                employeeInfoVisible && <EmployeeDetail employee={employee} handleDismiss={setEmployeeInfoVisible}/>
            }
        </tr>
    );
}

export default ListElement;