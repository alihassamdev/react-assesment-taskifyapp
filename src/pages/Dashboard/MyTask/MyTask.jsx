import React from 'react';
import './MyTask.css';
import taskImg from '@/assets/task.png';

const MyTask = () => {
    return (
        <div className="mytask-container">
            {/* LEFT COLUMN */}
            <div className="card left-column">
                <h2 className="section-title">My Tasks</h2>
                <div className="mytask-heading-underline"></div>

                <div className='task-card-container'>
                    {/* Task Card */}
                    <div className="task-card">
                        <div className="task-content-wrapper">
                            {/* Icon Column */}
                            <div className="task-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 7C1 8.5913 1.63214 10.1174 2.75736 11.2426C3.88258 12.3679 5.4087 13 7 13C8.5913 13 10.1174 12.3679 11.2426 11.2426C12.3679 10.1174 13 8.5913 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1C5.4087 1 3.88258 1.63214 2.75736 2.75736C1.63214 3.88258 1 5.4087 1 7Z"
                                        stroke="#F21E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Right side content */}
                            <div className="task-content">
                                <div className="task-header">
                                    <h4 className="task-title">Submit Documents</h4>
                                    <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.57444 4.64007C3.44398 4.64007 4.14888 3.82522 4.14888 2.82004C4.14888 1.81486 3.44398 1 2.57444 1C1.7049 1 1 1.81486 1 2.82004C1 3.82522 1.7049 4.64007 2.57444 4.64007Z" stroke="#A1A3AB" />
                                        <path d="M8.08494 4.64007C8.95448 4.64007 9.65938 3.82522 9.65938 2.82004C9.65938 1.81486 8.95448 1 8.08494 1C7.2154 1 6.5105 1.81486 6.5105 2.82004C6.5105 3.82522 7.2154 4.64007 8.08494 4.64007Z" stroke="#A1A3AB" />
                                        <path d="M13.5954 4.64007C14.465 4.64007 15.1699 3.82522 15.1699 2.82004C15.1699 1.81486 14.465 1 13.5954 1C12.7259 1 12.021 1.81486 12.021 2.82004C12.021 3.82522 12.7259 4.64007 13.5954 4.64007Z" stroke="#A1A3AB" />
                                    </svg>

                                </div>

                                <div className="task-body">
                                    <p className="task-desc">Make sure to submit all the necessary docum.....</p>
                                    <div className="task-image">
                                        <img
                                            src={taskImg}
                                            alt="Documents"
                                        />
                                    </div>
                                </div>

                                <div className="task-footer">
                                    <span>Priority: <span className="priority extreme">Extreme</span></span>
                                    <span>Status: <span className="status not-started">Not Started</span></span>
                                    <span className="created">Created on: 20/06/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Task Card */}
                    <div className="task-card">
                        <div className="task-content-wrapper">
                            {/* Icon Column */}
                            <div className="task-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 7C1 8.5913 1.63214 10.1174 2.75736 11.2426C3.88258 12.3679 5.4087 13 7 13C8.5913 13 10.1174 12.3679 11.2426 11.2426C12.3679 10.1174 13 8.5913 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1C5.4087 1 3.88258 1.63214 2.75736 2.75736C1.63214 3.88258 1 5.4087 1 7Z"
                                        stroke="#F21E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Right side content */}
                            <div className="task-content">
                                <div className="task-header">
                                    <h4 className="task-title">Submit Documents</h4>
                                    <span className="task-menu">•••</span>
                                </div>

                                <div className="task-body">
                                    <p className="task-desc">Make sure to submit all the necessary docum.....</p>
                                    <div className="task-image">
                                        <img
                                            src={taskImg}
                                            alt="Documents"
                                        />
                                    </div>
                                </div>

                                <div className="task-footer">
                                    <span>Priority: <span className="priority extreme">Extreme</span></span>
                                    <span>Status: <span className="status not-started">Not Started</span></span>
                                    <span className="created">Created on: 20/06/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Task Card */}
                    <div className="task-card">
                        <div className="task-content-wrapper">
                            {/* Icon Column */}
                            <div className="task-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 7C1 8.5913 1.63214 10.1174 2.75736 11.2426C3.88258 12.3679 5.4087 13 7 13C8.5913 13 10.1174 12.3679 11.2426 11.2426C12.3679 10.1174 13 8.5913 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1C5.4087 1 3.88258 1.63214 2.75736 2.75736C1.63214 3.88258 1 5.4087 1 7Z"
                                        stroke="#F21E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Right side content */}
                            <div className="task-content">
                                <div className="task-header">
                                    <h4 className="task-title">Submit Documents</h4>
                                    <span className="task-menu">•••</span>
                                </div>

                                <div className="task-body">
                                    <p className="task-desc">Make sure to submit all the necessary docum.....</p>
                                    <div className="task-image">
                                        <img
                                            src={taskImg}
                                            alt="Documents"
                                        />
                                    </div>
                                </div>

                                <div className="task-footer">
                                    <span>Priority: <span className="priority extreme">Extreme</span></span>
                                    <span>Status: <span className="status not-started">Not Started</span></span>
                                    <span className="created">Created on: 20/06/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Task Card */}
                    <div className="task-card">
                        <div className="task-content-wrapper">
                            {/* Icon Column */}
                            <div className="task-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 7C1 8.5913 1.63214 10.1174 2.75736 11.2426C3.88258 12.3679 5.4087 13 7 13C8.5913 13 10.1174 12.3679 11.2426 11.2426C12.3679 10.1174 13 8.5913 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1C5.4087 1 3.88258 1.63214 2.75736 2.75736C1.63214 3.88258 1 5.4087 1 7Z"
                                        stroke="#F21E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Right side content */}
                            <div className="task-content">
                                <div className="task-header">
                                    <h4 className="task-title">Submit Documents</h4>
                                    <span className="task-menu">•••</span>
                                </div>

                                <div className="task-body">
                                    <p className="task-desc">Make sure to submit all the necessary docum.....</p>
                                    <div className="task-image">
                                        <img
                                            src={taskImg}
                                            alt="Documents"
                                        />
                                    </div>
                                </div>

                                <div className="task-footer">
                                    <span>Priority: <span className="priority extreme">Extreme</span></span>
                                    <span>Status: <span className="status not-started">Not Started</span></span>
                                    <span className="created">Created on: 20/06/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Task Card */}
                    <div className="task-card">
                        <div className="task-content-wrapper">
                            {/* Icon Column */}
                            <div className="task-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 7C1 8.5913 1.63214 10.1174 2.75736 11.2426C3.88258 12.3679 5.4087 13 7 13C8.5913 13 10.1174 12.3679 11.2426 11.2426C12.3679 10.1174 13 8.5913 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1C5.4087 1 3.88258 1.63214 2.75736 2.75736C1.63214 3.88258 1 5.4087 1 7Z"
                                        stroke="#F21E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Right side content */}
                            <div className="task-content">
                                <div className="task-header">
                                    <h4 className="task-title">Submit Documents</h4>
                                    <span className="task-menu">•••</span>
                                </div>

                                <div className="task-body">
                                    <p className="task-desc">Make sure to submit all the necessary docum.....</p>
                                    <div className="task-image">
                                        <img
                                            src={taskImg}
                                            alt="Documents"
                                        />
                                    </div>
                                </div>

                                <div className="task-footer">
                                    <span>Priority: <span className="priority extreme">Extreme</span></span>
                                    <span>Status: <span className="status not-started">Not Started</span></span>
                                    <span className="created">Created on: 20/06/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Task Card */}
                    <div className="task-card">
                        <div className="task-content-wrapper">
                            {/* Icon Column */}
                            <div className="task-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 7C1 8.5913 1.63214 10.1174 2.75736 11.2426C3.88258 12.3679 5.4087 13 7 13C8.5913 13 10.1174 12.3679 11.2426 11.2426C12.3679 10.1174 13 8.5913 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1C5.4087 1 3.88258 1.63214 2.75736 2.75736C1.63214 3.88258 1 5.4087 1 7Z"
                                        stroke="#F21E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Right side content */}
                            <div className="task-content">
                                <div className="task-header">
                                    <h4 className="task-title">Submit Documents</h4>
                                    <span className="task-menu">•••</span>
                                </div>

                                <div className="task-body">
                                    <p className="task-desc">Make sure to submit all the necessary docum.....</p>
                                    <div className="task-image">
                                        <img
                                            src={taskImg}
                                            alt="Documents"
                                        />
                                    </div>
                                </div>

                                <div className="task-footer">
                                    <span>Priority: <span className="priority extreme">Extreme</span></span>
                                    <span>Status: <span className="status not-started">Not Started</span></span>
                                    <span className="created">Created on: 20/06/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Task Card */}
                    <div className="task-card">
                        <div className="task-content-wrapper">
                            {/* Icon Column */}
                            <div className="task-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 7C1 8.5913 1.63214 10.1174 2.75736 11.2426C3.88258 12.3679 5.4087 13 7 13C8.5913 13 10.1174 12.3679 11.2426 11.2426C12.3679 10.1174 13 8.5913 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1C5.4087 1 3.88258 1.63214 2.75736 2.75736C1.63214 3.88258 1 5.4087 1 7Z"
                                        stroke="#F21E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Right side content */}
                            <div className="task-content">
                                <div className="task-header">
                                    <h4 className="task-title">Submit Documents</h4>
                                    <span className="task-menu">•••</span>
                                </div>

                                <div className="task-body">
                                    <p className="task-desc">Make sure to submit all the necessary docum.....</p>
                                    <div className="task-image">
                                        <img
                                            src={taskImg}
                                            alt="Documents"
                                        />
                                    </div>
                                </div>

                                <div className="task-footer">
                                    <span>Priority: <span className="priority extreme">Extreme</span></span>
                                    <span>Status: <span className="status not-started">Not Started</span></span>
                                    <span className="created">Created on: 20/06/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="right-column card">
                <div className="task-detail-card">
                    <div className="task-detail-header">
                        <img
                            className="detail-image"
                            src={taskImg}
                            alt="Task"
                        />
                        <div className='detail-content'>
                            <h4 className="detail-title">Submit Documents</h4>
                            <p className='priority'>Priority: <span className="extreme">Extreme</span></p>
                            <p className='status'>Status: <span className=" not-started">Not Started</span></p>
                            <p className="created">Created on: 20/06/2023</p>
                        </div>
                    </div>

                    <div className="task-description">
                        <p>
                            Review the list of documents required for submission and ensure all necessary documents are ready.
                            Organize the documents accordingly and scan them if physical copies need to be submitted digitally.
                            Rename the scanned files appropriately for easy identification and verify the accepted file formats.
                            Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission.
                            Follow up if necessary to ensure proper processing.
                        </p>
                        <ul>
                            <li>Ensure that the documents are authentic and up-to-date.</li>
                            <li>Maintain confidentiality and security of sensitive information during the submission process.</li>
                            <li>If there are specific guidelines or deadlines for submission, adhere to them diligently.</li>
                        </ul>
                    </div>

                    <div className="task-actions">
                        <div className="header-icon-group">
                            <div className="header-icon">
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3704 15.4889C10.3704 15.6068 10.3246 15.7199 10.2432 15.8032C10.1618 15.8866 10.0514 15.9334 9.93627 15.9334H5.30585C5.19072 15.9334 5.0803 15.8866 4.99889 15.8032C4.91748 15.7199 4.87175 15.6068 4.87175 15.4889C4.87175 15.3711 4.91748 15.258 4.99889 15.1747C5.0803 15.0913 5.19072 15.0445 5.30585 15.0445H9.93627C10.0514 15.0445 10.1618 15.0913 10.2432 15.1747C10.3246 15.258 10.3704 15.3711 10.3704 15.4889ZM14.2852 13.0445C14.1975 13.2027 14.0701 13.3342 13.9162 13.4253C13.7624 13.5165 13.5876 13.564 13.4098 13.563H1.83304C1.65499 13.5626 1.48019 13.5142 1.32625 13.4226C1.1723 13.331 1.04466 13.1995 0.956185 13.0413C0.867707 12.8831 0.821519 12.7039 0.822275 12.5216C0.823031 12.3393 0.870704 12.1604 0.960491 12.003C1.36927 11.2815 1.97774 9.24745 1.97774 6.60004C1.97774 5.06768 2.5723 3.59808 3.63063 2.51454C4.68896 1.43099 6.12436 0.822266 7.62106 0.822266C9.11776 0.822266 10.5532 1.43099 11.6115 2.51454C12.6698 3.59808 13.2644 5.06768 13.2644 6.60004C13.2644 9.24671 13.8736 11.2815 14.2831 12.003C14.3738 12.1607 14.4219 12.3404 14.4223 12.5234C14.4226 12.7065 14.3753 12.8864 14.2852 13.0445ZM13.5321 12.4519C12.9844 11.4889 12.3962 9.24301 12.3962 6.60004C12.3962 5.30343 11.8931 4.05992 10.9976 3.14308C10.1021 2.22623 8.8875 1.71115 7.62106 1.71115C6.35462 1.71115 5.14005 2.22623 4.24454 3.14308C3.34903 4.05992 2.84594 5.30343 2.84594 6.60004C2.84594 9.24375 2.25701 11.4889 1.70932 12.4519C1.69662 12.4744 1.68993 12.5 1.68993 12.526C1.68993 12.552 1.69662 12.5775 1.70932 12.6C1.72123 12.6227 1.739 12.6416 1.76069 12.6547C1.78238 12.6678 1.80715 12.6745 1.83231 12.6741H13.4091C13.4342 12.6745 13.459 12.6678 13.4807 12.6547C13.5024 12.6416 13.5202 12.6227 13.5321 12.6C13.5448 12.5775 13.5515 12.552 13.5515 12.526C13.5515 12.5 13.5448 12.4744 13.5321 12.4519Z" fill="white" />
                                </svg>
                            </div>
                            <div className="header-icon">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3276 2.09458L9.92466 2.09459V1.24737C9.92466 1.0125 9.73447 0.822266 9.49966 0.822266C9.26485 0.822266 9.07466 1.0125 9.07466 1.24737V2.09438H5.67466V1.24737C5.67466 1.0125 5.48447 0.822266 5.24966 0.822266C5.01485 0.822266 4.82466 1.0125 4.82466 1.24737V2.09438H1.42764C0.958224 2.09438 0.577637 2.47505 0.577637 2.94458V13.5721C0.577637 14.0416 0.958224 14.4223 1.42764 14.4223H13.3276C13.797 14.4223 14.1776 14.0416 14.1776 13.5721V2.94458C14.1776 2.47525 13.797 2.09458 13.3276 2.09458ZM13.3276 13.5721H1.42764V2.94458H4.82466V3.37286C4.82466 3.60772 5.01485 3.79796 5.24966 3.79796C5.48447 3.79796 5.67466 3.60772 5.67466 3.37286V2.94479H9.07466V3.37308C9.07466 3.60794 9.26485 3.79818 9.49966 3.79818C9.73447 3.79818 9.92466 3.60794 9.92466 3.37308V2.94479H13.3276V13.5721ZM10.3526 7.62087H11.2026C11.4372 7.62087 11.6276 7.43043 11.6276 7.19577V6.34557C11.6276 6.11092 11.4372 5.92047 11.2026 5.92047H10.3526C10.118 5.92047 9.92764 6.11092 9.92764 6.34557V7.19577C9.92764 7.43043 10.118 7.62087 10.3526 7.62087ZM10.3526 11.0215H11.2026C11.4372 11.0215 11.6276 10.8312 11.6276 10.5964V9.74616C11.6276 9.5115 11.4372 9.32106 11.2026 9.32106H10.3526C10.118 9.32106 9.92764 9.5115 9.92764 9.74616V10.5964C9.92764 10.8314 10.118 11.0215 10.3526 11.0215ZM7.80264 9.32106H6.95264C6.71804 9.32106 6.52764 9.5115 6.52764 9.74616V10.5964C6.52764 10.8312 6.71804 11.0215 6.95264 11.0215H7.80264C8.03724 11.0215 8.22764 10.8312 8.22764 10.5964V9.74616C8.22764 9.51171 8.03724 9.32106 7.80264 9.32106ZM7.80264 5.92047H6.95264C6.71804 5.92047 6.52764 6.11092 6.52764 6.34557V7.19577C6.52764 7.43043 6.71804 7.62087 6.95264 7.62087H7.80264C8.03724 7.62087 8.22764 7.43043 8.22764 7.19577V6.34557C8.22764 6.1107 8.03724 5.92047 7.80264 5.92047ZM4.40264 5.92047H3.55264C3.31804 5.92047 3.12764 6.11092 3.12764 6.34557V7.19577C3.12764 7.43043 3.31804 7.62087 3.55264 7.62087H4.40264C4.63724 7.62087 4.82764 7.43043 4.82764 7.19577V6.34557C4.82764 6.1107 4.63724 5.92047 4.40264 5.92047ZM4.40264 9.32106H3.55264C3.31804 9.32106 3.12764 9.5115 3.12764 9.74616V10.5964C3.12764 10.8312 3.31804 11.0215 3.55264 11.0215H4.40264C4.63724 11.0215 4.82764 10.8312 4.82764 10.5964V9.74616C4.82764 9.51171 4.63724 9.32106 4.40264 9.32106Z" fill="#F8F8FB" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTask;
