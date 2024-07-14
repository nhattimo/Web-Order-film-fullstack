import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MovieTimesPricesForm.css";

const MovieTimesPricesForm = ({ movieId }) => {
    const [movieTimesPrices, setMovieTimesPrices] = useState([]);
    const [formData, setFormData] = useState({
        unitPrice: "",
        startTime: new Date(),
        endTime: new Date(),
    });
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMovieTimesPrices = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("You are not authorized to perform this action.");
                return;
            }

            try {
                const response = await axios.get(
                    `http://localhost:3000/movieTimesPrice/movie/${movieId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setMovieTimesPrices(response.data);
            } catch (err) {
                console.error("Error fetching movie times and prices:", err);
                alert(
                    "Error fetching movie times and prices. Please try again." +
                        movieId
                );
            }
        };

        if (movieId) {
            fetchMovieTimesPrices();
        }
    }, [movieId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (name, date) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: date,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (!token) {
            alert("You are not authorized to perform this action.");
            return;
        }

        const dataToSend = {
            unitPrice: parseInt(formData.unitPrice, 10),
            movieId: parseInt(movieId, 10),
            startTime: formData.startTime.toISOString(),
            endTime: formData.endTime.toISOString(),
        };

        console.log("Data to send:", dataToSend);

        try {
            if (editingId) {
                await axios.put(
                    `http://localhost:3000/movieTimesPrice/${editingId}`,
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setEditingId(null);
            } else {
                await axios.post(
                    `http://localhost:3000/movieTimesPrice`,
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            }

            const response = await axios.get(
                `http://localhost:3000/movieTimesPrice/movie/${movieId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setMovieTimesPrices(response.data);
            setFormData({
                unitPrice: "",
                startTime: new Date(),
                endTime: new Date(),
            });
            alert("Movie times and prices saved successfully!");
        } catch (err) {
            console.error("Error saving movie times and prices:", err);
            setError("Error saving movie times and prices. Please try again.");
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("You are not authorized to perform this action.");
            return;
        }

        try {
            await axios.delete(`http://localhost:3000/movieTimesPrice/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMovieTimesPrices(
                movieTimesPrices.filter((mtp) => mtp.id !== id)
            );
            alert("Movie time and price deleted successfully!");
        } catch (err) {
            console.error("Error", err);
            setError("Error deleting movie time. Please try again.");
        }
    };

    const handleEdit = (mtp) => {
        setEditingId(mtp.id);
        setFormData({
            unitPrice: mtp.unitPrice.toString(),
            startTime: new Date(mtp.startTime),
            endTime: new Date(mtp.endTime),
        });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData({
            unitPrice: "",
            startTime: new Date(),
            endTime: new Date(),
        });
    };

    return (
        <div className="movie-times-prices-form__container">
            <h2>Movie Times and Prices</h2>
            <form onSubmit={handleSubmit} className="movie-times-prices-form">
                <div className="form-group">
                    <label>Unit Price</label>
                    <input
                        type="number"
                        name="unitPrice"
                        value={formData.unitPrice}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Start Time</label>
                    <DatePicker
                        selected={formData.startTime}
                        onChange={(date) => handleDateChange("startTime", date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="Pp"
                        timeCaption="time"
                    />
                </div>
                <div className="form-group">
                    <label>End Time</label>
                    <DatePicker
                        selected={formData.endTime}
                        onChange={(date) => handleDateChange("endTime", date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="Pp"
                        timeCaption="time"
                    />
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
            <div className="movie-times-prices-list">
                <h3>Existing Times and Prices</h3>
                <ul>
                    {movieTimesPrices.map((mtp) => (
                        <li key={mtp.id}>
                            {mtp.unitPrice} -{" "}
                            {new Date(mtp.startTime).toLocaleDateString(
                                "vi-VN"
                            )}{" "}
                            {new Date(mtp.startTime).toLocaleTimeString(
                                "vi-VN",
                                {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }
                            )}{" "}
                            to{" "}
                            {new Date(mtp.endTime).toLocaleDateString("vi-VN")}{" "}
                            {new Date(mtp.endTime).toLocaleTimeString("vi-VN", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                            <button
                                onClick={() => handleEdit(mtp)}
                                className="btn btn-secondary"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(mtp.id)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MovieTimesPricesForm;
