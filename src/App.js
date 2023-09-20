import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/bootstrap.css"
import "../src/assets/css/style.css"
import "../src/assets/css/newcss.css"
import "../src/assets/css/mynewstyle.css"
import "../src/assets/css/tooltip.css"
import "../src/assets/css/mystyle.css"
import "../src/assets/css/owl.css"

import { Route, Routes, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense, useEffect, useState } from "react";
import Loading from "./components/Loading";
import PrivateRoutes from "./PrivateRoutes";
import { getLocalStorage } from "./Utils/LocalStorage";
import ShowAll from "./Pages/ShowAll";


const Profile = lazy(() => import("./Pages/Profile"))
const Feed = lazy(() => import("./Container/HomeContainer"))
const SignUp = lazy(() => import("./Pages/AuthPages/SignUp"))
const Login = lazy(() => import("./Pages/AuthPages/Login"))
const ForgotPassword = lazy(() => import("./Pages/AuthPages/ForgotPassword"))
const MemberShip = lazy(() => import("./Pages/MemberShipPlans/MemberShip"))
const ConfirmPassword = lazy(() => import("./Pages/AuthPages/ConfirmPassword"))




function App() {
  const navigate = useNavigate()
  const [token, setToken] = useState('')
  useEffect(() => {
    if (!!getLocalStorage('access_token')) {
      setToken(!!getLocalStorage('access_token'))
      navigate("/")
    }
    setToken(getLocalStorage('access_token'))
  }, [])
  console.log(token, "tokentoken")
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loading />}><Feed /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
        <Route path="/forgot-password" element={<Suspense fallback={<Loading />}><ForgotPassword /></Suspense>} />
        <Route path="/reset-password" element={<Suspense fallback={<Loading />}><ConfirmPassword /></Suspense>} />
        <Route path="/signup" element={<Suspense fallback={<Loading />}><SignUp /></Suspense>} />
        <Route path="/membership" element={<Suspense fallback={<Loading />}><MemberShip /></Suspense>} />
        <Route path="/profile" element={<Suspense fallback={<Loading />}><Profile /></Suspense>} />
        <Route path="/show" element={<ShowAll />} />

        <Route path="/" element={<PrivateRoutes token={token} />}>
          <Route path="/" element={<Suspense fallback={<Loading />}><Feed /></Suspense>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
