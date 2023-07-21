const API_URL = 'http://localhost:4000';

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

const login = async (username, password, role) => {
    try {
        console.log(username);
        const response = await fetch(`${API_URL}/login/${role.toLowerCase()}`, {
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
