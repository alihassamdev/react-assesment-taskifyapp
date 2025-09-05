import React from 'react';
import './TaskCard.css'; // We'll extract styles here if needed

const TaskCard = ({ task, onClick }) => {

    const getStatusClass = (status) => {
        if (status === 'notstarted') return 'not-started';
        if (status === 'inprogress') return 'in-progress';
        if (status === 'completed') return 'complete';
        return '';
    };

    const statusColors = {
        notstarted: "#F21E1E",   // red
        inprogress: "#0225FF",   // orange
        completed: "#05A301",    // green
    };


    return (
        <div className="task-card" onClick={() => onClick(task)}>
            <div className="task-content-wrapper">
                {/* Icon Column */}
                <div className="task-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 7C1 8.5913 1.63214 10.1174 2.75736 11.2426C3.88258 12.3679 5.4087 13 7 13C8.5913 13 10.1174 12.3679 11.2426 11.2426C12.3679 10.1174 13 8.5913 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1C5.4087 1 3.88258 1.63214 2.75736 2.75736C1.63214 3.88258 1 5.4087 1 7Z"
                            stroke={statusColors[task.status]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Right side content */}
                <div className="task-content">
                    <div className="task-header">
                        <h4 className="task-title">{task.title}</h4>
                        <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.57444 4.64007C3.44398 4.64007 4.14888 3.82522 4.14888 2.82004C4.14888 1.81486 3.44398 1 2.57444 1C1.7049 1 1 1.81486 1 2.82004C1 3.82522 1.7049 4.64007 2.57444 4.64007Z" stroke="#A1A3AB" />
                            <path d="M8.08494 4.64007C8.95448 4.64007 9.65938 3.82522 9.65938 2.82004C9.65938 1.81486 8.95448 1 8.08494 1C7.2154 1 6.5105 1.81486 6.5105 2.82004C6.5105 3.82522 7.2154 4.64007 8.08494 4.64007Z" stroke="#A1A3AB" />
                            <path d="M13.5954 4.64007C14.465 4.64007 15.1699 3.82522 15.1699 2.82004C15.1699 1.81486 14.465 1 13.5954 1C12.7259 1 12.021 1.81486 12.021 2.82004C12.021 3.82522 12.7259 4.64007 13.5954 4.64007Z" stroke="#A1A3AB" />
                        </svg>
                    </div>

                    <div className="task-body">
                        <p className="task-desc">{task.description}</p>
                        <div className="task-image">
                            <img src={task.image} alt="Task" />
                        </div>
                    </div>

                    <div className="task-footer">
                        <span>Priority: <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span></span>
                        <span>Status: <span className={`status ${getStatusClass(task.status)}`}>{task.status}</span></span>
                        <span className="created">Created on: {task.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
