import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./components/Signin";
import Signup from "./components/Signup"; // Import Signup component
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}
            </Routes>
        </Router>
    );
};

export default App;
