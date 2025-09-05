import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import './MainLayout.css'
import '@/App.css'
import { ENDPOINTS } from '@/config/apiConfig';

export const MainLayout = ({ onLogout }) => {
    const [user, setUser] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState({ day: '', date: '' });
    const navigate = useNavigate();

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const userId = localStorage.getItem('userId');

    // Search Query and Results State
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(null);


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

    // Fetch Task's from json server
    const fetchTask = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${ENDPOINTS.todos}?userId=${userId}`);
            if (!res.ok) throw new Error('Failed to fetch todos');
            const data = await res.json();
            setTasks(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Add a task
    const addTask = async (newTask) => {
        try {
            const res = await fetch(ENDPOINTS.todos, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask),
            });
            if (!res.ok) throw new Error('Failed to add todo');
            const created = await res.json();
            setTasks(prev => [...prev, created]);
        } catch (err) {
            console.error(err);
        }
    };

    // Edit a task
    const editTask = async (id, updatedData) => {
        try {
            const res = await fetch(`${ENDPOINTS.todos}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData),
            });
            if (!res.ok) throw new Error('Failed to edit todo');
            const updated = await res.json();
            setTasks(prev => prev.map(task => task.id === id ? updated : task));
        } catch (err) {
            console.error(err);
        }
    };

    // Delete a task
    const deleteTask = async (id) => {
        try {
            const res = await fetch(`${ENDPOINTS.todos}/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete task');
            setTasks(prev => prev.filter(task => task.id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    // Update Task Status
    const updateTaskStatus = async (taskId, newStatus) => {
        try {
            const res = await fetch(`${ENDPOINTS.todos}/${taskId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!res.ok) throw new Error("Failed to update task status");

            const updatedTask = await res.json();

            // Update local state
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === updatedTask.id ? updatedTask : task
                )
            );

        } catch (error) {
            console.error("Failed to update status:", error);
            alert("Could not update task status.");
        }
    };

    // Handle Search Task 
    const handleSearch = () => {
        const term = searchTerm.trim().toLowerCase();
        if (!term) return setSearchResults(null);

        const filtered = tasks.filter(task =>
            task.title.toLowerCase().includes(term)
        );
        setSearchResults(filtered);
    };




    useEffect(() => {
        if (userId) fetchTask();
    }, [userId]);
    if (!user) return null;

    return (
        <>
            <Header
                onMenuClick={toggleSidebar}
                currentDate={currentDate}
                handleSearch={handleSearch}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <div className="dashboard">
                <SideBar
                    isOpen={sidebarOpen}
                    onClose={closeSidebar}
                    onLogout={onLogout}
                    user={user}
                />
                <main className="main">
                    <Outlet context={{
                        user,
                        refreshUserData,
                        tasks,
                        setTasks,
                        loading,
                        addTask,
                        editTask,
                        deleteTask,
                        updateTaskStatus,
                        searchResults,
                    }} />
                </main>
            </div>


        </>
    );
};
