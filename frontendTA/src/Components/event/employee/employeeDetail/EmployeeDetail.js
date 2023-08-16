import React from "react";
import EmployeeInfo from "./EmployeeInfo";
import "../../../style/employeeDetail.css";

const EmployeeDetail = ({employee, handleDismiss}) => {
    const handleClick = () => {
        console.log("AAAA")
        handleDismiss(false);
    }

    return (
        <div className="taskDetail fixed inset-0 z-10">
            <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl absolute">
                <div className="taskDetailInner flex items-start gap-4">
                    <button className="text-gray-500 transition hover:text-gray-600 absolute top-[0px] right-[-0px]"
                            onClick={handleClick}
                    >
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
                    <div className="childd">
                        <EmployeeInfo
                            employee={employee}
                            isEditable={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeDetail;