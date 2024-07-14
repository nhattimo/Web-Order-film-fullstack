import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ScheduleForm.css";

const ScheduleForm = () => {
    const { cinemaId } = useParams();
    const [movies, setMovies] = useState([]);
    const [formData, setFormData] = useState({
        movieId: "",
        startTime: new Date(),
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("You are not authorized to perform this action.");
                return;
            }

            try {
                const response = await axios.get(
                    "http://localhost:3000/movies",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setMovies(response.data);
            } catch (error) {
                console.error("Error fetching movies:", error);
                alert("Error fetching movies. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setFormData((prevData) => ({
            ...prevData,
            startTime: date,
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
            movie_id: parseInt(formData.movieId, 10),
            cinema_id: parseInt(cinemaId, 10),
            start_time: formData.startTime.toISOString(),
        };

        try {
            await axios.post("http://localhost:3000/schedules", dataToSend, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            navigate(`/admin/cinemas/${cinemaId}/schedules`);
        } catch (error) {
            console.error("Error creating schedule:", error);
            alert("Error creating schedule. Please try again.");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="schedule-form__container">
            <h2>Add Schedule for Cinema {cinemaId}</h2>
            <form onSubmit={handleSubmit} className="schedule-form">
                <div className="form-group">
                    <label>Movie</label>
                    <select
                        name="movieId"
                        value={formData.movieId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Movie</option>
                        {movies.map((movie) => (
                            <option key={movie.id} value={movie.id}>
                                {movie.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Start Time</label>
                    <DatePicker
                        selected={formData.startTime}
                        onChange={handleDateChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="Pp"
                        timeCaption="time"
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                        Save Changes
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                            navigate(`/admin/cinemas/${cinemaId}/schedules`)
                        }
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ScheduleForm;
