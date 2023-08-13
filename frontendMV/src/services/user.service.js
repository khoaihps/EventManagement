import authHeader from "./auth-header";
import AuthService from "./auth.service";
import { convertToISODate } from "./util";

const API_URL = "http://localhost:4000";

export const getCustomerInfo = async () => {
  try {
    const customerID = AuthService.getCurrentUser().id;
    const response = await fetch(API_URL + "/customer/profile/" + customerID, {
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

export const updateCustomerInfo = async (
  firstName,
  lastName,
  DOB,
  email,
  phone,
  address
) => {
  try {
    const customerID = AuthService.getCurrentUser().customerID;
    const isoDate = convertToISODate(DOB);
    const response = await fetch(
      API_URL + "/customer/profile/update/" + customerID,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...authHeader()
        },
        body: JSON.stringify({
          firstName,
          lastName,
          DOB: isoDate,
          email,
          phone,
          address,
        }),
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

export const deleteCustomerAccount = async (customerID) => {
  try {
    const response = await fetch(API_URL + "/customer/profile/delete/" + customerID, {
      method: "GET",
      headers: authHeader(),
    });
    if (response.ok) {
      console.log("Customer deleted successfully.");
    } else {
      console.log("Customer deletion failed.");
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};

const UserService = {
  getCustomerInfo,
  updateCustomerInfo,
  deleteCustomerAccount,
};

export default UserService;
