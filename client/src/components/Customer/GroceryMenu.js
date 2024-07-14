import React from "react";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import cate71Icon from "../../assets/img/category/cate-7.1.svg";
import cate72Icon from "../../assets/img/category/cate-7.2.svg";
import cate81Icon from "../../assets/img/category/cate-8.1.svg";
import cate82Icon from "../../assets/img/category/cate-8.2.svg";
import cate91Icon from "../../assets/img/category/cate-9.1.svg";
import cate92Icon from "../../assets/img/category/cate-9.2.svg";
import cate101Icon from "../../assets/img/category/cate-10.1.svg";
import cate102Icon from "../../assets/img/category/cate-10.2.svg";
import cate111Icon from "../../assets/img/category/cate-11.1.svg";
import cate112Icon from "../../assets/img/category/cate-11.2.svg";
import cate121Icon from "../../assets/img/category/cate-12.1.svg";
import cate122Icon from "../../assets/img/category/cate-12.2.svg";
import cate131Icon from "../../assets/img/category/cate-13.1.svg";
import cate132Icon from "../../assets/img/category/cate-13.2.svg";
import cate141Icon from "../../assets/img/category/cate-14.1.svg";
import cate142Icon from "../../assets/img/category/cate-14.2.svg";

const GroceryMenu = () => (
    <li className="navbar__item">
        <a href="#!" className="navbar__link">
            Grocery
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
                                        src={cate71Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate72Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Grocery
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
                                                Grilling Foods
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Spring Flavors
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Menu column 1.2 */}
                            <div className="menu-column">
                                <div className="menu-column__icon">
                                    <img
                                        src={cate81Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate82Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Fresh Produce
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
                                                Celebrate Salad Month
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Healthy Living
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Fresh Flowers
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Chilled Dressing
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Fresh Fruit
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Salad Kits & Bowls
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Organic Produce
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Fresh Vegetables
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
                                        src={cate91Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate92Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Bakery & Bread
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
                                        src={cate101Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate102Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Frozen
                                    </h2>
                                    <ul className="menu-column__list">
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Frozen Breakfast
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Frozen Potatoes
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Frozen Meals & Snacks
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sub menu column 3 */}
                        <div className="sub-menu__column">
                            {/* Menu column 3.1 */}
                            <div className="menu-column">
                                <div className="menu-column__icon">
                                    <img
                                        src={cate111Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate112Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Snacks
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
                                                Chips
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Popcorn & Pretzels
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Crackers
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Salsa & Dips
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Menu column 3.2 */}
                            <div className="menu-column">
                                <div className="menu-column__icon">
                                    <img
                                        src={cate121Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate122Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Candy
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
                                                Better for You
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Chocolate
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Sugar Free Candy
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Gum
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Mints
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                On-the-Go
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sub menu column 4 */}
                        <div className="sub-menu__column">
                            {/* Menu column 4.1 */}
                            <div className="menu-column">
                                <div className="menu-column__icon">
                                    <img
                                        src={cate131Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate132Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Cocktails & Mixes Coffee
                                    </h2>
                                    <ul className="menu-column__list">
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Ground Coffee
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Whole Bean Coffee
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Coffee Pods
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Instant Coffee
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Menu column 4.2 */}
                            <div className="menu-column">
                                <div className="menu-column__icon">
                                    <img
                                        src={cate141Icon}
                                        alt=""
                                        className="menu-column__icon-1"
                                    />
                                    <img
                                        src={cate142Icon}
                                        alt=""
                                        className="menu-column__icon-2"
                                    />
                                </div>
                                <div className="menu-column__content">
                                    <h2 className="menu-column__heading">
                                        Beverages
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
                                                Water
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Soft Drinks
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Fruit Juice
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Sports Drinks
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Energy Drinks
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Tea
                                            </a>
                                        </li>
                                        <li className="menu-column__item">
                                            <a
                                                href="#!"
                                                className="menu-column__link"
                                            >
                                                Hot Chocolate & Cocoas
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

export default GroceryMenu;
