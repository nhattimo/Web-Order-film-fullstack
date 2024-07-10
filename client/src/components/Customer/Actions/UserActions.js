import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import searchIcon from "../../../assets/icons/search.svg";
import heartIcon from "../../../assets/icons/heart.svg";
import buyIcon from "../../../assets/icons/buy.svg";
import logoutIcon from "../../../assets/icons/logout.svg";
import userIcon from "../../../assets/icons/user.svg";
import settingIcon from "../../../assets/icons/setting.svg";
import sunIcon from "../../../assets/icons/sun.svg";
import avtFace from "../../../assets/img/avt-face.jpg";
import arrowUpIcon from "../../../assets/icons/arrow-up.png";

const UserActions = ({ handleLogout }) => {
    const navigate = useNavigate();
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
        <>
            <div className="top-act">
                <div className="top-act__group d-md-none top-act__group--single">
                    <button className="top-act__btn">
                        <img
                            src={searchIcon}
                            alt="search icon"
                            className="top-act__icon icon"
                        />
                    </button>
                </div>

                <div className="top-act__group d-md-none">
                    <div className="top-act__btn--wrap">
                        <button className="top-act__btn">
                            <img
                                src={heartIcon}
                                alt="heart icon"
                                className="top-act__icon icon"
                            />
                            <span className="top-act__title">03</span>
                        </button>
                        {/* Dropdown */}
                        <div className="act-dropdown">
                            <div className="act-dropdown__inner">
                                <img
                                    src={arrowUpIcon}
                                    alt="arrow up icon"
                                    className="act-dropdown__arrow"
                                />
                                <div className="act-dropdown__top">
                                    <h2 className="act-dropdown__title">
                                        You have 3 item(s)
                                    </h2>
                                    <Link
                                        to="/favorites"
                                        className="act-dropdown__view-all"
                                    >
                                        See All
                                    </Link>
                                </div>
                                <div className="row row-cols-3 g-xl-2 act-dropdown__list">
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src={require("../../../assets/img/product-cart-item/item1.png")}
                                                    alt="product item"
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">
                                                Lavazza Coffee Blends
                                            </h3>
                                            <p className="cart-preview-item__price">
                                                $329.00
                                            </p>
                                        </article>
                                    </div>
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src={require("../../../assets/img/product-cart-item/item11.png")}
                                                    alt="product item"
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">
                                                Coffee Beans Espresso
                                            </h3>
                                            <p className="cart-preview-item__price">
                                                $39.99
                                            </p>
                                        </article>
                                    </div>
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src={require("../../../assets/img/product-cart-item/item12.png")}
                                                    alt="product item"
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">
                                                Qualità Oro Mountain
                                            </h3>
                                            <p className="cart-preview-item__price">
                                                $47.00
                                            </p>
                                        </article>
                                    </div>
                                </div>
                                <div className="act-dropdown__separate"></div>
                                <div className="act-dropdown__checkout">
                                    <Link
                                        to="/checkout"
                                        className="btn btn--primary btn--rounded act-dropdown__checkout-btn"
                                    >
                                        Check Out All
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="top-act__separate"></div>

                    <div className="top-act__btn--wrap">
                        <button className="top-act__btn">
                            <img
                                src={buyIcon}
                                alt="buy icon"
                                className="top-act__icon icon"
                            />
                            <span className="top-act__title">$65.42</span>
                        </button>

                        {/* Dropdown */}
                        <div className="act-dropdown">
                            <div className="act-dropdown__inner">
                                <img
                                    src={arrowUpIcon}
                                    alt="arrow up icon"
                                    className="act-dropdown__arrow"
                                />
                                <div className="act-dropdown__top">
                                    <h2 className="act-dropdown__title">
                                        You have 3 item(s)
                                    </h2>
                                    <Link
                                        to="/checkout"
                                        className="act-dropdown__view-all"
                                    >
                                        See All
                                    </Link>
                                </div>
                                <div className="row row-cols-3 g-xl-2 act-dropdown__list">
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src={require("../../../assets/img/product-cart-item/item1.png")}
                                                    alt="product item"
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">
                                                Lavazza Coffee Blends
                                            </h3>
                                            <p className="cart-preview-item__price">
                                                $329.00
                                            </p>
                                        </article>
                                    </div>
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src={require("../../../assets/img/product-cart-item/item11.png")}
                                                    alt="product item"
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">
                                                Coffee Beans Espresso
                                            </h3>
                                            <p className="cart-preview-item__price">
                                                $39.99
                                            </p>
                                        </article>
                                    </div>
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src={require("../../../assets/img/product-cart-item/item12.png")}
                                                    alt="product item"
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">
                                                Qualità Oro Mountain
                                            </h3>
                                            <p className="cart-preview-item__price">
                                                $47.00
                                            </p>
                                        </article>
                                    </div>
                                </div>
                                <div className="act-dropdown__bottom">
                                    <div className="act-dropdown__row">
                                        <span className="act-dropdown__label">
                                            Subtotal
                                        </span>
                                        <span className="act-dropdown__value">
                                            $415.99
                                        </span>
                                    </div>
                                    <div className="act-dropdown__row">
                                        <span className="act-dropdown__label">
                                            Texes
                                        </span>
                                        <span className="act-dropdown__value">
                                            Free
                                        </span>
                                    </div>
                                    <div className="act-dropdown__row">
                                        <span className="act-dropdown__label">
                                            Shipping
                                        </span>
                                        <span className="act-dropdown__value">
                                            $10.00
                                        </span>
                                    </div>
                                    <div className="act-dropdown__row act-dropdown__row--bold">
                                        <span className="act-dropdown__label">
                                            Total Price
                                        </span>
                                        <span className="act-dropdown__value">
                                            $425.99
                                        </span>
                                    </div>
                                </div>
                                <div className="act-dropdown__checkout">
                                    <Link
                                        to="/checkout"
                                        className="btn btn--primary btn--rounded act-dropdown__checkout-btn"
                                    >
                                        Check Out All
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-act__user">
                <img
                    src={
                        user ? `http://localhost:3000/${user.avatar}` : avtFace
                    }
                    alt="avatar"
                    className="top-act__avatar"
                />

                {/* Dropdown */}
                <div className="act-dropdown top-act__dropdown">
                    <div className="act-dropdown__inner user-menu">
                        <img
                            src={arrowUpIcon}
                            alt="arrow up icon"
                            className="act-dropdown__arrow top-act__arrow"
                        />
                        <div className="user-menu__top">
                            <img
                                src={
                                    user
                                        ? `http://localhost:3000/${user.avatar}`
                                        : avtFace
                                }
                                alt="avatar"
                                className="user-menu__avatar"
                            />
                            <div>
                                <p className="user-menu__name">
                                    {user
                                        ? `${user.firstName} ${user.lastName}`
                                        : "Loading..."}
                                </p>
                                <p>
                                    @
                                    {user
                                        ? user.accountCus.username
                                        : "Loading..."}
                                </p>
                            </div>
                        </div>
                        <ul className="user-menu__list">
                            <li>
                                <Link to="/profile" className="user-menu__link">
                                    <img
                                        src={userIcon}
                                        alt="user icon"
                                        className="icon user-menu__icon"
                                    />
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/favorites"
                                    className="user-menu__link"
                                >
                                    <img
                                        src={heartIcon}
                                        alt="heart icon"
                                        className="icon user-menu__icon"
                                    />
                                    Favorite List
                                </Link>
                            </li>
                            <li className="user-menu__separate">
                                <Link to="#!" className="user-menu__link">
                                    <img
                                        src={settingIcon}
                                        alt="setting icon"
                                        className="icon user-menu__icon"
                                    />
                                    Setting
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#!"
                                    className="user-menu__link"
                                    id="switch-theme-btn"
                                >
                                    <img
                                        src={sunIcon}
                                        alt="sun icon"
                                        className="icon user-menu__icon"
                                    />
                                    <span>Dark mode</span>
                                </Link>
                            </li>
                            <li className="user-menu__separate">
                                <button
                                    onClick={handleLogout}
                                    className="user-menu__link"
                                >
                                    <img
                                        src={logoutIcon}
                                        alt="logout icon"
                                        className="icon user-menu__icon"
                                    />
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserActions;
