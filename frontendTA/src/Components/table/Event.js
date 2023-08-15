import "../style/item.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Badge from "./Badge";
import AuthService from "../../services/auth.service";
import PopUp from "../PopUp";
import { useEffect } from "react";
import EventService from "../../services/event.service";

const Event = ({ id, title, place, deadline, stt, budget }) => {
  const [popUp, setPopUp] = useState(false);
  const [eventData, setEventData] = useState("");
  const navigate = useNavigate();
  const user = AuthService.getCurrentUser();
  const handleClick = () => {
    console.log(id);
    console.log(eventData.name);
    if (user.role !== "employee") {
      // Navigate to the specific event page based on its ID
      return navigate(`/manager/event/${id}`);
    } else {
      openPopUp();
    }
  };
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await EventService.getEventInfo(id);
      console.log("Data from API:", data);
      if (data) {
        setEventData(data);
      }
    };
    fetchData();
  }, []);

  const openPopUp = () => {
    setPopUp(true);
  };
  const closePopUp = () => {
    setPopUp(false);
  };
  return (
    <div>
      <tr className="item" onClick={handleClick}>
        <td> {id}</td>
        <td>{title}</td>
        <td>{place}</td>
        <td>{formatDate(deadline)}</td>
        <td>
          <Badge stt={stt} />
        </td>
        <td>
          <strong>{budget}</strong>
        </td>
      </tr>
      {eventData ? (
        <PopUp trigger={popUp} setTrigger={closePopUp}>
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{eventData._id}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Type</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {eventData.type_of_event}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Occuputation</dt>
                <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Salary</dt>
                <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Bio</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  facilis debitis explicabo doloremque impedit nesciunt dolorem
                  facere, dolor quasi veritatis quia fugit aperiam aspernatur
                  neque molestiae labore aliquam soluta architecto?
                </dd>
              </div>
            </dl>
          </div>
        </PopUp>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Event;
