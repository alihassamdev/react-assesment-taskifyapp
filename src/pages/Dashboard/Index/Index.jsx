import React from "react";
import { useOutletContext } from "react-router-dom";

import './Index.css'

const Index = () => {
    const { user } = useOutletContext();

    return (
        <div className="dashboard-content-section">
            {/* Welcome Header at the top */}
            <div className="welcome-header">
                <h1>
                    Welcome back, {user.firstName} <span className="wave-emoji">👋</span>
                </h1>
                <div className="user-avatars">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" />
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 2" />
                    <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="User 3" />
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User 4" />
                    <div className="more-users">+4</div>
                </div>
                <button className="invite-btn">
                    <span className="invite-icon">➕</span> Invite
                </button>
            </div>

            <div className="content">
                {/* Left side - To-Do list */}
                <div className="left">
                    <div className="card to-do-card">
                        <div className="card-header">
                            <h3>To-Do</h3>
                            <button className="add-task-btn">+ Add task</button>
                        </div>
                        <small>20 June • Today</small>


                        {/* Task 1 */}
                        <div className="task-card">
                            <div className="task-status-circle red"></div>
                            <div className="task-content">
                                <h4>Attend Nischal’s Birthday Party</h4>
                                <p>
                                    Buy gifts on the way and pick up cake from the bakery.
                                    (6 PM | Fresh Elements).....
                                </p>
                                <div className="task-meta">
                                    <span>
                                        Priority: <strong>Moderate</strong>
                                    </span>
                                    <span>
                                        Status: <strong className="status-notstarted">Not Started</strong>
                                    </span>
                                    <span>Created on: 20/06/2023</span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=64&q=80"
                                alt="Birthday"
                            />
                        </div>

                        {/* Task 2 */}
                        <div className="task-card">
                            <div className="task-status-circle blue"></div>
                            <div className="task-content">
                                <h4>Landing Page Design for TravelDays</h4>
                                <p>
                                    Get the work done by EOD and discuss with client before leaving.
                                    (4 PM | Meeting Room)
                                </p>
                                <div className="task-meta">
                                    <span>
                                        Priority: <strong>Moderate</strong>
                                    </span>
                                    <span>
                                        Status: <strong className="status-inprogress">In Progress</strong>
                                    </span>
                                    <span>Created on: 20/06/2023</span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=64&q=80"
                                alt="Landing Page"
                            />
                        </div>

                        {/* Task 3 */}
                        <div className="task-card">
                            <div className="task-status-circle blue"></div>
                            <div className="task-content">
                                <h4>Presentation on Final Product</h4>
                                <p>
                                    Make sure everything is functioning and all the necessities are
                                    properly met. Prepare the team and get the documents ready.
                                </p>
                                <div className="task-meta">
                                    <span>
                                        Priority: <strong>Moderate</strong>
                                    </span>
                                    <span>
                                        Status: <strong className="status-inprogress">In Progress</strong>
                                    </span>
                                    <span>Created on: 19/08/2023</span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=64&q=80"
                                alt="Presentation"
                            />
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="right">
                    {/* Task Status with circular progress bars */}
                    <div className="card task-status-card">
                        <h3>Task Status</h3>
                        <div className="progress-wrapper">
                            <div className="progress-circle green" data-percent="84">
                                <div className="progress-text">84%</div>
                            </div>
                            <div className="progress-circle blue" data-percent="46">
                                <div className="progress-text">46%</div>
                            </div>
                            <div className="progress-circle red" data-percent="13">
                                <div className="progress-text">13%</div>
                            </div>
                        </div>
                        <div className="progress-labels">
                            <span>
                                <span className="dot green-dot"></span> Completed
                            </span>
                            <span>
                                <span className="dot blue-dot"></span> In Progress
                            </span>
                            <span>
                                <span className="dot red-dot"></span> Not Started
                            </span>
                        </div>
                    </div>

                    {/* Completed Task */}
                    <div className="card completed-task-card">
                        <h3>Completed Task</h3>

                        <div className="completed-task-card-item">
                            <div className="task-status-circle green"></div>
                            <div className="completed-task-content">
                                <h4>Walk the dog</h4>
                                <p>Take the dog to the park and bring treats as well.</p>
                                <span className="status-completed">Status: Completed</span>
                                <small>Completed 2 days ago.</small>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=64&q=80"
                                alt="Dog"
                            />
                        </div>

                        <div className="completed-task-card-item">
                            <div className="task-status-circle green"></div>
                            <div className="completed-task-content">
                                <h4>Conduct meeting</h4>
                                <p>Meet with the client and finalize requirements.</p>
                                <span className="status-completed">Status: Completed</span>
                                <small>Completed 2 days ago.</small>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=64&q=80"
                                alt="Meeting"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
