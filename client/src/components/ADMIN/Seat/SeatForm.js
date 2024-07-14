import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SeatForm.css";

const SeatForm = ({ cinemaId }) => {
    const [seats, setSeats] = useState([]);
    const [formData, setFormData] = useState({
        row: "",
        quantity: 0,
        typeId: "",
    });
    const [typeSeats, setTypeSeats] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchSeatsAndTypes = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("You are not authorized to perform this action.");
                return;
            }

            try {
                const seatResponse = await axios.get(
                    `http://localhost:3000/seats/cinema/${cinemaId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setSeats(seatResponse.data);

                const typeResponse = await axios.get(
                    "http://localhost:3000/typeseats",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setTypeSeats(typeResponse.data);
            } catch (err) {
                console.error("Error fetching data:", err);
                alert("Error fetching data. Please try again.");
            }
        };

        if (cinemaId) {
            fetchSeatsAndTypes();
        }
    }, [cinemaId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (!token) {
            alert("You are not authorized to perform this action.");
            return;
        }

        const dataToSend = [];
        for (let i = 1; i <= formData.quantity; i++) {
            dataToSend.push({
                name: `${formData.row}${i}`,
                cinemaId: parseInt(cinemaId, 10),
                typeId: parseInt(formData.typeId, 10),
            });
        }

        try {
            await axios.post("http://localhost:3000/seats/bulk", dataToSend, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const response = await axios.get(
                `http://localhost:3000/seats/cinema/${cinemaId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setSeats(response.data);
            setFormData({
                row: "",
                quantity: 0,
                typeId: "",
            });
            alert("Seats saved successfully!");
        } catch (err) {
            console.error("Error saving seats:", err);
            setError("Error saving seats. Please try again.");
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("You are not authorized to perform this action.");
            return;
        }

        try {
            await axios.delete(`http://localhost:3000/seats/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSeats(seats.filter((seat) => seat.id !== id));
            alert("Seat deleted successfully!");
        } catch (err) {
            console.error("Error deleting seat:", err);
            setError("Error deleting seat. Please try again.");
        }
    };

    const handleEdit = (seat) => {
        setEditingId(seat.id);
        setFormData({
            row: seat.name.slice(0, -1),
            quantity: 1,
            typeId: seat.typeId,
        });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData({
            row: "",
            quantity: 0,
            typeId: "",
        });
    };

    return (
        <div className="seat-form__container">
            <h2>Manage Seats for Cinema {cinemaId}</h2>
            <form onSubmit={handleSubmit} className="seat-form">
                <div className="form-group">
                    <label>Row</label>
                    <input
                        type="text"
                        name="row"
                        value={formData.row}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Type Seat</label>
                    <select
                        name="typeId"
                        value={formData.typeId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Type</option>
                        {typeSeats.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.type_chair}
                            </option>
                        ))}
                    </select>
                </div>
                {error && <p className="form-error">{error}</p>}
                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                        {editingId ? "Update" : "Save"} Changes
                    </button>
                    {editingId && (
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleCancelEdit}
                        >
                            Cancel Edit
                        </button>
                    )}
                </div>
            </form>
            <div className="seat-list">
                <h3>Existing Seats</h3>
                <div className="seat-grid">
                    {seats.map((seat) => (
                        <div
                            key={seat.id}
                            className={`seat-item ${
                                editingId === seat.id ? "editing" : ""
                            }`}
                        >
                            <div>{seat.name}</div>
                            <button
                                onClick={() => handleEdit(seat)}
                                className="btn btn-secondary"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(seat.id)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeatForm;
