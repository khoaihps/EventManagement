import React from "react";
import ListElement from "./ListElement";

const ListBody = ({employeesData, isEditable, updateUnregisteredEmployeeData, updateEmployeeData}) => {
    return (
        <div className="mt-2 taskss employee shadow-2xl rounded-lg relative overflow-x-auto">
            <table className="w-[600px] h-[300px] text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Registered Employee
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
                            className="sr-only"
                        >
                        </span>

                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span
                            className="sr-only"
                        >
                        </span>

                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    employeesData.map((e, index) => (
                        <ListElement
                            key={index}
                            index={index}
                            isEditable={isEditable}
                            updateUnregisteredEmployeeData={updateUnregisteredEmployeeData}
                            updateEmployeeData={updateEmployeeData}
                            employee={{ ...e}}
                        />
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default ListBody;