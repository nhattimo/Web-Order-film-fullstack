import React from "react";
import { Link } from "react-router-dom";

const GuestActions = () => (
    <div className="top-act">
        <Link to="/sign-in" className="btn btn--text d-md-none">
            Sign In
        </Link>
        <Link to="/sign-up" className="top-act__sign-up btn btn--primary">
            Sign Up
        </Link>
    </div>
);

export default GuestActions;
