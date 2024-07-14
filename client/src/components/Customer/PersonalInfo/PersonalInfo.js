import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import searchIcon from "../../../assets/icons/search.svg";
import userIcon from "../../../assets/icons/user.svg";
import locationIcon from "../../../assets/icons/location.svg";
import mailIcon from "../../../assets/icons/mail.svg";
import reorderIcon from "../../../assets/icons/reorder.svg";
import heartIcon from "../../../assets/icons/heart.svg";
import registriesIcon from "../../../assets/icons/registries.svg";
import protectionIcon from "../../../assets/icons/protection.svg";
import helpIcon from "../../../assets/icons/help.svg";
import termsIcon from "../../../assets/icons/terms.svg";
import avtFace from "../../../assets/img/avt-face.jpg";
import arrowLeftIcon from "../../../assets/icons/arrow-left.svg";
// import "./PersonalInfo.css"; // Tạo và liên kết file CSS

const PersonalInfo = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        phoneNumber: "",
        city: "",
        country: "",
        email: "",
        password: "", // Leave password empty for now
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/customer/me",
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
                const userData = response.data;
                setUser(userData);
                setFormData({
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    birthDate: userData.birthDate,
                    phoneNumber: userData.phoneNumber,
                    city: userData.city,
                    country: userData.country,
                    email: userData.accountCus.email,
                    password: "", // Leave password empty for now
                });
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (!token) {
            setErrors("You are not authorized to perform this action.");
            return;
        }
        const {
            firstName,
            lastName,
            birthDate,
            phoneNumber,
            city,
            country,
            email,
            password,
        } = formData;

        console.log({
            firstName,
            lastName,
            birthDate,
            phoneNumber,
            city,
            country,
            email,
            password,
        }); // Log dữ liệu gửi đi để kiểm tra

        try {
            // Update personal information
            await axios.put(
                "http://localhost:3000/customer/profile/me",
                {
                    firstName,
                    lastName,
                    birthDate,
                    phoneNumber,
                    city,
                    country,
                    email,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert("Profile updated successfully!");
            navigate("/profile");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("An error occurred while updating the profile.");
        }
    };

    return (
        <div className="profile">
            <header id="header" className="header"></header>
            <script>{`load("#header", "./templates/header-logined.html");`}</script>

            <main className="profile">
                <div className="container">
                    <div className="profile-container">
                        <div className="search-bar d-none d-md-flex">
                            <input
                                type="text"
                                placeholder="Search for item"
                                className="search-bar__input"
                            />
                            <button className="search-bar__submit">
                                <img
                                    src={searchIcon}
                                    alt="search icon"
                                    className="search-bar__icon icon"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="profile-container">
                        <div className="row gy-md-3">
                            <div className="col-3 col-xl-4 col-lg-5 col-md-12 d-lg-none">
                                <aside className="profile__sidebar">
                                    <div className="profile-user">
                                        <img
                                            src={avtFace}
                                            alt="avatar"
                                            className="profile-user__avatar"
                                        />
                                        <h1 className="profile-user__name">
                                            {user
                                                ? `${user.firstName} ${user.lastName}`
                                                : "Loading..."}
                                        </h1>
                                        <p className="profile-user__desc">
                                            Registered:{" "}
                                            {user
                                                ? new Date(
                                                      user.createdAt
                                                  ).toLocaleDateString()
                                                : "Loading..."}
                                        </p>
                                    </div>

                                    <div className="profile-menu">
                                        <h3 className="profile-menu__title">
                                            Manage Account
                                        </h3>
                                        <ul className="profile-menu__list">
                                            <li>
                                                <Link
                                                    to="/edit-personal-info"
                                                    className="profile-menu__link"
                                                >
                                                    <span className="profile-menu__icon">
                                                        <img
                                                            src={userIcon}
                                                            alt="user icon"
                                                            className="icon"
                                                        />
                                                    </span>
                                                    Personal info
                                                </Link>
                                            </li>
                                            <li>
                                                <a
                                                    href="#!"
                                                    className="profile-menu__link"
                                                >
                                                    <span className="profile-menu__icon">
                                                        <img
                                                            src={locationIcon}
                                                            alt="location icon"
                                                            className="icon"
                                                        />
                                                    </span>
                                                    Addresses
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#!"
                                                    className="profile-menu__link"
                                                >
                                                    <span className="profile-menu__icon">
                                                        <img
                                                            src={mailIcon}
                                                            alt="mail icon"
                                                            className="icon"
                                                        />
                                                    </span>
                                                    Communications & privacy
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="profile-menu">
                                        <h3 className="profile-menu__title">
                                            My items
                                        </h3>
                                        <ul className="profile-menu__list">
                                            <li>
                                                <a
                                                    href="#!"
                                                    className="profile-menu__link"
                                                >
                                                    <span className="profile-menu__icon">
                                                        <img
                                                            src={reorderIcon}
                                                            alt="reorder icon"
                                                            className="icon"
                                                        />
                                                    </span>
                                                    Reorder
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#!"
                                                    className="profile-menu__link"
                                                >
                                                    <span className="profile-menu__icon">
                                                        <img
                                                            src={heartIcon}
                                                            alt="heart icon"
                                                            className="icon"
                                                        />
                                                    </span>
                                                    Lists
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#!"
                                                    className="profile-menu__link"
                                                >
                                                    <span className="profile-menu__icon">
                                                        <img
                                                            src={registriesIcon}
                                                            alt="registries icon"
                                                            className="icon"
                                                        />
                                                    </span>
                                                    Registries
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="profile-menu">
                                        <h3 className="profile-menu__title">
                                            Subscriptions & plans
                                        </h3>
                                        <ul className="profile-menu__list">
                                            <li>
                                                <a
                                                    href="#!"
                                                    className="profile-menu__link"
                                                >
                                                    <span className="profile-menu__icon">
                                                        <img
                                                            src={protectionIcon}
                                                            alt="protection icon"
                                                            className="icon"
                                                        />
                                                    </span>
                                                    Protection plans
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="profile-menu">
                                        <h3 className="profile-menu__title">
                                            Customer Service
                                        </h3>
                                        <ul className="profile-menu__list">
                                            <li>
                                                <a
                                                    href="#!"
                                                    className="profile-menu__link"
                                                >
                                                    <span className="profile-menu__icon">
                                                        <img
                                                            src={helpIcon}
                                                            alt="help icon"
                                                            className="icon"
                                                        />
                                                    </span>
                                                    Help
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#!"
                                                    className="profile-menu__link"
                                                >
                                                    <span className="profile-menu__icon">
                                                        <img
                                                            src={termsIcon}
                                                            alt="terms icon"
                                                            className="icon"
                                                        />
                                                    </span>
                                                    Terms of Use
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-9 col-xl-8 col-lg-12">
                                <div className="cart-info">
                                    <div className="row gy-3">
                                        <div className="col-12">
                                            <h2 className="cart-info__heading--lv2">
                                                <a href="./profile.html">
                                                    <img
                                                        src={arrowLeftIcon}
                                                        alt=""
                                                        className="cart-info__back-arrow icon"
                                                    />
                                                </a>
                                                Personal info
                                            </h2>

                                            <form
                                                onSubmit={handleSubmit}
                                                className="form form-card"
                                            >
                                                <div className="form__row">
                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="firstName"
                                                            className="form__label form-card__label"
                                                        >
                                                            First name
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="text"
                                                                name="firstName"
                                                                id="firstName"
                                                                placeholder="First name"
                                                                className="form__input"
                                                                value={
                                                                    formData.firstName
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                                autoFocus
                                                            />
                                                            {errors.firstName && (
                                                                <img
                                                                    src="./assets/icons/form-error.svg"
                                                                    alt=""
                                                                    className="form__input-icon-error"
                                                                />
                                                            )}
                                                        </div>
                                                        {errors.firstName && (
                                                            <p className="form__error">
                                                                {
                                                                    errors.firstName
                                                                }
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="lastName"
                                                            className="form__label form-card__label"
                                                        >
                                                            Last name
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="text"
                                                                name="lastName"
                                                                id="lastName"
                                                                placeholder="Last name"
                                                                className="form__input"
                                                                value={
                                                                    formData.lastName
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                            />
                                                            {errors.lastName && (
                                                                <img
                                                                    src="./assets/icons/form-error.svg"
                                                                    alt=""
                                                                    className="form__input-icon-error"
                                                                />
                                                            )}
                                                        </div>
                                                        {errors.lastName && (
                                                            <p className="form__error">
                                                                {
                                                                    errors.lastName
                                                                }
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="form__row">
                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="birthDate"
                                                            className="form__label form-card__label"
                                                        >
                                                            Birth Date
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="date"
                                                                name="birthDate"
                                                                id="birthDate"
                                                                placeholder="Birth Date"
                                                                className="form__input"
                                                                value={
                                                                    formData.birthDate
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                            />
                                                            {errors.birthDate && (
                                                                <img
                                                                    src="./assets/icons/form-error.svg"
                                                                    alt=""
                                                                    className="form__input-icon-error"
                                                                />
                                                            )}
                                                        </div>
                                                        {errors.birthDate && (
                                                            <p className="form__error">
                                                                {
                                                                    errors.birthDate
                                                                }
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="phoneNumber"
                                                            className="form__label form-card__label"
                                                        >
                                                            Phone number
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="tel"
                                                                name="phoneNumber"
                                                                id="phoneNumber"
                                                                placeholder="Phone number"
                                                                className="form__input"
                                                                value={
                                                                    formData.phoneNumber
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                            />
                                                            {errors.phoneNumber && (
                                                                <img
                                                                    src="./assets/icons/form-error.svg"
                                                                    alt=""
                                                                    className="form__input-icon-error"
                                                                />
                                                            )}
                                                        </div>
                                                        {errors.phoneNumber && (
                                                            <p className="form__error">
                                                                {
                                                                    errors.phoneNumber
                                                                }
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="form__row">
                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="city"
                                                            className="form__label form-card__label"
                                                        >
                                                            City
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="text"
                                                                name="city"
                                                                id="city"
                                                                placeholder="City"
                                                                className="form__input"
                                                                value={
                                                                    formData.city
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                            />
                                                            {errors.city && (
                                                                <img
                                                                    src="./assets/icons/form-error.svg"
                                                                    alt=""
                                                                    className="form__input-icon-error"
                                                                />
                                                            )}
                                                        </div>
                                                        {errors.city && (
                                                            <p className="form__error">
                                                                {errors.city}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="country"
                                                            className="form__label form-card__label"
                                                        >
                                                            Country
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="text"
                                                                name="country"
                                                                id="country"
                                                                placeholder="Country"
                                                                className="form__input"
                                                                value={
                                                                    formData.country
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                            />
                                                            {errors.country && (
                                                                <img
                                                                    src="./assets/icons/form-error.svg"
                                                                    alt=""
                                                                    className="form__input-icon-error"
                                                                />
                                                            )}
                                                        </div>
                                                        {errors.country && (
                                                            <p className="form__error">
                                                                {errors.country}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="form__row">
                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="email"
                                                            className="form__label form-card__label"
                                                        >
                                                            Email address
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"
                                                                className="form__input"
                                                                value={
                                                                    formData.email
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                            />
                                                            {errors.email && (
                                                                <img
                                                                    src="./assets/icons/form-error.svg"
                                                                    alt=""
                                                                    className="form__input-icon-error"
                                                                />
                                                            )}
                                                        </div>
                                                        {errors.email && (
                                                            <p className="form__error">
                                                                {errors.email}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="password"
                                                            className="form__label form-card__label"
                                                        >
                                                            Password
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                id="password"
                                                                placeholder="Password"
                                                                className="form__input"
                                                                value={
                                                                    formData.password
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                            />
                                                            {errors.password && (
                                                                <img
                                                                    src="./assets/icons/form-error.svg"
                                                                    alt=""
                                                                    className="form__input-icon-error"
                                                                />
                                                            )}
                                                        </div>
                                                        {errors.password && (
                                                            <p className="form__error">
                                                                {
                                                                    errors.password
                                                                }
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="form-card__bottom">
                                                    <a
                                                        href="./profile.html"
                                                        className="btn btn--text"
                                                    >
                                                        Cancel
                                                    </a>
                                                    <button className="btn btn--primary btn--rounded">
                                                        Save Edit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer id="footer" className="footer"></footer>
            <script>{`load("#footer", "./templates/footer.html");`}</script>

            <div id="delete-confirm" className="modal modal--small hide">
                <div className="modal__content">
                    <p className="modal__text">
                        Are you want remove this item from shopping cart?
                    </p>
                    <div className="modal__bottom">
                        <button
                            className="btn btn--small btn--outline modal__btn js-toggle"
                            toggle-target="#delete-confirm"
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn--small btn--primary btn--danger modal__btn btn--no-margin js-toggle"
                            toggle-target="#delete-confirm"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div
                    className="modal__overlay js-toggle"
                    toggle-target="#delete-confirm"
                ></div>
            </div>
        </div>
    );
};

export default PersonalInfo;
