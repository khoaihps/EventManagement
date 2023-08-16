import React, {useEffect, useState} from "react";
import TaskDetail from "./taskDetail/TaskDetail";
import employees from "../../database/employeesData";
import TaskService from "../../../services/task.service";

// export const loader = async () => {
//     try {
//         const assignedEmployees = await TaskService.getAssignedEmployees(); 
    
//         return {assignedEmployees};
//     } catch (error) {
//         console.log("Error fetching employees:", error);
//         throw error;
//     }
// };

const Task = ({ index, updateTaskData, task, setStateValue, isEditable, order}) => {
    const [isTaskInfoVisible, setTaskInfoVisible] = useState(false);
    const handleDisplayTaskInfo = () => {
        setTaskInfoVisible(true);
    };
    // const assignedEmployees = TaskService.getAssignedEmployees(); 
    // console.log(assignedEmployees);
    const [enrolledEmployee, setEnrolledEmployee] = useState([]);
    const [notEnrolledEmployee, setNotEnrolledEmployee] = useState([]);
    const [passEnrolledEmployee, setPassEnrolledEmployee] = useState([]);
    const [passNotEnrolledEmployee, setPassNotEnrolledEmployee] = useState([]);

    useEffect(() => {
        TaskService.getAssignedEmployees(task._id)
        .then(( data ) => {
            setEnrolledEmployee([ ...data]);
            setNotEnrolledEmployee([ ...data]);
            setPassEnrolledEmployee([ ...data]);
            setPassNotEnrolledEmployee([ ...data])
    
            if (order === "save") {
                setEnrolledEmployee(passEnrolledEmployee);
                setNotEnrolledEmployee(passNotEnrolledEmployee);
            } else if (order === "discard changes") {
                setEnrolledEmployee([ ...data]);
                setNotEnrolledEmployee([ ...data]);
                setPassEnrolledEmployee([ ...data]);
                setPassNotEnrolledEmployee([ ...data]);
            }
        })
        .catch(err => console.log(err))
        
    }, [order]);


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
                        enrolledEmployee={passEnrolledEmployee}
                        notEnrolledEmployee={passNotEnrolledEmployee}
                        setEnrolled={setPassEnrolledEmployee}
                        setNotEnrolled={setPassNotEnrolledEmployee}
                    />
                }
            </tr>
        </>
    );
};

export default Task;
