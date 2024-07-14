import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BuyTicket.css"; // Đảm bảo rằng bạn đã tạo và liên kết file CSS này

const BuyTicket = () => {
    const { scheduleId } = useParams();
    const [schedule, setSchedule] = useState(null);
    const [cinema, setCinema] = useState(null);
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showtimes, setShowtimes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchScheduleAndCinema = async () => {
            try {
                const scheduleResponse = await axios.get(
                    `http://localhost:3000/schedules/${scheduleId}`
                );
                setSchedule(scheduleResponse.data);

                const cinemaResponse = await axios.get(
                    `http://localhost:3000/cinemas/${scheduleResponse.data.cinemaId}`
                );
                setCinema(cinemaResponse.data);

                const showtimesResponse = await axios.get(
                    `http://localhost:3000/schedules?movieId=${scheduleResponse.data.movieId}&cinemaId=${scheduleResponse.data.cinemaId}`
                );
                setShowtimes(showtimesResponse.data);

                const seatsResponse = await axios.get(
                    `http://localhost:3000/seats/cinema/${scheduleResponse.data.cinemaId}`
                );
                setSeats(seatsResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchScheduleAndCinema();
    }, [scheduleId]);

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const handleContinue = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/sign-in", {
                state: { from: `/buy-ticket/${scheduleId}` },
            });
        } else {
            navigate("/payment", { state: { schedule, selectedSeats } });
        }
    };

    const getSeatsByRow = (rowName) => {
        return seats.filter((seat) => seat.row_name === rowName);
    };

    if (!schedule || !cinema) {
        return <div>Loading...</div>;
    }

    return (
        <div className="buy-ticket__container">
            <div className="buy-ticket__header">
                <h2>Chọn ghế</h2>
                <div className="buy-ticket__showtimes">
                    {showtimes.map((time) => (
                        <button
                            key={time.id}
                            className={`showtime-btn ${
                                new Date(time.startTime).getTime() ===
                                new Date(schedule.startTime).getTime()
                                    ? "selected"
                                    : ""
                            }`}
                        >
                            {new Date(time.startTime).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </button>
                    ))}
                </div>
            </div>
            <div className="buy-ticket__seats">
                <div className="seat-map">
                    {[
                        "P",
                        "O",
                        "N",
                        "M",
                        "L",
                        "K",
                        "J",
                        "I",
                        "H",
                        "G",
                        "F",
                        "E",
                    ].map((row) => (
                        <div key={row} className="seat-row">
                            {getSeatsByRow(row).map((seat, index) => (
                                <button
                                    key={seat.id}
                                    className={`seat-btn ${
                                        selectedSeats.includes(seat.name)
                                            ? "selected"
                                            : ""
                                    } ${
                                        seat.status !== "available"
                                            ? "unavailable"
                                            : ""
                                    }`}
                                    onClick={() => handleSeatClick(seat.name)}
                                    disabled={seat.status !== "available"}
                                >
                                    {seat.name}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="buy-ticket__info">
                    <img
                        src={`http://localhost:3000/${schedule.movie.image}`}
                        alt={schedule.movie.name}
                        className="buy-ticket__movie-img"
                    />
                    <div className="buy-ticket__movie-info">
                        <h3>{schedule.movie.name}</h3>
                        <p>{cinema.name} - RAP 1</p>
                        <p>
                            Suất:{" "}
                            {new Date(schedule.startTime).toLocaleTimeString(
                                [],
                                {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }
                            )}{" "}
                            -{" "}
                            {new Date(schedule.startTime).toLocaleDateString()}
                        </p>
                        <p>Tổng cộng: {selectedSeats.length * 50000}₫</p>
                    </div>
                </div>
            </div>
            <div className="buy-ticket__actions">
                <button className="btn btn-back" onClick={() => navigate(-1)}>
                    Quay lại
                </button>
                <button className="btn btn-continue" onClick={handleContinue}>
                    Tiếp tục
                </button>
            </div>
        </div>
    );
};

export default BuyTicket;
