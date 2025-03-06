import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AddMovie from "./pages/AddMovie";
import ListMovies from "./pages/ListMovies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/list-movies" element={<ListMovies />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
