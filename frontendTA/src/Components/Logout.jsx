import { useNavigate } from "react-router-dom"
import AuthService from "../services/auth.service";

const Logout = () => {
    const navigate = useNavigate();
    AuthService.logout();
    setTimeout(() => {
        navigate('/login');
    }, 1000);
    return (
        <div>"You are about to log out"</div>
    )
}
export default Logout;