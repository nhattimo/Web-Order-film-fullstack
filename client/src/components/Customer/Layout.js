import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    const location = useLocation();
    const hideHeaderFooter =
        location.pathname === "/sign-in" ||
        location.pathname === "/sign-up" ||
        location.pathname === "/admin";

    return (
        <div>
            {!hideHeaderFooter && <Header />}
            <main>{children}</main>
            {!hideHeaderFooter && <Footer />}
        </div>
    );
};

export default Layout;
