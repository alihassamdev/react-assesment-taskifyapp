import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ENDPOINTS } from '@/config/apiConfig';

import './SignIn.css';

import signInPoster from '@/assets/sigin-poster.png';

const Signin = ({ onLogin }) => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = e =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const validateLoginForm = () => {
        const newErrors = {};
        let isValid = true;

        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailPattern.test(form.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!form.password.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setMessage('');
        setErrors({});

        if (!validateLoginForm()) return;

        try {
            const res = await fetch(ENDPOINTS.users);
            const users = await res.json();

            const user = users.find(
                u => u.email === form.email && u.password === form.password
            );

            if (!user) {
                setMessage('Invalid email or password.');
                return;
            }

            const token = btoa(`${form.email}:${form.password}`);
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('userId', user.id);


            onLogin();
            navigate('/dashboard');
        } catch (error) {
            setMessage('Error during login.');
        }
    };

    return (
        <div className='signin-page'>
            <div className='signin-form-wrapper'>
                <div className="signin-container">
                    <div className="left-panel">
                        <img src={signInPoster} alt="Signin Illustration" className="signin-image" />
                    </div>

                    <div className="right-panel">
                        <h2 className='heading'>Sign In</h2>

                        {message && <p className="error-message">{message}</p>}

                        <form className="signin-form" onSubmit={handleSubmit}>

                            <div className="input-group">
                                <span className="icon">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM25 10L15 16.25L5 10V7.5L15 13.75L25 7.5V10Z" fill="black" />
                                    </svg>

                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="field-error">{errors.email}</p>}
                            </div>

                            <div className="input-group">
                                <span className="icon">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 21.25C15.663 21.25 16.2989 20.9866 16.7678 20.5178C17.2366 20.0489 17.5 19.413 17.5 18.75C17.5 18.087 17.2366 17.4511 16.7678 16.9822C16.2989 16.5134 15.663 16.25 15 16.25C14.337 16.25 13.7011 16.5134 13.2322 16.9822C12.7634 17.4511 12.5 18.087 12.5 18.75C12.5 19.413 12.7634 20.0489 13.2322 20.5178C13.7011 20.9866 14.337 21.25 15 21.25ZM22.5 10C23.163 10 23.7989 10.2634 24.2678 10.7322C24.7366 11.2011 25 11.837 25 12.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H7.5C6.83696 27.5 6.20107 27.2366 5.73223 26.7678C5.26339 26.2989 5 25.663 5 25V12.5C5 11.837 5.26339 11.2011 5.73223 10.7322C6.20107 10.2634 6.83696 10 7.5 10H8.75V7.5C8.75 5.8424 9.40848 4.25269 10.5806 3.08058C11.7527 1.90848 13.3424 1.25 15 1.25C15.8208 1.25 16.6335 1.41166 17.3918 1.72575C18.1501 2.03984 18.8391 2.50022 19.4194 3.08058C19.9998 3.66095 20.4602 4.34994 20.7742 5.10823C21.0883 5.86651 21.25 6.67924 21.25 7.5V10H22.5ZM15 3.75C14.0054 3.75 13.0516 4.14509 12.3483 4.84835C11.6451 5.55161 11.25 6.50544 11.25 7.5V10H18.75V7.5C18.75 6.50544 18.3549 5.55161 17.6517 4.84835C16.9484 4.14509 15.9946 3.75 15 3.75Z" fill="#212427" />
                                    </svg>

                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <p className="field-error">{errors.password}</p>}
                            </div>

                            <p className="signin-link">
                                Don’t have an account? <Link to='/signup'>Create One</Link>
                            </p>

                            <button type="submit" className="login-button">Login</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signin;
