import React from "react";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import cate151Icon from "../../assets/img/category/cate-15.1.svg";
import cate152Icon from "../../assets/img/category/cate-15.2.svg";
import cate161Icon from "../../assets/img/category/cate-16.1.svg";
import cate162Icon from "../../assets/img/category/cate-16.2.svg";
import cate171Icon from "../../assets/img/category/cate-17.1.svg";
import cate172Icon from "../../assets/img/category/cate-17.2.svg";
import cate181Icon from "../../assets/img/category/cate-18.1.svg";
import cate182Icon from "../../assets/img/category/cate-18.2.svg";
import cate191Icon from "../../assets/img/category/cate-19.1.svg";
import cate192Icon from "../../assets/img/category/cate-19.2.svg";
import cate201Icon from "../../assets/img/category/cate-20.1.svg";
import cate202Icon from "../../assets/img/category/cate-20.2.svg";

const BeautyMenu = () => (
    <li className="navbar__item">
        <a href="#!" className="navbar__link">
            Beauty
            <img src={arrowDownIcon} alt="" className="icon navbar__arrow" />
        </a>
        <div className="dropdown js-dropdown">
            <div className="dropdown__inner">
                <div className="top-menu">
                    <div className="sub-menu sub-menu__not-main">
                        {/* Sub menu column 1 */}
                        <div className="sub-menu__column">
                            {/* Menu column 1.1 */}
                            <div className="menu-column">
                                <div className="menu-column__icon">
                                    <img
                                        src={cate151Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate152Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Featured Shops
                                    </h2>
                                    <ul className="menu-column__list">
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Pickup Today in Beauty
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                BeautySpaceNK
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Equate Beauty
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Beauty Deals
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Walmart Exclusives
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Luxury Beauty Deals
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                New Arrivals
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Menu column 1.2 */}
                            <div className="menu-column">
                                <div className="menu-column__icon">
                                    <img
                                        src={cate161Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate162Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Trending in Beauty
                                    </h2>
                                    <ul className="menu-column__list">
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Trending Beauty Products
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Celebrate Earth Day
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Prom-ready Beauty
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Summer Beauty
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Travel Size & Minis
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sub menu column 2 */}
                        <div className="sub-menu__column">
                            {/* Menu column 2.1 */}
                            <div className="menu-column">
                                <div className="menu-column__icon">
                                    <img
                                        src={cate171Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate172Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Featured Brands
                                    </h2>
                                    <ul className="menu-column__list">
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Shop All
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                New in Bakery
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Sliced Bread
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Rolls & Buns
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Tortillas
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Breakfast Breads
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Pies
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Cookies & Brownies
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Menu column 2.2 */}
                            <div className="menu-column">
                                <div className="menu-column__icon">
                                    <img
                                        src={cate181Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate182Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Communities to Support
                                    </h2>
                                    <ul className="menu-column__list">
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Black Owned Beauty
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                LatinX Owned Beauty
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                AAPI Owned Beauty
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sub menu column 3 */}
                        <div className="sub-menu__column">
                            <div className="menu-column">
                                <div className="menu-column__icon">
                                    <img
                                        src={cate191Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate192Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Premium Beauty
                                    </h2>
                                    <ul className="menu-column__list">
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Shop All
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Hair Color
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Hair Care
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Skincare
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Fragrance
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Makeup
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Beauty Tech & Tools
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sub menu column 4 */}
                        <div className="sub-menu__column">
                            <div className="menu-column">
                                <div className="menu-column__icon">
                                    <img
                                        src={cate201Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate202Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Beauty
                                    </h2>
                                    <ul className="menu-column__list">
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Shop All
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Men's Grooming
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Bath & Body
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Beauty Tech & Tools
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Makeup
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Fragrance
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Nail Care
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Hair Care
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Hair Color
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Skincare
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
);

export default BeautyMenu;
