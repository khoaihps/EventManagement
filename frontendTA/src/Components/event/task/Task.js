import React from "react";
const Task = ({task, isEditable}) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {task.name}
            </th>
            <td className="px-6 py-4">
                {task.deadline}
            </td>
            <td className="px-6 py-4">
                {task.budget}
            </td>
            <td className="px-6 py-4">
                {task.department_involved}
            </td>
            <td className="px-6 py-4 text-right">
                <a href="#" className="
                inline-block w-20 h-6 text-center leading-12 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    {isEditable ? "Edit" : "Show"}
                </a>
            </td>
        </tr>
    );
}

export default Task;