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
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMovieTimesPrices = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/movieTimesPrice/movie/${movieId}`
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
            ...formData,
            movieId: parseInt(movieId, 10), // Ensure movieId is an integer
            unitPrice: parseInt(formData.unitPrice, 10), // Ensure unitPrice is an integer
            startTime: formData.startTime.toISOString(),
            endTime: formData.endTime.toISOString(),
        };

        console.log("Data to send:", dataToSend); // Log dữ liệu trước khi gửi lên API

        try {
            await axios.post(
                `http://localhost:3000/movieTimesPrice`,
                dataToSend,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // Fetch the updated list after adding a new item
            const response = await axios.get(
                `http://localhost:3000/movieTimesPrice/movie/${movieId}`
            );
            setMovieTimesPrices(response.data);
            setFormData({
                unitPrice: "",
                startTime: new Date(),
                endTime: new Date(),
            });
            alert("Movie times and prices added successfully!");
        } catch (err) {
            console.error("Error saving movie times and prices:", err);
            setError("Error saving movie times and prices. Please try again.");
        }
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
                        Save Changes
                    </button>
                </div>
            </form>
            <div className="movie-times-prices-list">
                <h3>Existing Times and Prices</h3>
                <ul>
                    {movieTimesPrices.map((mtp) => (
                        <li key={mtp.id}>
                            {mtp.unitPrice} -{" "}
                            {new Date(mtp.startTime).toLocaleDateString()}{" "}
                            {new Date(mtp.startTime).toLocaleTimeString(
                                "en-GB",
                                {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }
                            )}{" "}
                            to {new Date(mtp.endTime).toLocaleDateString()}{" "}
                            {new Date(mtp.endTime).toLocaleTimeString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MovieTimesPricesForm;
