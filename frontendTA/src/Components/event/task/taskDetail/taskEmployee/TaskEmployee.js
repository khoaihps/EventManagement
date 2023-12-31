import React from "react";
const TaskEmployee = ({task, index, handleChangeEnrolled, handleChangeNotEnrolled, isEditable, enrolled}) => {
    const handleClick = () => {
        if (enrolled)
        {
            handleChangeEnrolled("remove", index, task);
            handleChangeNotEnrolled("add", index, task);
        }
        else
        {
            handleChangeEnrolled("add", index, task);
            handleChangeNotEnrolled("remove", index, task);
        }
    }
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {task.firstName + " " + task.lastName}
            </th>
            <td className="px-6 py-4">
                {task.email}
            </td>
            <td className="px-6 py-4">
                {task.phone}
            </td>
            <td className="px-6 py-4">
                {task.department}
            </td>
            {
                isEditable &&
                <td className="px-6 py-4 text-right">
                    <a href="#" className="
                inline-block w-20 h-6 text-center leading-12 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={handleClick}
                    >
                        {enrolled ? "Remove" : "Add"}
                    </a>
                </td>
            }
        </tr>
    );
}

export default TaskEmployee;