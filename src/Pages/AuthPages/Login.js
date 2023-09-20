import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Layout from "../../Layout";
import { loginUser } from '../../Redux/Actions/AuthAction';
import { toastify } from '../../Utils/Function';
import { validPassword } from '../../Utils/Validation';
import { toast } from 'react-toastify';
import { setLocalStorage } from '../../Utils/LocalStorage';
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState(false)
    const loginState = useSelector((state) => state)
    const { Auth: { loginRequest } } = loginState;
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleSumbit = (e) => {
        e.preventDefault()
        if (!!loginData.username?.length && !!loginData.password?.length) {
            if (validPassword(loginData.password) && loginData.username?.length > 4) {

                dispatch(loginUser(loginData))

                // toastify("Login successfully", "dark")
                // navigate("/")
            } else {
                setError(true)
            }
        } else {
            setError(true)
        }
        setTimeout(() => setError(false), 5000)
    }
    useEffect(() => {
        if (loginRequest.status_code == 200) {
            toastify(toast.success, "Login Successfully", "dark")
            setTimeout(() => {
                const { access_token, refresh_token } = loginRequest
                setLocalStorage("access_token", access_token)
                setLocalStorage("refresh_token", refresh_token)
                navigate("/")
            }, 1000)

        } else {
            if (loginRequest?.response?.data?.status_code == 401) {
                toastify(toast.warning, loginRequest?.response?.data?.detail, "dark")
            }
        }

    }, [loginRequest])

    return (
        <div className="login-container mt-5 pt-4">
            <Layout >
                <section className="newsletter-section loginSection mt-4 mb-5 d-block">
                    <div className="anim-icons full-width">
                        <span className="icon icon-shape-3 wow fadeIn"></span>
                        <span className="icon icon-line-1 wow fadeIn"></span>
                    </div>
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-4"></div>
                            <div className="form-column col-lg-8 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="contact-form">
                                        <div className="sec-title text-center">
                                            <h2>Login</h2>
                                            <div className="text">Existing Member? Login</div>
                                        </div>
                                        <form
                                            method="post"
                                            action="login_submit.php"
                                            className="form"
                                            id="contact-form"
                                            onSubmit={(e) => handleSumbit(e)}>
                                            <div className="row clearfix">
                                                <div
                                                    className="col-lg-12 col-md-12 col-sm-12 form-group"
                                                    id="email error">
                                                    <input
                                                        type="text"
                                                        autofocus
                                                        placeholder="User Name"
                                                        tabindex="1"
                                                        required
                                                        value={loginData.username}
                                                        name="username"
                                                        onChange={(e) => handleLoginChange(e)} />
                                                    <p class="form-text " style={{ color: "red" }}>{(!loginData.username.length && error) ? "User Name is Required" : (loginData.username?.length < 4 && error) ? "User Name must be of more than 5 and less than 20 characters." : ""}</p>
                                                </div>

                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input
                                                        type="password"
                                                        placeholder="Enter Password"
                                                        maxlength="35"
                                                        id="pass"
                                                        tabindex="2"
                                                        required
                                                        value={loginData.password}
                                                        name="password"
                                                        onChange={(e) => handleLoginChange(e)} />
                                                    <p class="form-text " style={{ color: "red" }}>{(!loginData.password.length && error) ? "Email and Password is Required" : (error && !validPassword(loginData.password)) ? "Input accepts a combination of one uppercase & lowercase letter, number, special characters & minimum characters length 6. Even It will not accept any white spaces." : ""}</p>
                                                </div>

                                                <div className="col-lg-9 col-md-9 col-sm-9 mb-2 AcknowledgeSection">
                                                    <label
                                                        className="labelcss"
                                                        style={{ verticalAlign: `middle` }}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked
                                                            style={{ verticalAlign: `middle` }}
                                                        />
                                                    </label>
                                                    I Agree{" "}
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        tabindex="3"
                                                    >
                                                        <u>Terms of Service </u>
                                                    </a>{" "}
                                                    <span className="privacyPolicy">
                                                        {" "}
                                                        And
                                                        <a
                                                            href="#"
                                                            target="_blank"
                                                        >
                                                            <u> Privacy Policy*</u>
                                                        </a>
                                                    </span>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 mt-2 keepin_Sign">
                                                    <li className="switch-agileits float-left"></li>
                                                    <label
                                                        className="labelcss"
                                                        style={{ verticalAlign: `middle` }}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            style={{ verticalAlign: `middle` }}
                                                            name="remember_me"
                                                            value="1"
                                                            tabindex="4"
                                                        />
                                                        <span className="slider-switch round mx-1"></span>
                                                        Keep me signed in
                                                    </label>
                                                </div>

                                                <div className="col-lg-3 col-md-3 col-sm-3 mt-2 troubleSection">
                                                    <Link to="/forgot-password"
                                                        href="#"
                                                        className="ml-4"
                                                        tabindex="5"
                                                    >
                                                        Forgot Password?
                                                    </Link>
                                                </div>

                                                <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                                                    <div className="btn-box">
                                                        <button
                                                            className="theme-btn btn btn-style-one"
                                                            tabindex="6"
                                                            type="submit"
                                                            name="submit"
                                                            style={{ width: `100%` }}
                                                        >
                                                            <span className="btn-title">Log In</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 mt-3 registerSection">
                                                    <span className="">
                                                        {" "}
                                                        New Candidate Register ?
                                                        <Link
                                                            to="/signup"
                                                            tabindex="7"
                                                        >
                                                            {" "}
                                                            SignUp
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default Login