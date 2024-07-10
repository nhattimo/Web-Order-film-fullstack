import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Customer/Layout.js";
import IndexHome from "./components/Customer/IndexHome.js";
import Home from "./components/Customer/Home.js";
import SignIn from "./components/Customer/SignIn.js";
import SignUp from "./components/Customer/SignUp.js";
import FilmDetail from "./components/Customer/Film/FilmDetail.js";
import AdminDashboard from "./components/ADMIN/Dashboard/AdminDashboard.js";
import MovieList from "./components/ADMIN/Movie/MovieList.js";
import MovieForm from "./components/ADMIN/Movie/MovieForm.js";
import AdminSignIn from "./components/ADMIN/SignIn/AdminSignIn.js";
import BuyTicket from "./components/Customer/BuyTicket/BuyTicket.js";
import Profile from "./components/Customer/Profile/Profile.js";
import PersonalInfo from "./components/Customer/PersonalInfo/PersonalInfo.js";

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<IndexHome />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/movies/:id" element={<FilmDetail />} />
                    <Route
                        path="/buy-ticket/:scheduleId"
                        element={<BuyTicket />}
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/edit-personal-info"
                        element={<PersonalInfo />}
                    />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    {/* Thêm các tuyến đường khác nếu cần */}
                    {/* ADMIN */}
                    <Route path="/admin" element={<AdminSignIn />} />
                    <Route
                        path="/admin/dashboard"
                        element={<AdminDashboard />}
                    />
                    <Route path="/admin/movies" element={<MovieList />} />
                    <Route
                        path="/admin/movies/create"
                        element={<MovieForm />}
                    />
                    <Route
                        path="/admin/movies/edit/:id"
                        element={<MovieForm />}
                    />
                    <Route
                        path="/buy-ticket/:scheduleId"
                        element={<BuyTicket />}
                    />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
