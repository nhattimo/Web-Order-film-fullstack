import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DepartmentsMenu from "./DepartmentsMenu";
import GroceryMenu from "./GroceryMenu";
import BeautyMenu from "./BeautyMenu";
import moreIcon from "../../assets/icons/more.svg";
import logoIcon from "../../assets/icons/logo.svg";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import buyIcon from "../../assets/icons/buy.svg";
import heartIcon from "../../assets/icons/heart.svg";
import GuestActions from "./Actions/GuestActions";
import UserActions from "./Actions/UserActions";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Kiểm tra trạng thái đăng nhập
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        // Xóa token và điều hướng đến trang đăng nhập
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="top-bar">
                {/* More */}
                <button
                    className="top-bar__more d-none d-lg-block js-toggle"
                    toggle-target="#navbar"
                >
                    <img
                        src={moreIcon}
                        alt=""
                        className="top-bar__more--img icon"
                    />
                </button>

                {/* Logo */}
                <Link to="/" className="logo top-bar__logo">
                    <img
                        src={logoIcon}
                        alt="Grocery Mart"
                        className="logo__img top-bar__logo-img"
                    />
                    <h1 className="logo__title top-bar__logo-title">K2 Film</h1>
                </Link>

                {/* Navbar */}
                <nav id="navbar" className="navbar show">
                    <button
                        className="navbar__close-btn js-toggle"
                        toggle-target="#navbar"
                    >
                        <img src={arrowLeftIcon} alt="" className="icon" />
                    </button>

                    <Link to="/cart" className="nav-btn d-none d-md-flex">
                        <img
                            src={buyIcon}
                            alt=""
                            className="nav-btn__icon icon"
                        />
                        <span className="nav-btn__title">Cart</span>
                        <span className="nav-btn__qnt">3</span>
                    </Link>

                    <Link to="/favorites" className="nav-btn d-none d-md-flex">
                        <img
                            src={heartIcon}
                            alt=""
                            className="nav-btn__icon icon"
                        />
                        <span className="nav-btn__title">Favorite</span>
                        <span className="nav-btn__qnt">3</span>
                    </Link>

                    <ul className="navbar__list js-dropdown-list">
                        <DepartmentsMenu />
                        <GroceryMenu />
                        <BeautyMenu />
                    </ul>
                </nav>
                <div
                    className="navbar__overlay js-toggle"
                    toggle-target="#navbar"
                ></div>

                {/* Actions */}
                {isLoggedIn ? (
                    <UserActions handleLogout={handleLogout} />
                ) : (
                    <GuestActions />
                )}
            </div>
        </div>
    );
};

export default Header;
