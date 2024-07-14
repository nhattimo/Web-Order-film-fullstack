import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./FilmDetail.css"; // Đảm bảo rằng bạn đã tạo và liên kết file CSS này

const FilmDetail = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [cinemas, setCinemas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch dữ liệu phim từ API
        const fetchFilm = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/movies/${id}`
                );
                setFilm(response.data);
            } catch (error) {
                console.error("Error fetching film data:", error);
            }
        };

        // Fetch dữ liệu rạp chiếu từ API
        const fetchCinemas = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/cinemas"
                );
                setCinemas(response.data);
            } catch (error) {
                console.error("Error fetching cinemas data:", error);
            }
        };

        fetchFilm();
        fetchCinemas();
    }, [id]);

    const handleShowtimeClick = (scheduleId) => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate(`/sign-in`);
        } else {
            navigate(`/buy-ticket/${scheduleId}`);
        }
    };

    if (!film) {
        return <div>Loading...</div>;
    }

    return (
        <section className="film-detail__container">
            <div className="film-detail__main">
                <img
                    src={
                        film.image
                            ? `http://localhost:3000/${film.image}`
                            : "./assets/img/default-movie.png"
                    }
                    alt={film.name}
                    className="film-detail__img"
                />
                <div className="film-detail__info">
                    <h1 className="film-detail__title">{film.name}</h1>
                    <p className="film-detail__rating">
                        <span className="film-detail__rating-stars">
                            ★ {film.rating}
                        </span>{" "}
                        ({film.votes} votes)
                    </p>
                    <p className="film-detail__genres">
                        {film.genres.join(", ")}
                    </p>
                    <p className="film-detail__duration">
                        {film.duration} phút
                    </p>
                    <p className="film-detail__release-date">
                        Khởi chiếu:{" "}
                        {new Date(film.releaseDate).toLocaleDateString()}
                    </p>
                    <p className="film-detail__description">
                        {film.description}
                    </p>
                    <div className="film-detail__cast">
                        <p>Đạo diễn: {film.director}</p>
                        <p>Diễn viên: {film.actors}</p>
                    </div>
                </div>
            </div>
            <div className="film-detail__schedule">
                <h2>Lịch Chiếu</h2>
                <div className="film-detail__schedule-list">
                    {cinemas.map((cinema) => (
                        <div key={cinema.id} className="cinema">
                            <h3>{cinema.name}</h3>
                            <div className="showtimes">
                                {cinema.schedules
                                    .filter(
                                        (schedule) =>
                                            schedule.movieId === parseInt(id)
                                    )
                                    .map((schedule) => (
                                        <button
                                            key={schedule.id}
                                            onClick={() =>
                                                handleShowtimeClick(schedule.id)
                                            }
                                            className="showtime-btn"
                                        >
                                            {new Date(
                                                schedule.startTime
                                            ).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </button>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FilmDetail;
