import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const history = useNavigate();
    useEffect(() => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('adminId');
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        history('/eSkooly');
        window.location.reload();
    }, [history]);

    return null;
}

export default LogOut;
