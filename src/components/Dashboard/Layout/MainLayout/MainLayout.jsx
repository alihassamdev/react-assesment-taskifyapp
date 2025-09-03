import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import './MainLayout.css'
import { ENDPOINTS } from '@/config/apiConfig';

export const MainLayout = ({ onLogout }) => {
    const [user, setUser] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState({ day: '', date: '' });
    const navigate = useNavigate();

    // Fetch user data from backend using user ID stored in localStorage
    const fetchUserData = async () => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            navigate('/signin');
            return;
        }

        try {
            const res = await fetch(`${ENDPOINTS.users}/${userId}`);
            if (!res.ok) throw new Error('Failed to fetch user');
            const data = await res.json();
            setUser(data);
        } catch (err) {
            console.error(err);
            // Possibly logout or redirect if fetch fails
            navigate('/signin');
        }
    };

    useEffect(() => {
        fetchUserData();

        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-GB');
        const dayName = today.toLocaleDateString('en-GB', { weekday: 'long' });

        setCurrentDate({ day: dayName, date: formattedDate });
    }, [navigate]);

    // Function to refresh user data after profile update
    const refreshUserData = () => {
        fetchUserData();
    };

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };


    if (!user) return null;

    return (
        <>
            <Header onMenuClick={toggleSidebar} currentDate={currentDate} />
            <div className="dashboard">
                <SideBar
                    isOpen={sidebarOpen}
                    onClose={closeSidebar}
                    onLogout={onLogout}
                    user={user}
                />
                <main className="main">
                    <Outlet context={{ user, refreshUserData }} />
                </main>
            </div>


        </>
    );
};
