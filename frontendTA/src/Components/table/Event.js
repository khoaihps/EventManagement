import '../style/item.css';
import { redirect, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(id);
        // Navigate to the specific event page based on its ID
        return navigate(`/manager/event/${id}`);
    };

    return (
        <tr className="item" onClick={handleClick}>
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