import React, { useState, useEffect } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

import "./AccountInfo.css";
import { ENDPOINTS } from "@/config/apiConfig";

const AccountInfo = () => {
    const { user, refreshUserData } = useOutletContext();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: ""
    });

    // Prefill form from user prop
    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                userName: user.userName || "",
                email: user.email || ""
            });
        }
    }, [user]);

    const validate = () => {
        const errs = {};
        if (!formData.firstName.trim()) errs.firstName = "First name is required.";
        if (!formData.lastName.trim()) errs.lastName = "Last name is required.";
        if (!formData.userName.trim()) errs.userName = "Username is required.";
        if (!formData.userName.trim()) errs.userName = "Username is required.";

        if (!formData.email.trim()) {
            errs.email = "Email is required.";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            errs.email = "Invalid email address.";
        }

        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleInfoUpdate = async (e) => {

        e.preventDefault();
        if (validate()) {
            setLoading(true); // Start loading
            try {
                const userId = localStorage.getItem("userId");

                // Get existing user data
                const existingRes = await fetch(`${ENDPOINTS.users}/${userId}`);
                if (!existingRes.ok) throw new Error("Failed to fetch current user data.");
                const existingData = await existingRes.json();

                // updated formData
                const updatedPayload = {
                    ...existingData,
                    ...formData // This overrides firstName, lastName, userName, email — keeps password intact
                };

                // PUT data
                const res = await fetch(`${ENDPOINTS.users}/${userId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedPayload),
                });

                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.message || "Failed to update user.");
                }

                const updatedUser = await res.json();
                alert("Account information updated successfully!");

                setFormData(updatedUser);
                refreshUserData();

            } catch (err) {
                alert("Error updating account: " + err.message);
            } finally {
                setLoading(false); // End loading
            }
        }
    };


    return (
        <div className="account-container">
            <div className="header-container">
                <div>
                    <h2 className="heading-title">Account Information</h2>
                    <div className="heading-underline"></div>
                </div>
                <Link to="/dashboard" className="go-back">
                    Go Back
                </Link>
            </div>

            <div className="user-info">
                <h3>{user?.firstName || "User Name"}</h3>
                <p>{user?.email || "user@example.com"}</p>
            </div>

            <div className="form-wrapper">
                <div className="form-inner">
                    <form onSubmit={handleInfoUpdate}>
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={errors.firstName ? "error" : ""}
                        />
                        {errors.firstName && <p className="error-text">{errors.firstName}</p>}

                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={errors.lastName ? "error" : ""}
                        />
                        {errors.lastName && <p className="error-text">{errors.lastName}</p>}

                        <label>User Name</label>
                        <input
                            type="text"
                            name="userName"
                            placeholder="Enter your username"
                            value={formData.userName}
                            onChange={handleChange}
                            className={errors.userName ? "error" : ""}
                        />
                        {errors.userName && <p className="error-text">{errors.userName}</p>}

                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "error" : ""}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}

                        <div className="button-group">
                            <button type="submit" className="update-btn" disabled={loading}>
                                {loading ? "Updating..." : "Update Info"}
                            </button>
                            <button
                                type="button"
                                className="change-btn"
                                onClick={() => navigate("/dashboard/change-password")}
                            >
                                Change Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
