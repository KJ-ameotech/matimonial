import React from 'react';
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
const Profile = lazy(() => import("../Pages/Profile"))
const Feed = lazy(() => import("../Container/HomeContainer"))
const SignUp = lazy(() => import("../Pages/AuthPages/SignUp"))
const Login = lazy(() => import("../Pages/AuthPages/Login"))
const ForgotPassword = lazy(() => import("../Pages/AuthPages/ForgotPassword"))
const MemberShip = lazy(() => import("../Pages/MemberShipPlans/MemberShip"))
const ConfirmPassword = lazy(() => import("../Pages/AuthPages/ConfirmPassword"))
const AboutUs = lazy(() => import('../Pages/About/AboutUs'))
const Contactus = lazy(() => import('../Pages/ContactUs'))
const ProfileUserDetail = lazy(() => import('../Pages/Profile/ProfileUserDetail'))
const AppRoutes = ({ auth }) => {
    return (
        <Routes>
            <Route path="/profile"
                Component={(props) => auth ? (<Suspense fallback={<Loading />}><Profile {...props} /> </Suspense>) : (
                    <Navigate to="/login" replace />)} />
            <Route path="/profile-info"
                Component={(props) => auth ? (
                    <Suspense fallback={<Loading />}><ProfileUserDetail {...props} /> </Suspense>) : (
                    <Navigate to="/login" replace />)} />


            <Route path="/login"
                Component={(props) => !auth ? (
                    <Suspense fallback={<Loading />}><Login  {...props} /></Suspense>) : (
                    <Navigate to="/" replace />)}
            />
            <Route path="/forgot-password"
                Component={(props) => !auth ? (
                    <Suspense fallback={<Loading />}><ForgotPassword  {...props} /></Suspense>) : (
                    <Navigate to="/" replace />)}
            />

            <Route path="/reset-password"
                Component={(props) => !auth ? (
                    <Suspense fallback={<Loading />}><ConfirmPassword  {...props} /></Suspense>) : (
                    <Navigate to="/" replace />)}
            />
            <Route path="/signup"
                Component={(props) => !auth ? (<Suspense fallback={<Loading />}><SignUp  {...props} /></Suspense>) : (
                    <Navigate to="/" replace />)}
            />

            <Route path="/contact-us" element={<Suspense fallback={<Loading />}><Contactus /></Suspense>} />
            <Route path="/" element={<Suspense fallback={<Loading />}><Feed /></Suspense>} />
            <Route path="/membership" element={<Suspense fallback={<Loading />}><MemberShip /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<Loading />}><AboutUs /></Suspense>} />
            <Route path="*" element={<Navigate to="/" replace />} />


            {/* <Route path="/" element={<Suspense fallback={<Loading />}><Feed /></Suspense>} />
    <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
    <Route path="/forgot-password" element={<Suspense fallback={<Loading />}><ForgotPassword /></Suspense>} />
    <Route path="/reset-password" element={<Suspense fallback={<Loading />}><ConfirmPassword /></Suspense>} />
    <Route path="/signup" element={<Suspense fallback={<Loading />}><SignUp /></Suspense>} />
    <Route path="/membership" element={<Suspense fallback={<Loading />}><MemberShip /></Suspense>} /> */}
        </Routes>
    )
}

export default AppRoutes