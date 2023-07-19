const BASE_URL = 'http://localhost:4000/customer';

export async function createNewEvent(username, password, role) {
    try {
        const response = await fetch(`${BASE_URL}/event/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, role }),
        });

        if (response.ok) {
            const data = await response.json();
            return { success: true, sessionToken: data.sessionToken };
        } else {
            const errorData = await response.json();
            return { success: false, error: errorData.error };
        }
    } catch (error) {
        console.error('An error occurred during login:', error);
        return { success: false, error: 'An error occurred during login' };
    }
}
