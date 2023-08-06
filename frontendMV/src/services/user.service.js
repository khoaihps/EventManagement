import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getCustomerInfo = async (customerID) => {
  try {
    const response = await fetch(API_URL + "customer/" + customerID, {
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

// export async function update(firstName, lastName, username, password, DOB, email, phone, address) {
//     try {
//         const isoDate = convertToISODate(DOB)
//         console.log(username);
//         const response = await fetch(`${API_URL}/register/customer`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ firstName, lastName, username, password, DOB: isoDate, email, phone, address }),
//         });

//         if (response.ok) {
//             const data = await response.json();
//             return { success: true, name: data.name};
//         } else {
//             const errorData = await response.json();
//             return { success: false, error: errorData.message };
//         }
//     } catch (error) {
//         console.error('An error occurred during login:', error);
//         return { success: false, error: 'An error occurred during register' };
//     }
// }

const updateCustomerInfo = async () => {
  try {
    const response = await fetch(API_URL + "customer/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // firstName,
        // lastName,
        // username,
        // password,
        // DOB: isoDate,
        // email,
        // phone,
        // address,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getCustomerInfo,
  updateCustomerInfo,
};

export default UserService;
