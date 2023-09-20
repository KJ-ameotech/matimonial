import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const PrivateRoutes = ({ token }) => {
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (!auth) {
    //         navigate("/login")
    //     }
    // })
    console.log(token, "authdddddddd");
    return token ? <Outlet /> : <Navigate to="/login" replace={true} />
}

export default PrivateRoutes