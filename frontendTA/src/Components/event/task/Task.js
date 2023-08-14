import React, {useState} from "react";
import TaskDetail from "./taskDetail/TaskDetail";

const Task = ({ index, updateTaskData, task, setStateValue, isEditable }) => {
    const [isTaskInfoVisible, setTaskInfoVisible] = useState(false);
    const handleDisplayTaskInfo = () => {
        setTaskInfoVisible(true);
    };



    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {task.name}
                </th>
                <td className="px-6 py-4">{task.deadline}</td>
                {/*<td className="px-6 py-4">{task.budget}</td>*/}
                <td className="px-6 py-4">{task.department_involved}</td>
                <td className="px-6 py-4 text-right">
                    <div
                        className="
                    inline-block w-20 h-6 text-center leading-12 font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        onClick={handleDisplayTaskInfo}
                    >
                        {isEditable ? "Edit" : "Show"}
                    </div>
                </td>
                {isTaskInfoVisible &&
                    <TaskDetail
                        add={false}
                        index={index}
                        updateTaskData={updateTaskData}
                        isEditable={isEditable}
                        task={task}
                        setTask={setStateValue}
                        handleDismiss={setTaskInfoVisible}
                    />
                }
            </tr>
        </>
    );
};

export default Task;
