import React, { useState } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import "../AccountInfo/AccountInfo";
import { ENDPOINTS } from "@/config/apiConfig";

const ChangePassword = () => {
    const { user } = useOutletContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const validate = () => {
        const errs = {};

        if (!formData.currentPassword) errs.currentPassword = "Current password is required.";
        if (!formData.newPassword) errs.newPassword = "New password is required.";
        if (formData.newPassword && formData.newPassword.length < 6) {
            errs.newPassword = "New password must be at least 6 characters.";
        }
        if (formData.confirmPassword !== formData.newPassword) {
            errs.confirmPassword = "Passwords do not match.";
        }

        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        try {
            const userId = localStorage.getItem("userId");

            // Step 1: Get user data from backend
            const res = await fetch(`${ENDPOINTS.users}/${userId}`);
            const userData = await res.json();

            if (userData.password !== formData.currentPassword) {
                setErrors({ currentPassword: "Current password is incorrect." });
                setLoading(false);
                return;
            }

            // Step 2: Update password
            const updateRes = await fetch(`${ENDPOINTS.users}/${userId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...userData, password: formData.newPassword })
            });

            if (!updateRes.ok) throw new Error("Failed to update password.");

            alert("Password updated successfully!");
            navigate("/dashboard");

        } catch (err) {
            alert("Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="account-container">
            <div className="header-container">
                <div>
                    <h2 className="heading-title">Change Password</h2>
                    <div className="heading-underline"></div>
                </div>
                <Link to="/dashboard" className="go-back">Go Back</Link>
            </div>

            <div className="user-info">
                <h3>{user?.firstName || "User Name"}</h3>
                <p>{user?.email || "user@example.com"}</p>
            </div>

            <div className="form-wrapper">
                <div className="form-inner">
                    <form onSubmit={handleSubmit}>
                        <label>Current Password</label>
                        <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            className={errors.currentPassword ? "error" : ""}
                            placeholder="Enter your current password"
                        />
                        {errors.currentPassword && <p className="error-text">{errors.currentPassword}</p>}

                        <label>New Password</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className={errors.newPassword ? "error" : ""}
                            placeholder="Enter a new password"
                        />
                        {errors.newPassword && <p className="error-text">{errors.newPassword}</p>}

                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={errors.confirmPassword ? "error" : ""}
                            placeholder="Confirm new password"
                        />
                        {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

                        <div className="button-group">
                            <button type="submit" className="update-btn" disabled={loading}>
                                {loading ? "Updating..." : "Update Password"}
                            </button>
                            <button type="button" className="change-btn" onClick={() => navigate("/dashboard")}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
