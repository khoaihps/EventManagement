import authHeader from "./auth-header";
import AuthService from "./auth.service";
import { convertToISODate } from "./util";

const API_URL = "http://localhost:4000";

export async function createEvent(
  name,
  deadline,
  place,
  type_of_event,
  description,
  size,
  budget
) {
  try {
    console.log(name);
    const customer_id = AuthService.getCurrentUser().id;
    const date_proposed = new Date().toJSON().slice(0, 10);
    const last_modified = new Date().toJSON().slice(0, 10);
    const deadlineISO = convertToISODate(deadline);
    const status = "pending";
    const response = await fetch(`${API_URL}/customer/event/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader()
      },
      body: JSON.stringify({
        name,
        customer_id,
        deadline: deadlineISO,
        place,
        type_of_event,
        description,
        date_proposed,
        last_modified,
        size,
        budget,
        status,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, name: data.name };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.message };
    }
  } catch (error) {
    console.error("An error occurred during create event:", error);
    return { success: false, error };
  }
}

export const getManageEvent = async () => {
  try {
    const customerID = AuthService.getCurrentUser().id;
    console.log(customerID);
    const response = await fetch(
      API_URL + "/customer/event/manage-event/" + customerID,
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

export const getHistoryEvent = async () => {
  try {
    const customerID = AuthService.getCurrentUser().id;
    const response = await fetch(
      API_URL + "/customer/event/history-event/" + customerID,
      {
        method: "GET",
        headers: authHeader(),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getEventDetail = async (eventID) => {
  try {
    const response = await fetch(API_URL + "/customer/event/" + eventID, {
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


export const deleteEvent = async (eventID) => {
  try {
    const response = await fetch(API_URL + "/customer/event/delete/" + eventID, {
      method: "GET",
      headers: authHeader(),
    });
    if (response.ok) {
      console.log("Event deleted successfully.");
    } else {
      console.log("Event deletion failed.");
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const eventCount = async () => {
  try {
    const customerID = AuthService.getCurrentUser().id;
    const response = await fetch(
      API_URL + "/customer/event/count/" + customerID,
      {
        method: "GET",
        headers: authHeader(),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log("Error: ", error);
  }
}

export const getAllTaskEvent = async (eventID) => {
  try {
    const response = await fetch(
      API_URL + "/customer/event/tasks/" + eventID,
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

const EventService = {
  createEvent,
  getManageEvent,
  getHistoryEvent,
  getEventDetail,
  deleteEvent, 
  eventCount,
  getAllTaskEvent
};

export default EventService;
