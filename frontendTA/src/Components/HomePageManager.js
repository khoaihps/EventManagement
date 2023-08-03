import React from 'react';
import Sidebar from "./environment/Sidebar";
import Header from "./environment/Header";
import Table from "./table/Table";
export const HomePageManager = () => {
    // Check user session or token here

    return (
        <div>
            <Header title={"Events"} />
            <Sidebar/>
            <Table />
        </div>
    );
};
