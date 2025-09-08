import React, { useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import './ViewTask.css';

import { prettifyStatus, getStatusClass } from '@/utils/statusFormatter';

import { FaPauseCircle, FaPlayCircle, FaCheckCircle } from 'react-icons/fa';

const ViewTask = () => {
    const { taskId } = useParams();
    const navigate = useNavigate();
    const { tasks, updateTaskStatus, deleteTask } = useOutletContext();

    const [editModalOpen, setEditModalOpen] = useState(false);

    const selectedTask = tasks.find(t => t.id === taskId);
    if (!selectedTask) return <div>Task not found</div>;

    const handleStatusChange = (newStatus) => {
        updateTaskStatus(selectedTask.id, newStatus);
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            deleteTask(selectedTask.id);
            navigate("/dashboard"); // or wherever your tasks list lives
        }
    };

    return (
        <div className="view-task-container">
            <div className="viewtask-right-column card">
                <div className="viewtask-detail-card">
                    <div className="viewtask-detail-header">
                        <img
                            className="viewtask-detail-image"
                            src={selectedTask.image}
                            alt="Task"
                        />
                        <div className='viewtask-detail-content'>
                            <h4 className="viewtask-detail-title">{selectedTask.title}</h4>
                            <p className='viewtask-priority'>
                                Priority: <span className={selectedTask.priority.toLowerCase()}>{selectedTask.priority}</span>
                            </p>
                            <p className='viewtask-status'>
                                Status: <span className={`status ${getStatusClass(selectedTask.status)}`}>{prettifyStatus(selectedTask.status)}</span>
                            </p>
                            <p className="viewtask-created">Created on: {selectedTask.date}</p>
                        </div>
                    </div>
                    <div>

                        <button onClick={() => navigate(-1)} className="back-btn">Go Back</button>
                    </div>
                </div>

                <div className="viewtask-description">
                    <p>{selectedTask.description}</p>
                </div>

                <div className="viewtask-actions-group">
                    <div
                        className="viewtask-action-icon completed-icon"
                        onClick={() => handleStatusChange("completed")}
                        title="Mark as Completed"
                    >
                        <FaCheckCircle />
                    </div>
                    <div
                        className="viewtask-action-icon inprogress-icon"
                        onClick={() => handleStatusChange("inprogress")}
                        title="Mark as In Progress"
                    >
                        <FaPlayCircle />
                    </div>
                    <div
                        className="viewtask-action-icon notstarted-icon"
                        onClick={() => handleStatusChange("notstarted")}
                        title="Mark as Not Started"
                    >
                        <FaPauseCircle />
                    </div>

                </div>

            </div>
        </div >
    );
};

export default ViewTask;
