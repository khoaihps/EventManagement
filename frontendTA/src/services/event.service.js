import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = "http://localhost:4000/";
const role = AuthService.getCurrentUser().role;
const getEventInfo = async (eventID) => {
  try {
    const response = await fetch(API_URL + `${role}` + "/event/" + eventID, {
      method: "GET",
      headers: authHeader(),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};
const getAllEvent = async () => {
  try {
    const response = await fetch(API_URL + `${role}` + "/event/all", {
      method: "GET",
      headers: authHeader(),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};
const getAllOpenEvent = async () => {
  try {
    const response = await fetch(API_URL + `${role}` + "/event/all", {
      method: "GET",
      headers: authHeader(),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};
const getRegisteredEmployees = async (eventID) => {
  try {
    const response = await fetch(
      API_URL + "manager/event/" + eventID + "/remployees",
      {
        method: "GET",
        headers: authHeader(),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};
const getUnregisteredEmployees = async (eventID) => {
  try {
    const response = await fetch(
      API_URL + "manager/event/" + eventID + "/uremployees",
      {
        method: "GET",
        headers: authHeader(),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};

const updateEvent = async (eventId, updatedEventDetails) => {
  try {
    console.log(updatedEventDetails);
    const response = await fetch(
      API_URL + "manager/event/" + eventId + "/update",
      {
        method: "PUT",
        headers: {
          ...authHeader(),
          "Content-Type": "application/json", // Set the Content-Type header
        },
        body: JSON.stringify(updatedEventDetails),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

const EventService = {
  getEventInfo,
  getAllEvent,
  getAllOpenEvent,
  getRegisteredEmployees,
  getUnregisteredEmployees,
  updateEvent,
};

export default EventService;
