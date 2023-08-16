import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:4000/';

const getManagerInfor = async (managerID) => {
    try {
        const response = await fetch(API_URL + "manager/profile/" + managerID, {
            method: 'GET',
            headers: authHeader(),
        });
        if (response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}

const ProfileService = {
    getManagerInfor,
};

export default ProfileService;
