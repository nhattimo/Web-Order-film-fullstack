import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SeatForm from "./SeatForm";
import "./SeatList.css";

const SeatList = () => {
    const { cinemaId } = useParams();
    const [seats, setSeats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSeats = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/seats/cinema/${cinemaId}`
                );
                setSeats(response.data);
            } catch (error) {
                console.error("Error fetching seats:", error);
                alert("Error fetching seats. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchSeats();
    }, [cinemaId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="seat-list__container">
            <h2>Seats for Cinema {cinemaId}</h2>
            <table className="seat-list__table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Row</th>
                        <th>Column</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {seats.map((seat) => (
                        <tr key={seat.id}>
                            <td>{seat.id}</td>
                            <td>{seat.name}</td>
                            <td>{seat.row_name}</td>
                            <td>{seat.column_name}</td>
                            <td>{seat.status}</td>
                            <td>{seat.type_seat?.type_chair}</td>
                            <td>
                                <button className="btn btn-secondary">
                                    Edit
                                </button>
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <SeatForm cinemaId={cinemaId} />
        </div>
    );
};

export default SeatList;
