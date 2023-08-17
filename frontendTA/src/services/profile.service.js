import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = 'http://localhost:4000/';

const getProfile = async (userId) => {
    try {
        const role = AuthService.getCurrentUser().role;
        console.log(userId);
        const response = await fetch(API_URL + `${role}` + "/profile/" + userId, {
            method: 'GET',
            headers: authHeader(),
        });
        if (response.ok){
            const data = response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}
const getAllEmployees = async (managerID) => {
    try {
        const role = AuthService.getCurrentUser().role;
        const response = await fetch(API_URL + `${role}` + "/profile/" + managerID + "/employees", {
            method: 'GET',
            headers: authHeader(),
        });
        if (response.ok){
            const data = response.json();
            return data;
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}
const ProfileService = {
    getProfile,
    getAllEmployees
};

export default ProfileService;
