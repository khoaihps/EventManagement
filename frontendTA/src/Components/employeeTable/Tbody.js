import React from "react";
import EmployeeElement from "./EmployeeElement";

const Tbody = ({ filteredData }) => {

    return (
        <tbody>
            {filteredData.map((e) => (
                <EmployeeElement
                    key={e._id}
                    employee={e}
                />
            ))}
        </tbody>
    );
};

export default Tbody;