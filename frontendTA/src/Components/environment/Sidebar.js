import React, {useState} from 'react';
import '../style/sidebar.css'
import Account from "./Account";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const [activeMenuItem, setActiveMenuItem] = useState('manager');
    const handleClick = () => {
        setVisible(true);
    }

    const handleOpen = () => {
        navigate("/manager/employees");
        setActiveMenuItem('employees');
    }

    const handleOpenManager = () => {
        navigate("/manager/home");
        setActiveMenuItem('manager');
    }

    return (
        <div className="sidebar flex flex-col items-center w-40 h-full overflow-hidden text-gray-700 bg-gray-100 rounded">
            <a className="flex items-center w-full px-3 mt-3" href="#">
                <div className="logo">
                    <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor">
                        <path
                            d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"/>
                    </svg>
                </div>
                <span className="ml-2 text-sm font-bold">Manager</span>
            </a>
            <div className="menu-item w-full px-2">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300"
                     onClick={handleOpenManager}
                >
                    <div className={`flex cursor-pointer ${
                        activeMenuItem === 'manager' ? 'bg-gray-300' : 'hover:bg-gray-300'
                    } items-center w-full h-12 px-3 mt-2 rounded`}
                       >
                        <div className="logo">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <span className="ml-2 text-sm font-medium">Events</span>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full mt-2 border-t border-gray-300"
                     onClick={handleOpen}
                >
                    <div className={`flex cursor-pointer ${
                        activeMenuItem === 'employees' ? 'bg-gray-300' : 'hover:bg-gray-300'
                    } items-center w-full h-12 px-3 mt-2 rounded`}
                    >
                        <div className="logo">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                        </div>
                        <span className="ml-2 text-sm font-medium">Employees</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center cursor-pointer justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300"
                 onClick={handleClick}
            >
                <div className="logo">
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <span className="ml-2 text-sm font-medium">manager</span>
            </div>
            {visible &&
                <Account handleDismiss={setVisible}/>
            }
        </div>
    )
}

export default Sidebar