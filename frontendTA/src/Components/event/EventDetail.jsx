import {useParams} from "react-router-dom";
import Header from "../environment/Header";
import Sidebar from "../environment/Sidebar";
import EventInfo from "./EventInfo";
import '../style/eventDetail.css'

export const EventDetail = () => {
    const { id } = useParams();

    return (
        <div>
            <Header title={"Event Detail"} />
            <Sidebar/>
            <EventInfo/>
        </div>
    );
};