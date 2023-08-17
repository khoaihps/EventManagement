const TaskInfo = ({task, setTask, isEditable}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedTask = { ...task, [name]: value };
        setTask(updatedTask);
    };

    return (
                <div className="grid">
                    <div className="rounded-lg shadow-2xl bg-white lg:col-span-3 lg:p-6">
                        <form>
                            <div className="relative z-0 w-full mb-2 group">
                                <input type="text" name="name" id="floating_email"
                                       className={` 
                                   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                       placeholder=" " required
                                       readOnly={!isEditable}
                                       value={task.name}
                                       onChange={handleChange}
                                />
                                <label htmlFor="floating_email"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="deadline" id="floating_password"
                                       className={` 
                                   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                       placeholder=" " required
                                       readOnly={!isEditable}
                                       value={task.deadline}
                                       onChange={handleChange}

                                />
                                <label htmlFor="floating_password"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deadline</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="budget" id="floating_repeat_password"
                                       className={` 
                                   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                       placeholder=" " required
                                       readOnly={!isEditable}
                                       value={task.budget}
                                       onChange={handleChange}
                                />
                                <label htmlFor="floating_repeat_password"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Budget</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="department_involved" id="floating_repeat_password"
                                       className={` 
                                   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                       placeholder=" " required
                                       readOnly={!isEditable}
                                       value={task.department_involved}
                                       onChange={handleChange}

                                />
                                <label htmlFor="floating_repeat_password"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department involved</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="status" id="floating_repeat_password"
                                       className={` 
                                   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                       placeholder=" " required
                                       readOnly={!isEditable}
                                       value={task.status}
                                       onChange={handleChange}

                                />
                                <label htmlFor="floating_repeat_password"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
                            </div>
                            <textarea
                                id="message"
                                rows="4"
                                className={` 
                            block p-2.5 w-full text-sm mb-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                placeholder="Description..."
                                readOnly={!isEditable}
                                name="description"
                                onChange={handleChange}
                            >

                            {task.description}
                        </textarea>
                        </form>
                    </div>
                </div>
    );
}

export default TaskInfo;