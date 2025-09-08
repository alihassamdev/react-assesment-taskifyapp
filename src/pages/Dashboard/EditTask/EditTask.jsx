import React, { useState, useEffect } from "react";

import "../AddTask/AddTask.css";
import "./EditTask.css";

const EditTask = ({ task, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        priority: "",
        status: "notstarted",
        description: "",
        image: null,
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);


    // Prefill form with task data
    useEffect(() => {
        if (task) {
            setFormData({ ...task });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePriorityChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            priority: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData((prev) => ({ ...prev, image: reader.result }));
        };
        reader.readAsDataURL(file); // Convert image to Base64
    };

    const validate = () => {
        const errs = {};
        if (!formData.title.trim()) errs.title = "Title is required";
        if (!formData.date) errs.date = "Date is required";
        if (!formData.priority) errs.priority = "Priority is required";
        if (!formData.description.trim()) errs.description = "Description is required";
        if (!formData.image) errs.image = "Image is required";

        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    // Handle Task Update
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        try {
            await onSave(task.id, formData);
            alert("Task updated successfully!");
            onClose();
        } catch (error) {
            alert("Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="addtask-modal" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div>
                        <h2 className="addtask-heading-title">Edit Task</h2>
                        <div className="addtask-heading-underline edit-task"></div>
                    </div>
                    <button className="addtask-go-back" onClick={onClose}>Go Back</button>
                </div>

                <div className="form-wrapper">
                    <form className="form-content" onSubmit={handleSubmit}>
                        <div className="form-left">
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className={errors.title ? "error" : ""}
                            />
                            {errors.title && <p className="error-text">{errors.title}</p>}

                            <label>Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className={errors.date ? "error" : ""}
                                min={new Date().toISOString().split("T")[0]}
                            />
                            {errors.date && <p className="error-text">{errors.date}</p>}

                            <label>Priority</label>
                            <div className="priority-group">
                                {[
                                    { label: "Extreme", value: "extreme", color: "#F21E1E" },
                                    { label: "Moderate", value: "moderate", color: "#1E90FF" },
                                    { label: "Low", value: "low", color: "#05A301" },
                                ].map(({ label, value, color }) => (
                                    <label className="priority-radio" key={value}>
                                        <span className="dot" style={{ backgroundColor: color }}></span>
                                        <span className="priority-label">{label}</span>
                                        <input
                                            type="radio"
                                            name="priority"
                                            value={value}
                                            checked={formData.priority === value}
                                            onChange={() => handlePriorityChange(value)}
                                        />
                                        <span className="custom-radio"></span>
                                    </label>
                                ))}
                            </div>
                            {errors.priority && <p className="error-text">{errors.priority}</p>}

                            <label className="addtask-desc">Task Description</label>
                            <textarea
                                name="description"
                                placeholder="Start writing here....."
                                value={formData.description}
                                onChange={handleChange}
                                className={errors.description ? "error" : ""}
                            />
                            {errors.description && <p className="error-text">{errors.description}</p>}
                        </div>

                        <div className="form-right">
                            <div className="upload-section">
                                <label className="upload-label">Upload Image</label>
                                <div className="upload-box">
                                    {formData.image && (
                                        <img
                                            src={formData.image}
                                            alt="preview"
                                            style={{
                                                marginTop: 12,
                                                maxWidth: "100%",
                                                maxHeight: "50px",
                                                objectFit: "contain",
                                                borderRadius: 6,
                                            }}
                                        />
                                    )}
                                    <div className="upload-icon" />
                                    <p>Drag & Drop files here</p>
                                    <span>or</span>
                                    <label className="browse-btn">
                                        <input type="file" accept="image/*" hidden onChange={handleFileChange} />
                                        Browse
                                    </label>
                                </div>
                                {errors.image && <p className="error-text">{errors.image}</p>}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="button-group">
                    <button type="submit" className="done-btn" onClick={handleSubmit} disabled={loading}>
                        {loading ? "Updating..." : "Save Changes"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditTask;
