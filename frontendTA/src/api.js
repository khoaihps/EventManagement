const BASE_URL = 'http://localhost:4000';

export async function login(username, password, role) {
    try {
        console.log(username);
        const response = await fetch(`${BASE_URL}/login/${role.toLowerCase()}`, {
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
