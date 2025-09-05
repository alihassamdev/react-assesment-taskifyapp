import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './SignUp.css';
import signUpPoster from '@/assets/signup-poster.png';
import { generateId } from '@/utils/idGenerator';
import { ENDPOINTS } from '@/config/apiConfig';

const Signup = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        consent: false
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };


    const validateForm = () => {
        const { firstName, lastName, userName, email, password, confirmPassword } = form;
        const newErrors = {};
        let isValid = true;

        if (!firstName.trim()) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        }

        if (!lastName.trim()) {
            newErrors.lastName = 'Last name is required';
            isValid = false;
        }

        if (!userName.trim()) {
            newErrors.userName = 'Username is required';
            isValid = false;
        } else if (userName.length < 3) {
            newErrors.userName = 'Username must be at least 3 characters';
            isValid = false;
        }

        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (!confirmPassword.trim()) {
            newErrors.confirmPassword = 'Confirm your password';
            isValid = false;
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        if (!validateForm()) return;

        setLoading(true);
        try {
            const res = await fetch(`${ENDPOINTS.users}?email=${form.email}`);
            const data = await res.json();

            if (data.length > 0) {
                setErrors(prev => ({ ...prev, email: 'Email already exists' }));
                setLoading(false);
                return;
            }

            const newUser = {
                id: generateId('user'),
                ...form
            };

            const createRes = await fetch(ENDPOINTS.users, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });

            if (!createRes.ok) {
                setMessage('Failed to create user.');
                setLoading(false);
                return;
            }

            setMessage('Sign up successful! Redirecting...');
            setTimeout(() => navigate('/signin'), 1500);

        } catch (err) {
            console.error(err.message);
            setMessage('Error during sign up.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='signup-page'>
            <div className="signup-container">
                <div className="left-panel">
                    <img src={signUpPoster} alt="Signup Illustration" className="signup-image" />
                </div>

                <div className="right-panel">
                    <h2 className='heading'>Sign Up</h2>
                    {message && <p className={`error - message ${message.includes("successful") ? 'success' : 'error'}`}>{message}</p>}

                    <form className="signup-form" onSubmit={handleSubmit}>

                        {/* First Name */}
                        <div className="input-group">
                            <span className="icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0003 10.4999C16.2555 10.4999 18.0837 8.67175 18.0837 6.41659C18.0837 4.16142 16.2555 2.33325 14.0003 2.33325C11.7452 2.33325 9.91699 4.16142 9.91699 6.41659C9.91699 8.67175 11.7452 10.4999 14.0003 10.4999Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.3335 23.9166C2.3335 18.7617 7.03458 14.5833 12.8335 14.5833" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.0833 24.4999L23.9167 18.6666L21.5833 16.3333L15.75 22.1666V24.4999H18.0833Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </span>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter First Name"
                                value={form.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <p className="field-error">{errors.firstName}</p>}
                        </div>

                        {/* Last Name */}
                        <div className="input-group">
                            <span className="icon">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0003 10.4999C16.2555 10.4999 18.0837 8.67175 18.0837 6.41659C18.0837 4.16142 16.2555 2.33325 14.0003 2.33325C11.7452 2.33325 9.91699 4.16142 9.91699 6.41659C9.91699 8.67175 11.7452 10.4999 14.0003 10.4999Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.3335 23.9166C2.3335 18.7617 7.03458 14.5833 12.8335 14.5833M18.0835 24.4999L23.9168 18.6666L21.5835 16.3333L15.7502 22.1666V24.4999H18.0835Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </span>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Enter Last Name"
                                value={form.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <p className="field-error">{errors.lastName}</p>}
                        </div>

                        {/* Username */}
                        <div className="input-group">
                            <span className="icon">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 5C16.3261 5 17.5979 5.52678 18.5355 6.46447C19.4732 7.40215 20 8.67392 20 10C20 11.3261 19.4732 12.5979 18.5355 13.5355C17.5979 14.4732 16.3261 15 15 15C13.6739 15 12.4021 14.4732 11.4645 13.5355C10.5268 12.5979 10 11.3261 10 10C10 8.67392 10.5268 7.40215 11.4645 6.46447C12.4021 5.52678 13.6739 5 15 5ZM15 17.5C20.525 17.5 25 19.7375 25 22.5V25H5V22.5C5 19.7375 9.475 17.5 15 17.5Z" fill="#212427" />
                                </svg>

                            </span>
                            <input
                                type="text"
                                name="userName"
                                placeholder="Enter Username"
                                value={form.userName}
                                onChange={handleChange}
                            />
                            {errors.userName && <p className="field-error">{errors.userName}</p>}
                        </div>

                        {/* Email */}
                        <div className="input-group">
                            <span className="icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                        {/* Password */}
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

                        {/* Confirm Password */}
                        <div className="input-group">
                            <span className="icon">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 21.25C14.337 21.25 13.7011 20.9866 13.2322 20.5178C12.7634 20.0489 12.5 19.413 12.5 18.75C12.5 17.3625 13.6125 16.25 15 16.25C15.663 16.25 16.2989 16.5134 16.7678 16.9822C17.2366 17.4511 17.5 18.087 17.5 18.75C17.5 19.413 17.2366 20.0489 16.7678 20.5178C16.2989 20.9866 15.663 21.25 15 21.25ZM22.5 25V12.5H7.5V25H22.5ZM22.5 10C23.163 10 23.7989 10.2634 24.2678 10.7322C24.7366 11.2011 25 11.837 25 12.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H7.5C6.83696 27.5 6.20107 27.2366 5.73223 26.7678C5.26339 26.2989 5 25.663 5 25V12.5C5 11.1125 6.1125 10 7.5 10H8.75V7.5C8.75 5.8424 9.40848 4.25269 10.5806 3.08058C11.7527 1.90848 13.3424 1.25 15 1.25C15.8208 1.25 16.6335 1.41166 17.3918 1.72575C18.1501 2.03984 18.8391 2.50022 19.4194 3.08058C19.9998 3.66095 20.4602 4.34994 20.7742 5.10823C21.0883 5.86651 21.25 6.67924 21.25 7.5V10H22.5ZM15 3.75C14.0054 3.75 13.0516 4.14509 12.3483 4.84835C11.6451 5.55161 11.25 6.50544 11.25 7.5V10H18.75V7.5C18.75 6.50544 18.3549 5.55161 17.6517 4.84835C16.9484 4.14509 15.9946 3.75 15 3.75Z" fill="black" />
                                </svg>
                            </span>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && <p className="field-error">{errors.confirmPassword}</p>}
                        </div>

                        {/* Terms & Conditions */}
                        <div className="terms">
                            <label>
                                <input
                                    type="checkbox"
                                    name="consent"
                                    checked={form.consent}
                                    onChange={handleChange} required />
                                I agree to all terms
                            </label>
                        </div>

                        <button type="submit" className="register-button" disabled={loading}>
                            {loading ? 'Registering...' : 'Register'}
                        </button>

                        <p className="signin-link">
                            Already have an account? <Link to="/signin">Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
