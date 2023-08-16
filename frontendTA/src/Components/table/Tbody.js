import React from "react";
import Event from './Event'

const Tbody = ({ filteredData, role}) => {

    return (
        <tbody>
            {filteredData.map((e) => (
                <Event
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