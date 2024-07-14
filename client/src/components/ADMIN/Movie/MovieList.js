import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./MovieList.css"; // Import file CSS

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/movies"
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

    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("You are not authorized to perform this action.");
            return;
        }

        try {
            await axios.delete(`http://localhost:3000/movies/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMovies(movies.filter((movie) => movie.id !== id));
            alert("Movie deleted successfully.");
        } catch (error) {
            console.error("Error deleting movie:", error);
            alert("Error deleting movie. Please try again.");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-list__container">
            <h2>Movie Management</h2>
            <button
                onClick={() => navigate("/admin/movies/create")}
                className="btn btn-primary"
            >
                Add New Movie
            </button>
            <table className="movie-list__table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>{movie.name}</td>
                            <td>{movie.description}</td>
                            <td>
                                <button
                                    onClick={() =>
                                        navigate(
                                            `/admin/movies/edit/${movie.id}`
                                        )
                                    }
                                    className="btn btn-secondary"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(movie.id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                                <Link
                                    to={`/admin/movies/${movie.id}/times-prices`}
                                    className="btn btn-info"
                                >
                                    Times & Prices
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MovieList;
