import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = "http://localhost:4000";

const getCustomerInfo = async () => {
  try {
    const customerID = AuthService.getCurrentUser().customerID;
    const response = await fetch(API_URL + "customer/profile/" + customerID, {
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
    const customerID = AuthService.getCurrentUser().customerID;
    const response = await fetch(API_URL + "customer/profile/update" + customerID, {
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
  getCustomerInfo,
  updateCustomerInfo,
};

export default UserService;
