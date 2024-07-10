import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Profile.css"; // Đảm bảo rằng bạn đã tạo và liên kết file CSS này
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
import phoneIcon from "../../../assets/icons/phone.svg";

const Profile = () => {
    const [user, setUser] = useState(null);

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
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="profile">
            <header id="header" className="header"></header>
            <script>
                {`load("#header", "./templates/header-logined.html");`}
            </script>

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
                            <div className="col-3 col-xl-4 col-lg-5 col-md-12">
                                <aside className="profile__sidebar">
                                    <div className="profile-user">
                                        <img
                                            src={
                                                user
                                                    ? `http://localhost:3000/${user.avatar}`
                                                    : avtFace
                                            }
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
                            <div className="col-9 col-xl-8 col-lg-7 col-md-12">
                                <div className="cart-info">
                                    <div className="row gy-3">
                                        <div className="col-12">
                                            <h2 className="cart-info__heading">
                                                My Wallet
                                            </h2>
                                            <p className="cart-info__desc profile__desc">
                                                Payment methods
                                            </p>

                                            <div className="row row-cols-3 row-cols-xl-2 row-cols-lg-1 gy-md-2">
                                                <div className="col">
                                                    <article
                                                        className="payment-cart"
                                                        style={{
                                                            "--bg-color":
                                                                "#1e2e69",
                                                        }}
                                                    >
                                                        <img
                                                            src="./assets/img/card/fly-bg.svg"
                                                            alt=""
                                                            className="payment-cart__img"
                                                        />
                                                        <div className="payment-cart__top">
                                                            <img
                                                                src="./assets/img/card/fly.svg"
                                                                alt=""
                                                            />
                                                            <span className="payment-cart__type">
                                                                FeatherCard
                                                            </span>
                                                        </div>
                                                        <div className="payment-cart__number">
                                                            1234 4567 8901 2221
                                                        </div>
                                                        <div className="payment-cart__bottom">
                                                            <div>
                                                                <p className="payment-cart__label">
                                                                    Card Holder
                                                                </p>
                                                                <p className="payment-cart__value">
                                                                    Imran Khan
                                                                </p>
                                                            </div>
                                                            <div className="payment-cart__expired">
                                                                <p className="payment-cart__label">
                                                                    Expired
                                                                </p>
                                                                <p className="payment-cart__value">
                                                                    10/22
                                                                </p>
                                                            </div>
                                                            <div className="payment-cart__circle"></div>
                                                        </div>
                                                    </article>
                                                </div>

                                                <div className="col">
                                                    <article
                                                        className="payment-cart"
                                                        style={{
                                                            "--bg-color":
                                                                "#354151",
                                                        }}
                                                    >
                                                        <img
                                                            src="./assets/img/card/leaf-bg.svg"
                                                            alt=""
                                                            className="payment-cart__img"
                                                        />
                                                        <div className="payment-cart__top">
                                                            <img
                                                                src="./assets/img/card/leaf.svg"
                                                                alt=""
                                                            />
                                                            <span className="payment-cart__type">
                                                                FeatherCard
                                                            </span>
                                                        </div>
                                                        <div className="payment-cart__number">
                                                            4567 8901 2221 1234
                                                        </div>
                                                        <div className="payment-cart__bottom">
                                                            <div>
                                                                <p className="payment-cart__label">
                                                                    Card Holder
                                                                </p>
                                                                <p className="payment-cart__value">
                                                                    Imran Khan
                                                                </p>
                                                            </div>
                                                            <div className="payment-cart__expired">
                                                                <p className="payment-cart__label">
                                                                    Expired
                                                                </p>
                                                                <p className="payment-cart__value">
                                                                    11/22
                                                                </p>
                                                            </div>
                                                            <div className="payment-cart__circle"></div>
                                                        </div>
                                                    </article>
                                                </div>

                                                <div className="col">
                                                    <a
                                                        href="./add-new-card.html"
                                                        className="new-card"
                                                    >
                                                        <img
                                                            src="./assets/icons/plus.svg"
                                                            alt=""
                                                            className="new-card__icon icon"
                                                        />
                                                        <p className="new-card__text">
                                                            Add New Card
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <h2 className="cart-info__heading">
                                                Account info
                                            </h2>
                                            <p className="cart-info__desc profile__desc">
                                                Addresses, contact information
                                            </p>
                                            <div className="row row-cols-2 row-cols-lg-1 gy-md-2">
                                                <div className="col">
                                                    <article className="account-info">
                                                        <div className="account-info__icon">
                                                            <img
                                                                src={mailIcon}
                                                                alt=""
                                                                className="icon"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h3 className="account-info__title">
                                                                Email Address
                                                            </h3>
                                                            <p className="account-info__desc">
                                                                {user
                                                                    ? user
                                                                          .accountCus
                                                                          .email
                                                                    : "Loading..."}
                                                            </p>
                                                        </div>
                                                    </article>
                                                </div>

                                                <div className="col">
                                                    <article className="account-info">
                                                        <div className="account-info__icon">
                                                            <img
                                                                src={phoneIcon}
                                                                alt=""
                                                                className="icon"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h3 className="account-info__title">
                                                                Phone number
                                                            </h3>
                                                            <p className="account-info__desc">
                                                                {user
                                                                    ? user.phoneNumber
                                                                    : "Loading..."}
                                                            </p>
                                                        </div>
                                                    </article>
                                                </div>

                                                <div className="col">
                                                    <article className="account-info">
                                                        <div className="account-info__icon">
                                                            <img
                                                                src={
                                                                    locationIcon
                                                                }
                                                                alt=""
                                                                className="icon"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h3 className="account-info__title">
                                                                Add an address
                                                            </h3>
                                                            <p className="account-info__desc">
                                                                {user
                                                                    ? `${user.city}, ${user.country}`
                                                                    : "Loading..."}
                                                            </p>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <h2 className="cart-info__heading">
                                                Lists
                                            </h2>
                                            <p className="cart-info__desc profile__desc">
                                                2 items - Primary
                                            </p>

                                            <article className="favorite-item">
                                                <img
                                                    src="./assets/img/product-cart-item/item11.png"
                                                    alt=""
                                                    className="favorite-item__thumb"
                                                />
                                                <div>
                                                    <h3 className="favorite-item__title">
                                                        Coffee Beans - Espresso
                                                        Arabica and Robusta
                                                        Beans
                                                    </h3>
                                                    <div className="favorite-item__content">
                                                        <span className="favorite-item__price">
                                                            $47.00
                                                        </span>
                                                        <button className="btn btn--primary btn--rounded">
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </article>

                                            <div
                                                className="separate"
                                                style={{ "--margin": "20px" }}
                                            ></div>

                                            <article className="favorite-item">
                                                <img
                                                    src="./assets/img/product-cart-item/item3.png"
                                                    alt=""
                                                    className="favorite-item__thumb"
                                                />
                                                <div>
                                                    <h3 className="favorite-item__title">
                                                        Lavazza Coffee Blends -
                                                        Try the Italian Espresso
                                                    </h3>
                                                    <div className="favorite-item__content">
                                                        <span className="favorite-item__price">
                                                            $53.00
                                                        </span>
                                                        <button className="btn btn--primary btn--rounded">
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </article>
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

export default Profile;
