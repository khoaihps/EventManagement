import TaskEmployeeBody from "./TaskEmployeeBody";
import "../../../../style/td3.css"

const TaskEmployees = ({isEditable, handleChangeEnrolled, handleChangeNotEnrolled, employees, enrolled}) => {
    return (
        <div className="listBody1 mt-2 taskss employee shadow-2xl rounded-lg relative overflow-x-auto">
            <table className="w-full h-[300px] text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Employee name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Department
                    </th>
                    {
                        isEditable && <th scope="col" className="px-6 py-3">
                            <span className="sr-only"></span>
                        </th>
                    }
                </tr>
                </thead>
                <TaskEmployeeBody
                    enrolled={enrolled}
                    isEditable={isEditable}
                    tasksData={employees}
                    handleChangeEnrolled={handleChangeEnrolled}
                    handleChangeNotEnrolled={handleChangeNotEnrolled}
                />
            </table>
        </div>
    );
}

export default TaskEmployees;