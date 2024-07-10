import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminSignIn.css";

import logo from "../../../assets/icons/logo.svg";
import messageIcon from "../../../assets/img/auth/message.svg";
import passIcon from "../../../assets/img/auth/pass.svg";
import formErrorIcon from "../../../assets/icons/form-error.svg";
import googleIcon from "../../../assets/img/auth/google.svg";
import introImg from "../../../assets/img/auth/intro.svg";

const AdminSignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/auth/employee/login",
                {
                    email: email,
                    password: password,
                }
            );
            localStorage.setItem("token", response.data.access_token);
            navigate("/admin/dashboard");
        } catch (err) {
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <main className="auth">
            <div className="auth__intro d-md-none">
                <img src={introImg} alt="" className="auth__intro-img" />
                <p className="auth__intro-text">
                    The best of luxury brand values, high quality products, and
                    innovative services
                </p>
            </div>

            <div className="auth__content">
                <div className="auth__content-inner">
                    <Link to="/" className="logo">
                        <img
                            src={logo}
                            alt="Admin Portal"
                            className="logo__img"
                        />
                        <h2 className="logo__title">Admin Portal</h2>
                    </Link>
                    <h1 className="auth__heading">Welcome Admin!</h1>
                    <p className="auth__desc">
                        Please sign in to access the admin dashboard.
                    </p>
                    <form onSubmit={handleSubmit} className="form auth__form">
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form__input"
                                    value={email}
                                    onChange={handleEmailChange}
                                    autoFocus
                                    required
                                />
                                <img
                                    src={messageIcon}
                                    alt=""
                                    className="form__input-icon"
                                />
                                <img
                                    src={formErrorIcon}
                                    alt=""
                                    className="form__input-icon-error"
                                />
                            </div>
                            <p className="form__error">
                                Email is not in correct format
                            </p>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="form__input"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                    minLength="6"
                                />
                                <img
                                    src={passIcon}
                                    alt=""
                                    className="form__input-icon"
                                />
                                <img
                                    src={formErrorIcon}
                                    alt=""
                                    className="form__input-icon-error"
                                />
                            </div>
                            <p className="form__error">
                                Password must be at least characters
                            </p>
                        </div>
                        {error && <p className="form__error">{error}</p>}
                        <div className="form__group auth__btn-group">
                            <button className="btn btn--primary auth__btn form__submit-btn">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AdminSignIn;
