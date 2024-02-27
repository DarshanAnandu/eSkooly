import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const history = useNavigate();
    useEffect(() => {
        // localStorage.setItem('loggedIn', 'false');
        // localStorage.removeItem('adminId');
        // localStorage.removeItem('token');
        // localStorage.removeItem('refreshToken');
        localStorage.clear();
        history('/eSkooly');
        window.location.reload();
    }, [history]);

    return null;
}

export default LogOut;
