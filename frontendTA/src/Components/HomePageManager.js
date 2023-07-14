import React from 'react';
import Navbar from "./Navbar";

const HomePageManager = () => {
    // Check user session or token here

    return (
        <div>
            <Navbar/>
            <h1>Welcome!</h1>
        </div>
    );
};

export default HomePageManager;
