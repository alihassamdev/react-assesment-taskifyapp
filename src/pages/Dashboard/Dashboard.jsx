import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
    const [user, setUser] = useState(null);
    const [currentDate, setCurrentDate] = useState({ day: '', date: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate('/login');
        }

        // Get today's date
        const today = new Date();

        // Format as DD/MM/YYYY
        const formattedDate = today.toLocaleDateString('en-GB');

        // Get day name 
        const dayName = today.toLocaleDateString('en-GB', { weekday: 'long' });

        // Save both
        setCurrentDate({ day: dayName, date: formattedDate });

    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        onLogout();
        navigate('/login');
    };

    if (!user) return null; // or a loading spinner

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div>
                    <h1>Welcome back, {user.firstName}</h1>
                    <p>{user.email}</p>
                </div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </header>

            <section className="dashboard-info">
                <div className="card">
                    <h3 className='current-day'>{currentDate.day}</h3>
                    <p className='current-date'>{currentDate.date}</p>

                    <p>{user.firstName} {user.lastName}</p>
                </div>
            </section >
        </div >
    );
};

export default Dashboard;
