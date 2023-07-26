import React from "react";
import Badge from './Badge';
import '../style/item.css'
import { useNavigate } from 'react-router-dom';


const Event = ({id, title, place, deadline, stt, budget}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the specific event page based on its ID
        navigate(`/manager/home/${id}`);
    };

    return (
        <tr className="item" onClick={handleClick}>
            <td> {id}</td>
            <td>{title}</td>
            <td>{place}</td>
            <td>{deadline}</td>
            <td>
                <Badge stt={stt}/>
            </td>
            <td><strong>{budget}</strong></td>
        </tr>
    );
}

export default Event;