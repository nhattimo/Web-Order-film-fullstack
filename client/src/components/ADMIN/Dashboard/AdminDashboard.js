import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css"; // Import file CSS

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard__container">
            <h1 className="admin-dashboard__heading">
                Welcome to the Admin Dashboard
            </h1>
            <nav className="admin-dashboard__nav">
                <ul className="admin-dashboard__nav-list">
                    <li className="admin-dashboard__nav-item">
                        <Link
                            to="/admin/movies"
                            className="admin-dashboard__nav-link"
                        >
                            Manage Movies
                        </Link>
                    </li>
                    <li className="admin-dashboard__nav-item">
                        <Link
                            to="/admin/schedules"
                            className="admin-dashboard__nav-link"
                        >
                            Manage Schedules
                        </Link>
                    </li>
                    <li className="admin-dashboard__nav-item">
                        <Link
                            to="/admin/seats"
                            className="admin-dashboard__nav-link"
                        >
                            Manage Seats
                        </Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboard;
