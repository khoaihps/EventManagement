import { convertToISODate } from './util';

const API_URL = 'http://localhost:4000';

const login = async (username, password) => {
    try {
        console.log(username);
        const response = await fetch(`${API_URL}/customer/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.token) {
                console.log(JSON.stringify(data));
                localStorage.setItem("user", JSON.stringify(data));
            }
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

export async function register(firstName, lastName, username, password, DOB, email, phone, address) {
    try {
        const isoDate = convertToISODate(DOB)
        console.log(username);
        const response = await fetch(`${API_URL}/customer/register`, {
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

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;
