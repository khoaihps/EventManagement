const API_URL = 'http://localhost:4000';
const axios = require('axios');

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

export const login = async (username, password, role) => {
    try {
        // const response = await axios.post(`${API_URL}/login/${role.toLowerCase()}`, { username, password })
        const response = await fetch(`${API_URL}/login/${role.toLowerCase()}`, {
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
            return { success: true };
        } else {
            const errorData = await response.json();
            return { success: false, error: errorData.message };
        }
    } catch (error) {
        console.error('An error occurred during login:', error);
        return { success: false, error: 'An error occurred during login' };
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
