import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Films.css";
import imgdf from "../../../assets/img/logo.png";

const Films = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/movies"
                );
                setMovies(response.data);
            } catch (error) {
                console.error("Error fetching movies data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="home__container">
            <div className="home__row">
                <h2 className="home__heading">Phim</h2>
            </div>
            <div className="row row-cols-5 row-cols-lg-2 row-cols-sm-1 g-3">
                {movies.map((movie) => (
                    <div className="col" key={movie.id}>
                        <article className="product-card">
                            <div className="product-card__img-wrap">
                                <Link to={`/movies/${movie.id}`}>
                                    <img
                                        src={
                                            movie.image
                                                ? `http://localhost:3000/uploads/${movie.image
                                                      .split("\\")
                                                      .pop()}`
                                                : imgdf
                                        }
                                        alt={movie.name}
                                        className="product-card__thumb"
                                    />
                                </Link>
                                <div className="product-card__overlay">
                                    <button
                                        className="product-card__btn"
                                        onClick={() =>
                                            navigate(`/movies/${movie.id}`)
                                        }
                                    >
                                        Mua Vé
                                    </button>
                                </div>
                                <button className="like-btn product-card__like-btn">
                                    <img
                                        src="./assets/icons/heart.svg"
                                        alt=""
                                        className="like-btn__icon icon"
                                    />
                                    <img
                                        src="./assets/icons/heart-red.svg"
                                        alt=""
                                        className="like-btn__icon--liked"
                                    />
                                </button>
                            </div>
                            <h3 className="product-card__title">
                                <Link to={`/movies/${movie.id}`}>
                                    {movie.name}
                                </Link>
                            </h3>
                            <p className="product-card__brand"></p>
                            <div className="product-card__row">
                                <span className="product-card__price">
                                    {movie.duration} phút
                                </span>
                                <img
                                    src="./assets/icons/star.svg"
                                    alt=""
                                    className="product-card__star"
                                />
                                <span className="product-card__score">4.3</span>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Films;
