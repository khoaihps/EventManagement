import getCurrentUser from '../services/auth.service'
import {useNavigate} from 'react-router-dom'
export const protectedComponent = (Component) => {
    const user = getCurrentUser();
    if (!user) {
        const navigate = useNavigate();
        navigate('/login');
        return null;
    }
    return <Component />
}