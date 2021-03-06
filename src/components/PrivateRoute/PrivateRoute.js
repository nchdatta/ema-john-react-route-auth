import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    // console.log(props)
    const { user } = useAuth();
    let location = useLocation();

    return user.email ? children : <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoute;