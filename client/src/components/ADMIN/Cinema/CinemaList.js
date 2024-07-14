import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CinemaList.css";

const CinemaList = () => {
    const [cinemas, setCinemas] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCinemas = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("You are not authorized to perform this action.");
                return;
            }

            try {
                const response = await axios.get(
                    "http://localhost:3000/cinemas",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const cinemasData = response.data;
                setCinemas(cinemasData);
            } catch (error) {
                console.error("Error fetching cinemas:", error);
                alert("Error fetching cinemas. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchCinemas();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cinema-list__container">
            <h2>Manage Cinemas</h2>
            <ul className="cinema-list">
                {cinemas.map((cinema) => (
                    <li
                        key={cinema.id}
                        className="cinema-list__item"
                        onClick={() =>
                            navigate(`/admin/cinemas/${cinema.id}/schedules`)
                        }
                    >
                        <div className="cinema-list__info">
                            <h3>{cinema.name}</h3>
                            <p>{cinema.numberOfSeats} seats</p>{" "}
                            {/* Assuming API returns number_of_seats */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CinemaList;
