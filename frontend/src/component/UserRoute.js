import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {

    const { userInfo } = useSelector((state) => state.signIn);
    return userInfo && userInfo.role === 0 ? children : <Navigate to="/" />;
}

export default UserRoute