import React from "react";

const FilmDetailModal = ({ film, onClose }) => {
    if (!film) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>{film.name}</h2>
                <p>Giá: {film.price}</p>
                <p>Thương hiệu: {film.brand}</p>
                <p>Đánh giá: {film.score}</p>
                <p>Thông tin chi tiết: {film.details}</p>
            </div>
        </div>
    );
};

export default FilmDetailModal;
