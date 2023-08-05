const BASE_URL = 'http://localhost:4000';

// Login
export async function login(username, password) {
    try {
        console.log(username);
        const response = await fetch(`${BASE_URL}/login/customer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            return { success: true, name: data.name, sessionToken: data.token };
        } else {
            const errorData = await response.json();
            return { success: false, error: errorData.message };
        }
    } catch (error) {
        console.error('An error occurred during login:', error);
        return { success: false, error: 'An error occurred during login' };
    }
}

// Register
export async function register(firstName, lastName, username, password, DOB, email, phone, address) {
    try {
        const isoDate = convertToISODate(DOB)
        console.log(username);
        const response = await fetch(`${BASE_URL}/register/customer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, username, password, DOB: isoDate, email, phone, address }),
        });

        if (response.ok) {
            const data = await response.json();
            return { success: true, name: data.name};
        } else {
            const errorData = await response.json();
            return { success: false, error: errorData.message };
        }
    } catch (error) {
        console.error('An error occurred during login:', error);
        return { success: false, error: 'An error occurred during register' };
    }
}

function convertToISODate(inputDOB) {
    // Split the input string by "/"
    const [day, month, year] = inputDOB.split("/");
  
    // Create a new Date object with the components in "yyyy-mm-dd" format
    const dateObject = new Date(`${year}-${month}-${day}`);
  
    // Use toISOString() to get the date in "yyyy-mm-dd" format
    const isoDate = dateObject.toISOString().slice(0, 10);
  
    return isoDate;
  }