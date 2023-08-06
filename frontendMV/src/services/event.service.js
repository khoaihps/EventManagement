import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = "http://localhost:4000/";

// Create event
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
    const date_proposed = Date.now;
    const last_modified = Date.now;
    const status = "pending";
    const response = await fetch(`${API_URL}/customer/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        customer_id,
        deadline,
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
    return { success: false, error: "An error occurred during create event" };
  }
}

const getManageEvent = async () => {
  try {
    const response = await fetch(API_URL + "customer/event/manage-event", {
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
const getHistoryEvent = async () => {
  try {
    const response = await fetch(API_URL + "customer/event/history", {
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

const EventService = {
  createEvent,
  getManageEvent,
  getHistoryEvent
};

export default EventService;
