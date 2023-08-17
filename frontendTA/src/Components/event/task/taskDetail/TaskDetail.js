import React, { useState } from "react";
import TaskInfo from "./TaskInfo";
import "../../../style/TaskDetail.css";
import TaskEmployees from "./taskEmployee/TaskEmployees";
import TaskService from "../../../../services/task.service";

const TaskDetail = ({ task, add, setTask, index, updateTaskData, handleDismiss, isEditable,
                        enrolledEmployee, notEnrolledEmployee, setEnrolled, setNotEnrolled }) => {
    const [currentTask, setCurrentTask] = useState(task);
    const [passEnrolledEmployee, setPassEnrolledEmployee] = useState(enrolledEmployee);
    const [passNotEnrolledEmployee, setPassNotEnrolledEmployee] = useState(notEnrolledEmployee);
    const [mark, setMark] = useState(true);

    const handleMark = () => {
        const reTask = currentTask;
        if (reTask.status === "completed")
        {
            reTask.status = "uncompleted";
            TaskService.updateTask(reTask._id, reTask);
        }
        else
        {
            reTask.status = "completed";
            TaskService.updateTask(reTask._id, reTask);
        }

        setMark(!mark);
    }

    const handleChangeEnrolled = (option, index, newData) => {
        let cur = [ ...passEnrolledEmployee]
        if (option === "remove")
        {
            cur.splice(index, 1);
        }
        else if (option === "add")
        {
            cur = [ ...passEnrolledEmployee, newData];
        }
        setPassEnrolledEmployee(cur);
    }

    const handleChangeNotEnrolled = (option, index, newData) => {
        let cur = [ ...passNotEnrolledEmployee]
        if (option === "remove")
        {
            cur.splice(index, 1);
        }
        else if (option === "add")
        {
            cur = [ ...passNotEnrolledEmployee, newData];
        }
        setPassNotEnrolledEmployee(cur);
    }


    const handleClick = () => {
        if (add)
        {
            updateTaskData(index, null);
            setEnrolled(passEnrolledEmployee);
            setNotEnrolled(passNotEnrolledEmployee);
        }
        handleDismiss(false);
    };

    const handleTaskChange = () => {
        setTask(index, currentTask);
        updateTaskData(index, currentTask);
        handleDismiss(false);
        setEnrolled(passEnrolledEmployee);
        setNotEnrolled(passNotEnrolledEmployee);
    };

    const handleDelete = () => {
        updateTaskData(index, null);
        handleDismiss(false);
        setEnrolled([]);
        setNotEnrolled([]);
    }

    const handleDiscardChanges = () => {
        setCurrentTask(task);
        setPassEnrolledEmployee(enrolledEmployee);
        setPassNotEnrolledEmployee(notEnrolledEmployee);
    };

    return (
        <div className="taskDetaill fixed inset-0 z-10">
            <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl absolute">
                <div className={`${add ? "w-[500px]" : "w-[1300px]"} taskDetailInnerr flex items-start gap-4`}>
                    <button className="text-gray-500 transition hover:text-gray-600 absolute top-[0px] right-[-0px]" onClick={handleClick}>
                        <span className="sr-only">Dismiss popup</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="child11">
                        <TaskInfo
                            index={index}
                            task={currentTask}
                            setTask={setCurrentTask}
                            isEditable={isEditable}
                        />
                        {isEditable && (
                            <div className="mt-[40px]">
                                <button
                                    type="submit"
                                    className="bbb bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                    onClick={handleTaskChange}
                                >
                                    Save
                                </button>
                                <button
                                    type="submit"
                                    className="bbb ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                    onClick={handleDelete}
                                >
                                    Remove
                                </button>
                                <button
                                    type="submit"
                                    className="bbb ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                    onClick={handleDiscardChanges}
                                >
                                    Discard Changes
                                </button>
                                <button
                                    type="submit"
                                    className="bbb ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                    onClick={handleMark}
                                >
                                    Change status
                                </button>
                            </div>
                        )}
                    </div>
                    {!add &&
                        <div className="child22">
                            <h3>Enrolled</h3>
                            <TaskEmployees
                                isEditable={isEditable}
                                enrolled={true}
                                employees={passEnrolledEmployee}
                                handleChangeEnrolled={handleChangeEnrolled}
                                handleChangeNotEnrolled={handleChangeNotEnrolled}
                            />
                            <h3>Not Enrolled</h3>
                            <TaskEmployees
                                isEditable={isEditable}
                                enrolled={false}
                                employees={passNotEnrolledEmployee}
                                handleChangeEnrolled={handleChangeEnrolled}
                                handleChangeNotEnrolled={handleChangeNotEnrolled}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default TaskDetail;
