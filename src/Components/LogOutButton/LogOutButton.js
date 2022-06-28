import { useNavigate } from "react-router-dom";
import "./LogOutButton.css";
const LogOutButton = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
    return <button onClick={logout} id="logout-button">LogOut</button>
}

export default LogOutButton;