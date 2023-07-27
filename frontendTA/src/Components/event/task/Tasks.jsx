import TaskBody from "./TaskBody";
import tasks from '../../database/tasksData';

const Tasks = ({isEditable}) => {
    return (
        <div className="taskss shadow-2xl rounded-lg relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Task name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Deadline
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Budget
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Department involved
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span
                            className={`${
                                isEditable ? "" : "hidden"
                            } bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg px-2 py-1 absolute top-2`}
                        >
                          Add new Task
                        </span>
                    </th>
                </tr>
                </thead>
                <TaskBody isEditable={isEditable} tasksData={tasks}/>
            </table>
        </div>
    );
}

export default Tasks;