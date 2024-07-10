import React from "react";
import logo from "../../assets/icons/logo.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import googleIcon from "../../assets/icons/google.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import telegramIcon from "../../assets/icons/telegram.svg";

const Footer = () => (
    <footer id="footer" className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="footer__top">
                    {/* Logo */}
                    <a href="./" className="logo footer__logo">
                        <img
                            src={logo}
                            alt="Grocery Mart"
                            className="logo__img"
                        />
                        <h1 className="logo__title">grocerymart</h1>
                    </a>
                    <div className="footer__row">
                        {/* List 1 */}
                        <div className="footer__col">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        WEEBLY THEMES
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        PRE-SALE FAQS
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        SUBMIT A TICKET
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* List 2 */}
                        <div className="footer__col">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        SERVICES
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        THEME TWEAK
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* List 3 */}
                        <div className="footer__col">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        SHOWCASE
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        WIDGET KIT
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        SUPPORT
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* List 4 */}
                        <div className="footer__col">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        ABOUT US
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        CONTACT US
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        AFFILIATES
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#!" className="footer__link">
                                        RESOURCES
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__separate"></div>

                <div className="footer__bot">
                    <div className="footer__icon-list">
                        <a href="#!">
                            <img
                                src={facebookIcon}
                                alt="Facebook"
                                className="footer__icon--item icon"
                            />
                        </a>
                        <a href="#!">
                            <img
                                src={googleIcon}
                                alt="Google"
                                className="footer__icon--item icon"
                            />
                        </a>
                        <a href="#!">
                            <img
                                src={instagramIcon}
                                alt="Instagram"
                                className="footer__icon--item icon"
                            />
                        </a>
                        <a href="#!">
                            <img
                                src={twitterIcon}
                                alt="Twitter"
                                className="footer__icon--item icon"
                            />
                        </a>
                        <a href="#!">
                            <img
                                src={telegramIcon}
                                alt="Telegram"
                                className="footer__icon--item icon"
                            />
                        </a>
                    </div>
                    <p className="footer__copyright">
                        ©Copyright. All right reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
