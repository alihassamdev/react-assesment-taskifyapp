import React, { useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import './ViewTask.css'; // You should use the right-column and other styles here

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
                                Status: <span className={selectedTask.status}>{selectedTask.status}</span>
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
                    <div className="viewtask-action-icon" onClick={() => handleStatusChange("completed")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <rect width="36" height="36" rx="8" fill="#FF6767" />
                            <path d="M12 25C12 26.1 12.9 27 14 27H22C23.1 27 24 26.1 24 25V15C24 13.9 23.1 13 22 13H14C12.9 13 12 13.9 12 15V25ZM24 10H21.5L20.79 9.29C20.61 9.11 20.35 9 20.09 9H15.91C15.65 9 15.39 9.11 15.21 9.29L14.5 10H12C11.45 10 11 10.45 11 11C11 11.55 11.45 12 12 12H24C24.55 12 25 11.55 25 11C25 10.45 24.55 10 24 10Z" fill="white" />
                        </svg>
                    </div>
                    <div className="viewtask-action-icon" onClick={() => handleStatusChange("inprogress")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <rect width="36" height="36" rx="8" fill="#FF6767" />
                            <path d="M21 8.94979C22.296 8.94979 23.496 9.35979 24.477 10.0598L15.343 19.1928C15.2475 19.285 15.1713 19.3954 15.1189 19.5174C15.0665 19.6394 15.0389 19.7706 15.0377 19.9034C15.0366 20.0362 15.0619 20.1678 15.1122 20.2907C15.1625 20.4136 15.2367 20.5253 15.3306 20.6192C15.4245 20.7131 15.5361 20.7873 15.659 20.8376C15.7819 20.8879 15.9136 20.9132 16.0464 20.912C16.1792 20.9109 16.3104 20.8833 16.4324 20.8309C16.5544 20.7785 16.6648 20.7023 16.757 20.6068L25.891 11.4728C26.6141 12.4878 27.0019 13.7035 27 14.9498V24.9498C27 25.4802 26.7893 25.9889 26.4142 26.364C26.0391 26.7391 25.5304 26.9498 25 26.9498H11C10.4696 26.9498 9.96086 26.7391 9.58579 26.364C9.21071 25.9889 9 25.4802 9 24.9498V10.9498C9 10.4194 9.21071 9.91065 9.58579 9.53557C9.96086 9.1605 10.4696 8.94979 11 8.94979H21ZM27.657 8.29279C27.8445 8.48031 27.9498 8.73462 27.9498 8.99979C27.9498 9.26495 27.8445 9.51926 27.657 9.70679L25.89 11.4728C25.5006 10.9261 25.0227 10.4482 24.476 10.0588L26.242 8.29279C26.4295 8.10532 26.6838 8 26.949 8C27.2142 8 27.4695 8.10532 27.657 8.29279Z" fill="white" />
                        </svg>
                    </div>
                    <div className="viewtask-action-icon" onClick={() => handleStatusChange("notstarted")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="23" viewBox="0 0 10 23" fill="none">
                            <path d="M0 4.875C0 3.58207 0.513615 2.34209 1.42785 1.42785C2.34209 0.513615 3.58207 0 4.875 0C6.16793 0 7.40791 0.513615 8.32215 1.42785C9.23639 2.34209 9.75 3.58207 9.75 4.875C9.75 7.73744 8.13638 11.8105 7.1825 13.9669C6.78113 14.8769 5.87194 15.4375 4.875 15.4375C3.87888 15.4375 2.96969 14.8769 2.5675 13.9669C1.61281 11.8105 0 7.73663 0 4.875ZM4.875 22.75C5.62921 22.75 6.35253 22.4504 6.88584 21.9171C7.41914 21.3838 7.71875 20.6605 7.71875 19.9062C7.71875 19.152 7.41914 18.4287 6.88584 17.8954C6.35253 17.3621 5.62921 17.0625 4.875 17.0625C4.12079 17.0625 3.39747 17.3621 2.86417 17.8954C2.33086 18.4287 2.03125 19.152 2.03125 19.9062C2.03125 20.6605 2.33086 21.3838 2.86417 21.9171C3.39747 22.4504 4.12079 22.75 4.875 22.75Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ViewTask;
