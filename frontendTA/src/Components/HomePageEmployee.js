import React from 'react';
import Navbar from "./Navbar";

const HomePageEmployee = () => {
    // Check user session or token here

    return (
        <div>
            <Navbar/>
            <h1>Welcome!</h1>
        </div>
    );
};

export default HomePageEmployee;
