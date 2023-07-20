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
export async function register(firstname, lastname, username, password, dob, email, phone, address) {
    try {
        console.log(username);
        const response = await fetch(`${BASE_URL}/register/customer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstname, lastname, username, password, dob, email, phone, address }),
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