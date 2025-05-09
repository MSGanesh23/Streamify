import React, { useState } from "react";
import axios from "axios";

const AddAdmin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4570/api/AddAdmin", {
                email,
                password
            });
            alert(response.data);
            setEmail("");
            setPassword("");
        } catch (error) {
            alert(error.response?.data || "Something went wrong");
        }
    };

    return (
        <div className="form-container">
            <h2>Add New Admin</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Add Admin</button>
            </form>
        </div>
    );
};

export default AddAdmin;
