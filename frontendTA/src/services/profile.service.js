import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:4000/';

const getManagerInfor = async (userId) => {
    try {
        console.log(userId);
        const response = await fetch(API_URL + "manager/profile/" + userId, {
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
        const response = await fetch(API_URL + "manager/profile/" + managerID + "/employees", {
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
    getManagerInfor,
    getAllEmployees
};

export default ProfileService;
