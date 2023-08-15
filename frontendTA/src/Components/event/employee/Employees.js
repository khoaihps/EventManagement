import EmployeeBody from "./EmployeeBody";
import {useState} from "react";
import ListTable from "./employeeList/ListTable";

const Employees = ({employees, changeEmployees, registeredEmployees, changeRegisteredEmployees, isEditable}) => {
    const updateEmployeeData = (option, employeeIndex, newEmployee) => {
        let updatedEmployeeData;
        if (option === "add") {
            updatedEmployeeData = [...employees, newEmployee];
        }
        else if (option === "remove")
        {
            const foundEmployeeIndex = employees.findIndex((employee) => employees.indexOf(employee) === employeeIndex);

            if (foundEmployeeIndex !== -1 && newEmployee === null)
            {
                updatedEmployeeData = [...employees]
                updatedEmployeeData.splice(employeeIndex, 1);
            }
        }

        changeEmployees(updatedEmployeeData);
    }

    const updateRegisteredEmployeeData = (employeeIndex, newEmployee) => {
        let updatedEmployeeData;
        if (employeeIndex === registeredEmployees.length) {
            updatedEmployeeData = [...registeredEmployees, newEmployee];
        }
        else
        {
            const foundEmployeeIndex = registeredEmployees.findIndex((employee) => registeredEmployees.indexOf(employee) === employeeIndex);

            if (foundEmployeeIndex !== -1 && newEmployee === null)
            {
                updatedEmployeeData = [...registeredEmployees]
                updatedEmployeeData.splice(employeeIndex, 1);
            }
        }

        changeRegisteredEmployees(updatedEmployeeData);
    }

    const [visibleList, setVisibleList] = useState(false);
    const handleClick = () => {
        setVisibleList(true);
    }


    return (
        <div className="mt-2 taskss employee shadow-2xl rounded-lg relative overflow-x-auto">
            <table className="w-full h-[300px] text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Participated Employee
                    </th>
                    {/*<th scope="col" className="px-6 py-3">*/}
                    {/*    Email*/}
                    {/*</th>*/}
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
                            onClick={handleClick}
                        >
                          Add New Employee
                        </span>

                    </th>
                </tr>
                </thead>
                <EmployeeBody
                    isEditable={isEditable}
                    employeesData={employees}
                    updateEmployeeData={updateEmployeeData}
                />
                {visibleList &&
                    <ListTable
                        registeredEmployees={registeredEmployees}
                        updateRegisteredEmployeeData={updateRegisteredEmployeeData}
                        updateEmployeeData={updateEmployeeData}
                        handleDismiss={setVisibleList}
                    />
                }
            </table>
        </div>
    );
}

export default Employees;