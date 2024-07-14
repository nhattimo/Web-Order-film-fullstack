import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import "./MovieForm.css";
import MovieTimesPricesForm from "./MovieTimesPricesForm"; // Import MovieTimesPricesForm

const MovieForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({
        name: "",
        image: null,
        Content: "",
        actors: "",
        ageRating: "",
        duration: "", // Changed to empty string
        description: "",
        status: 1,
        genreIds: [], // Ensure this is initialized correctly
    });
    const [allGenres, setAllGenres] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/genres"
                );
                const genreOptions = response.data.map((genre) => ({
                    value: genre.id,
                    label: genre.name,
                }));
                setAllGenres(genreOptions);
            } catch (err) {
                console.error("Error fetching genres:", err);
            }
        };

        const fetchMovie = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/movies/${id}`
                );
                setMovie({
                    ...response.data,
                    duration: response.data.duration?.toString() || "", // Ensure duration is not null
                    genreIds: response.data.genres.map((genre) => genre.id), // Store genre IDs
                });
            } catch (err) {
                console.error("Error fetching movie data:", err);
            }
        };

        fetchGenres();

        if (id) {
            fetchMovie();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie((prevMovie) => ({
            ...prevMovie,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setMovie((prevMovie) => ({
            ...prevMovie,
            image: e.target.files[0],
        }));
    };

    const handleGenreChange = (selectedGenres) => {
        setMovie((prevMovie) => ({
            ...prevMovie,
            genreIds: selectedGenres.map((genre) => genre.value), // Map to IDs
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (!token) {
            setError("You are not authorized to perform this action.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("name", movie.name);
            formData.append("Content", movie.Content);
            formData.append("actors", movie.actors);
            formData.append("ageRating", movie.ageRating);
            formData.append("duration", movie.duration); // Ensure duration is a string
            formData.append("description", movie.description);
            formData.append("status", movie.status.toString()); // Ensure status is a string
            formData.append("genreIds", movie.genreIds.join(",")); // Convert genre IDs to a comma-separated string
            if (movie.image) {
                formData.append("image", movie.image);
            }

            console.log(...formData.entries()); // Log dữ liệu gửi đi để kiểm tra

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            };

            if (id) {
                await axios.put(
                    `http://localhost:3000/movies/${id}`,
                    formData,
                    config
                );
            } else {
                await axios.post(
                    "http://localhost:3000/movies",
                    formData,
                    config
                );
            }

            navigate("/admin/movies");
        } catch (err) {
            console.error("Error saving movie:", err);
            setError("Error saving movie. Please try again.");
        }
    };

    return (
        <div className="movie-form__container">
            <h2>{id ? "Edit Movie" : "Add Movie"}</h2>
            <form onSubmit={handleSubmit} className="movie-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={movie.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea
                        name="Content"
                        value={movie.Content}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Actors</label>
                    <input
                        type="text"
                        name="actors"
                        value={movie.actors}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Age Rating</label>
                    <input
                        type="text"
                        name="ageRating"
                        value={movie.ageRating}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Duration (minutes)</label>
                    <input
                        type="number"
                        name="duration"
                        value={movie.duration}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={movie.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <input
                        type="number"
                        name="status"
                        value={movie.status}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Genres</label>
                    <Select
                        isMulti
                        value={allGenres.filter((genre) =>
                            movie.genreIds.includes(genre.value)
                        )}
                        options={allGenres}
                        onChange={handleGenreChange}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                {error && <p className="form-error">{error}</p>}
                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                        Save Changes
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => navigate("/admin/movies")}
                    >
                        Cancel
                    </button>
                </div>
            </form>
            {id && <MovieTimesPricesForm movieId={id} />}{" "}
            {/* Render MovieTimesPricesForm */}
        </div>
    );
};

export default MovieForm;
