import React from "react";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import cate11Icon from "../../assets/img/category/cate-1.1.svg";
import cate12Icon from "../../assets/img/category/cate-1.2.svg";
import cate21Icon from "../../assets/img/category/cate-2.1.svg";
import cate22Icon from "../../assets/img/category/cate-2.2.svg";
import cate31Icon from "../../assets/img/category/cate-3.1.svg";
import cate32Icon from "../../assets/img/category/cate-3.2.svg";
import cate41Icon from "../../assets/img/category/cate-4.1.svg";
import cate42Icon from "../../assets/img/category/cate-4.2.svg";
import cate51Icon from "../../assets/img/category/cate-5.1.svg";
import cate52Icon from "../../assets/img/category/cate-5.2.svg";
import cate61Icon from "../../assets/img/category/cate-6.1.svg";
import cate62Icon from "../../assets/img/category/cate-6.2.svg";

const DepartmentsMenu = () => (
    <li className="navbar__item">
        <a href="#!" className="navbar__link">
            Departments
            <img src={arrowDownIcon} alt="" className="icon navbar__arrow" />
        </a>
        <div className="dropdown js-dropdown">
            <div className="dropdown__inner">
                <div className="top-menu">
                    <div className="top-menu__main">
                        {/* Menu column */}
                        <div className="menu-column">
                            <div className="menu-column__icon d-lg-none">
                                <img
                                    src={cate11Icon}
                                    alt=""
                                    className="menu-column__icon-1"
                                />
                                <img
                                    src={cate12Icon}
                                    alt=""
                                    className="menu-column__icon-2"
                                />
                            </div>
                            <div className="menu-column__content">
                                <h2 className="menu-column__heading d-lg-none">
                                    All Departments
                                </h2>
                                <ul className="menu-column__list js-menu-list">
                                    <li className="menu-column__item">
                                        <a
                                            href="#!"
                                            className="menu-column__link"
                                        >
                                            Savings & Featured Shops
                                        </a>
                                        {/* Savings & Featured shops */}
                                        <div className="sub-menu">
                                            {/* Sub menu column 1 */}
                                            <div className="sub-menu__column">
                                                {/* Menu column 1.1 */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src={cate41Icon}
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src={cate42Icon}
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            Fashion
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Bags
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Jewelry
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Sub menu column 2 */}
                                            <div className="sub-menu__column">
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src={cate11Icon}
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src={cate12Icon}
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            Home & Living
                                                            Specials
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Furniture
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Kitchenware
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Decor
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Bedding
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Appliances
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Lighting
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Outdoor
                                                                    Furniture
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Home Office
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Bathroom
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Storage
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Cleaning
                                                                    Supplies
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-column__item">
                                        <a
                                            href="#!"
                                            className="menu-column__link"
                                        >
                                            Electronics
                                        </a>
                                        {/* Electronics */}
                                        <div className="sub-menu">
                                            {/* Sub menu column 1 */}
                                            <div className="sub-menu__column">
                                                {/* Menu column 1.1 */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src={cate21Icon}
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src={cate22Icon}
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            TV & Video
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Shop all TVs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    TVs by Size
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Smart TVs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Roku TVs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Streaming
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    TV Mounts &
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    DVD &
                                                                    Blu-Ray
                                                                    Players
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Menu column 1.2 */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src={cate31Icon}
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src={cate32Icon}
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            TV & Video
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Shop all TVs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    TVs by Size
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Smart TVs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Roku TVs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Streaming
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-column__item">
                                        <a
                                            href="#!"
                                            className="menu-column__link"
                                        >
                                            Clothing, Shoes & Accessories
                                        </a>
                                        {/* Sub menu for "Clothing, Shoes & Accessories" */}
                                        <div className="sub-menu">
                                            <div className="sub-menu__column">
                                                {/* Menu column 1 */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src={cate51Icon}
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src={cate52Icon}
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">
                                                                Men's Clothing
                                                            </a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Casual
                                                                    Shirts
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Formal Suits
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Jeans &
                                                                    Pants
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Outerwear
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    T-Shirts
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-column__item">
                                        <a
                                            href="#!"
                                            className="menu-column__link"
                                        >
                                            Home, Furniture & Appliances
                                        </a>
                                        {/* Sub menu for "Home, Furniture & Appliances" */}
                                        <div className="sub-menu">
                                            <div className="sub-menu__column">
                                                {/* Menu column 1 */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src={cate61Icon}
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src={cate62Icon}
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">
                                                                Living Room
                                                            </a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Sofa Sets
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Coffee
                                                                    Tables
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    TV Units
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Book Shelves
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Wall Decor
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Sub-Menu Column 3: Bedroom */}
                                            <div className="sub-menu__column">
                                                {/* Menu column 1 */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src={cate41Icon}
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src={cate42Icon}
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">
                                                                Bedroom
                                                            </a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Beds
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Wardrobes
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Dressing
                                                                    Tables
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Nightstands
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Mattresses
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Sub-Menu Column 4: Home Decor */}
                                            <div className="sub-menu__column">
                                                {/* Menu column 1 */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src={cate31Icon}
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src={cate32Icon}
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">
                                                                Home Decor
                                                            </a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Wall Art
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Vases
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Light
                                                                    Fixtures
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Curtains
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Carpets
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Menu column 2 */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src={cate21Icon}
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src={cate22Icon}
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">
                                                                Office Furniture
                                                            </a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Office
                                                                    Chairs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Desks
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Cabinets
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Meeting
                                                                    Tables
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Bookcases
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
);

export default DepartmentsMenu;
