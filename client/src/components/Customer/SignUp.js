import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/css/main.css";

import logo from "../../assets/icons/logo.svg";
import messageIcon from "../../assets/img/auth/message.svg";
import passIcon from "../../assets/img/auth/pass.svg";
import formErrorIcon from "../../assets/icons/form-error.svg";
import googleIcon from "../../assets/img/auth/google.svg";
import introImg from "../../assets/img/auth/intro.svg";
import introArrow from "../../assets/img/auth/intro-arrow.svg";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        phoneNumber: "",
        city: "",
        country: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:3000/customer/register",
                formData
            );

            if (response.status === 201) {
                navigate("/sign-in");
            }
        } catch (error) {
            console.error(error);
            setErrors({ api: "Registration failed. Please try again." });
        }
    };

    return (
        <main className="auth">
            <div className="auth__intro">
                <Link to="/" className="logo auth__intro-logo d-none d-md-flex">
                    <img src={logo} alt="Grocery Mart" className="logo__img" />
                    <h1 className="logo__title">grocerymart</h1>
                </Link>
                <img src={introImg} alt="" className="auth__intro-img" />
                <p className="auth__intro-text">
                    The best of luxury brand values, high quality products, and
                    innovative services
                </p>
                <button
                    className="auth__intro-next d-none d-md-block js-toggle"
                    toggle-target="#auth__content"
                >
                    <img src={introArrow} alt="" />
                </button>
            </div>

            <div id="auth__content" className="auth__content hide">
                <div className="auth__content-inner">
                    <Link to="/" className="logo">
                        <img
                            src={logo}
                            alt="Grocery Mart"
                            className="logo__img"
                        />
                        <h2 className="logo__title">grocerymart</h2>
                    </Link>
                    <h1 className="auth__heading">Sign Up</h1>
                    <p className="auth__desc">
                        Let’s create your account and Shop like a pro and save
                        money.
                    </p>
                    <form className="form auth__form" onSubmit={handleSubmit}>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    className="form__input"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                <img
                                    src={messageIcon}
                                    alt=""
                                    className="form__input-icon"
                                />
                                {errors.username && (
                                    <img
                                        src={formErrorIcon}
                                        alt=""
                                        className="form__input-icon-error"
                                    />
                                )}
                            </div>
                            {errors.username && (
                                <p className="form__error">{errors.username}</p>
                            )}
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form__input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <img
                                    src={messageIcon}
                                    alt=""
                                    className="form__input-icon"
                                />
                                {errors.email && (
                                    <img
                                        src={formErrorIcon}
                                        alt=""
                                        className="form__input-icon-error"
                                    />
                                )}
                            </div>
                            {errors.email && (
                                <p className="form__error">{errors.email}</p>
                            )}
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form__input"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    minLength="6"
                                />
                                <img
                                    src={passIcon}
                                    alt=""
                                    className="form__input-icon"
                                />
                                {errors.password && (
                                    <img
                                        src={formErrorIcon}
                                        alt=""
                                        className="form__input-icon-error"
                                    />
                                )}
                            </div>
                            {errors.password && (
                                <p className="form__error">{errors.password}</p>
                            )}
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="form__input"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    minLength="6"
                                />
                                <img
                                    src={passIcon}
                                    alt=""
                                    className="form__input-icon"
                                />
                                {errors.confirmPassword && (
                                    <img
                                        src={formErrorIcon}
                                        alt=""
                                        className="form__input-icon-error"
                                    />
                                )}
                            </div>
                            {errors.confirmPassword && (
                                <p className="form__error">
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="form__input"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="form__input"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="date"
                                    name="birthDate"
                                    placeholder="Birth Date"
                                    className="form__input"
                                    value={formData.birthDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    className="form__input"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="form__input"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                    className="form__input"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        {errors.api && (
                            <p className="form__error">{errors.api}</p>
                        )}
                        <div className="form__group auth__btn-group">
                            <button className="btn btn--primary auth__btn form__submit-btn">
                                Sign Up
                            </button>
                            <button className="btn btn--outline auth__btn bnt--no-margin">
                                <img
                                    src={googleIcon}
                                    alt=""
                                    className="btn__icon icon"
                                />
                                Sign in with Gmail
                            </button>
                        </div>
                    </form>
                    <p className="auth__text">
                        You have an account yet?
                        <Link
                            to="/sign-in"
                            className="auth__link auth__text-link"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default SignUp;
