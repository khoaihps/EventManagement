import React, { useState } from "react";
import TaskInfo from "./TaskInfo";
import "../../../style/TaskDetail.css";
import TaskEmployees from "./taskEmployee/TaskEmployees";

const TaskDetail = ({ task, setTask, index, updateTaskData, handleDismiss, isEditable }) => {
    const [currentTask, setCurrentTask] = useState(task);
    const handleClick = () => {
        handleDismiss(false);
    };

    const handleTaskChange = () => {
        setTask(index, currentTask);
        updateTaskData(index, currentTask);
        handleDismiss(false);
    };

    const handleDelete = () => {
        updateTaskData(index, null);
        handleDismiss(false);
    }

    const handleDiscardChanges = () => {
        setCurrentTask(task);
    };

    return (
        <div className="taskDetail fixed inset-0 z-10">
            <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl absolute">
                <div className={`${isEditable ? "" : "w-[1000px]"} taskDetailInner flex items-start gap-4`}>
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
                    <div className="child">
                        <TaskInfo index={index} task={currentTask} setTask={setCurrentTask} isEditable={isEditable} />
                        {isEditable && (
                            <div className="mt-[40px] flex">
                                <button
                                    type="submit"
                                    className="aaa bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                    onClick={handleTaskChange}
                                >
                                    Save
                                </button>
                                <button
                                    type="submit"
                                    className="aaa ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                    onClick={handleDelete}
                                >
                                    Remove
                                </button>
                                <button
                                    type="submit"
                                    className="aaa ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                    onClick={handleDiscardChanges}
                                >
                                    Discard Changes
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="child">
                        <h3>Enrolled</h3>
                        <TaskEmployees isEditable={isEditable} enrolled={true} />
                        <h3>Not Enrolled</h3>
                        <TaskEmployees isEditable={isEditable} enrolled={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetail;
