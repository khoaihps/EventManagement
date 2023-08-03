import React from 'react';
import Sidebar from "./environment/Sidebar";
import Table from "./table/Table";
import Header from "./environment/Header";

export const HomePageEmployee = () => {
    return (
        <div>
            <Header title={"Events"} />
            <Sidebar/>
            <Table />
        </div>
    );
};
