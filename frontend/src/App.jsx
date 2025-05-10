import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./components/Signin";
import Signup from "./components/Signup"; // Import Signup component
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import AdminDashboard from "./pages/AdminDashboad";
import AddAdmin from "./components/AddAdmin";
import UserManager from "./components/UserManager";
import WatchPage from './pages/WatchPage'; // ✅ Correct relative path


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}
                <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
                <Route path="/UserDashboard" element={<LandingPage/>}/>
                <Route path="/AddAdmin" element={<AddAdmin/>}/>
                <Route path="/UsersList" element={<UserManager />} />
                <Route path="/watch/:fileId" element={<WatchPage />} />

            </Routes>
        </Router>
    );
};

export default App;
