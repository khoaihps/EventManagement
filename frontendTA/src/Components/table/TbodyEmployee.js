import React from "react";
import EventEmployee from './EventEmployee'

const Tbody = ({ filteredData, role}) => {

    return (
        <tbody>
        {filteredData.map((e) => (
            <EventEmployee
                key={e._id}
                id={e._id}
                title={e.name}
                place={e.place}
                deadline={e.deadline}
                stt={e.status}
                budget={e.budget}
            />
        ))}
        </tbody>
    );
};

export default Tbody;