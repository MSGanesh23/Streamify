import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./components/Signin";
import Signup from "./components/Signup"; // Import Signup component
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import AdminDashboard from "./pages/AdminDashboard"; // Fixed typo
import AddAdmin from "./components/AddAdmin";
import UserManager from "./components/UserManager";
import WatchPage from './pages/WatchPage'; // ✅ Correct relative path
import AdminAddVideo from './components/AdminAddVideo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}

        {/* Admin Dashboard with dynamic section path */}
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* UserDashboard route - make sure it's correct if this needs to be a separate page */}
        <Route path="/userDashboard" element={<LandingPage />} />

        {/* Additional admin related routes */}
        <Route path="admin/addAdmin" element={<AddAdmin />} />
        <Route path="/usersList" element={<UserManager />} />
        <Route path="/watch/:fileId" element={<WatchPage />} />
        <Route path="/admin/addVideo" element={<AdminAddVideo />} />

        {/* You can add a specific route for DetailsPage if necessary */}
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
