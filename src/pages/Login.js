// src/pages/Login.js
import React, { useState } from 'react';
import { useAuth } from '../Autentication/AuthContext';
import './Login.css'; // Import the CSS file
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const { isLoggedIn, login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (login(email, password)) {
            navigate('/');
        } else {
            setError('Invalid Credentials');
        }
    };

    return (
        <div className="login-container">
            {!isLoggedIn ? (
                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                           
                            <input 
                            placeholder='Username'
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                           
                            <input 
                            placeholder='Password'
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        {error && <div className="error">{error}</div>}
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <div className="register-link">
                        <p>Don't have an account? <Link to="/register">Register here</Link></p>
                    </div>
                </div>
            ) : (
                navigate('/')
            )}
        </div>
    );
};

export default Login;
