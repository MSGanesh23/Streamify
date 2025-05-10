import React, { useState, useEffect } from "react";
import axios from "axios";
import '../assets/css/AdminDashboard.css';
import AdminNavbar from "./AdminNavbar";

let debounceTimer;

const UserManager = () => {
  const [searchEmail, setSearchEmail] = useState(""); // Email search state
  const [users, setUsers] = useState([]); // Users state
  const [currentUserEmail, setCurrentUserEmail] = useState(""); // Logged-in user's email
  const [deletingEmail, setDeletingEmail] = useState(null); // Track which user is being deleted by email

  // Extract logged-in user's email from JWT
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
        setCurrentUserEmail(payload.sub || payload.email); // Use 'sub' or 'email' based on token structure
      } catch (e) {
        console.error("Invalid token", e);
      }
    }
  }, []);

  // Load all users on initial render
  useEffect(() => {
    fetchUsers();
  }, []);

  // Debounced live search functionality
  useEffect(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fetchUsers(searchEmail); // Fetch users as email changes (debounced)
    }, 400); // 400ms delay
  }, [searchEmail]);

  // Fetch users based on email prefix (if provided)
  const fetchUsers = async (email = "") => {
    try {
      const response = await axios.get("http://localhost:4570/api/users/search", {
        params: { email },
      });
      setUsers(response.data); // Set fetched users
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Handle delete request for a user (by email)
  const handleDelete = async (userEmail) => {
  const confirmDelete = window.confirm(`Are you sure you want to delete ${userEmail}?`);
  if (!confirmDelete) return;

  try {
    setDeletingEmail(userEmail);
    await axios.delete("http://localhost:4570/api/users/delete", {
      params: { email: userEmail }, // Pass email as a request param
    });
    alert("User deleted successfully");

    // Re-fetch users based on current search filter
    fetchUsers(searchEmail);
  } catch (error) {
    alert("Failed to delete user");
    console.error(error);
  } finally {
    setDeletingEmail(null);
  }
};


  return (
    <div>
      <AdminNavbar email={currentUserEmail} /> {/* Navbar with the logged-in user's email */}

      <h2>User Manager</h2>

      {/* Search input */}
      <input
        type="text"
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)} // Update search term
        placeholder="Search by email (starts with...)"
        className="search-input"
      />

      {/* User table */}
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.email}>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.email)} // Pass user email
                    disabled={deletingEmail === user.email} // Disable button while deleting
                  >
                    {deletingEmail === user.email ? "Deleting..." : "Delete"} {/* Show status text while deleting */}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No users found</td> {/* Message if no users found */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManager;
