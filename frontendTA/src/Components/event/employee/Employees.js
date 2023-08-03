import EmployeeBody from "./EmployeeBody";

const Employees = ({employees, change, isEditable}) => {
    return (
        <div className="mt-2 taskss employee shadow-2xl rounded-lg relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                    <th scope="col" className="px-6 py-3">
                        <span
                            className={`${
                                isEditable ? "" : "hidden"
                            } bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-medium rounded-lg px-2 py-1
                            whitespace-nowrap
                            `}
                        >
                          Add New Employee
                        </span>

                    </th>
                </tr>
                </thead>
                <EmployeeBody isEditable={isEditable} tasksData={employees}/>
            </table>
        </div>
    );
}

export default Employees;