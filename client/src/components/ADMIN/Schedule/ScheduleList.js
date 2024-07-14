import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ScheduleList.css";

const ScheduleList = () => {
    const { cinemaId } = useParams();
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSchedules = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("You are not authorized to perform this action.");
                return;
            }

            try {
                const response = await axios.get(
                    `http://localhost:3000/schedules/cinema/${cinemaId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (Array.isArray(response.data)) {
                    setSchedules(response.data);
                } else {
                    console.error("Unexpected response format:", response.data);
                    alert("Unexpected response format. Please check the API.");
                }
            } catch (error) {
                console.error("Error fetching schedules:", error);
                alert("Error fetching schedules. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchSchedules();
    }, [cinemaId]);

    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("You are not authorized to perform this action.");
            return;
        }

        try {
            await axios.delete(`http://localhost:3000/schedules/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSchedules((prevSchedules) =>
                prevSchedules.filter((schedule) => schedule.id !== id)
            );
            alert("Schedule deleted successfully.");
        } catch (error) {
            console.error("Error deleting schedule:", error);
            alert("Error deleting schedule. Please try again.");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="schedule-list__container">
            <h2>Schedules for Cinema {cinemaId}</h2>
            <button
                onClick={() =>
                    navigate(`/admin/cinemas/${cinemaId}/schedules/create`)
                }
                className="btn btn-primary"
            >
                Add New Schedule
            </button>
            <table className="schedule-list__table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Movie ID</th>
                        <th>Start Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedule) => (
                        <tr key={schedule.id}>
                            <td>{schedule.id}</td>
                            <td>{schedule.movie_id}</td>
                            <td>
                                {new Date(schedule.start_time).toLocaleString(
                                    "vi-VN"
                                )}
                            </td>
                            <td>
                                <button
                                    onClick={() =>
                                        navigate(
                                            `/admin/schedules/edit/${schedule.id}`
                                        )
                                    }
                                    className="btn btn-secondary"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(schedule.id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleList;
