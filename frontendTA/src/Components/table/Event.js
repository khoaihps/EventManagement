import React from "react";
import Badge from './Badge';

const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  
const Event = ({id, title, place, deadline, stt, budget}) => {
    return (
        <tr>
            <td> {id}</td>
            <td>{title}</td>
            <td>{place}</td>
            <td>{formatDate(deadline)}</td>
            <td>
                <Badge stt={stt}/>
            </td>
            <td><strong>{budget}</strong></td>
        </tr>
    );
}

export default Event;