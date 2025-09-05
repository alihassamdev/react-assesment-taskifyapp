import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { formatDateToDDMMYYYY } from '@/utils/dateFormator'

import "./AddTask.css";
import { ENDPOINTS } from "@/config/apiConfig";
import { generateId } from "@/utils/idGenerator";

const AddTask = ({ onClose }) => {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        priority: "",
        status: "notstarted",
        description: "",
        image: null, // store base64 image string
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const { addTask } = useOutletContext();


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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        const userId = localStorage.getItem("userId");
        const todoId = generateId("todo");

        const newTask = {
            id: todoId,
            userId,
            ...formData,
            date: formatDateToDDMMYYYY(formData.date),

        };

        try {
            setLoading(true);
            await addTask(newTask);
            alert("Task added successfully!");
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
                        <h2 className="addtask-heading-title">Add New Task</h2>
                        <div className="addtask-heading-underline"></div>
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
                                {["extreme", "moderate", "low"].map((level) => (
                                    <div className="priority-option" key={level}>
                                        <span className={`dot ${level.toLowerCase()}-dot`} />
                                        <span className="priority-text">{level}</span>
                                        <input
                                            type="radio"
                                            name="priority"
                                            checked={formData.priority === level}
                                            onChange={() => handlePriorityChange(level)}
                                        />
                                    </div>
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
                                    <div className="upload-icon" />
                                    <p>Drag & Drop files here</p>
                                    <span>or</span>
                                    <label className="browse-btn">
                                        <input type="file" accept="image/*" hidden onChange={handleFileChange} required />
                                        Browse
                                    </label>
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
                                </div>
                                {errors.image && <p className="error-text">{errors.image}</p>}
                            </div>
                        </div>
                    </form>

                    <div className="button-group">
                        <button type="submit" className="done-btn" onClick={handleSubmit} disabled={loading}>
                            {loading ? "Adding..." : "Done"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
