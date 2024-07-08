import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Autentication/AuthContext';
import './Registeration.css';
const Register = () => {
    const { register } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        register(username, password);
        navigate('/login');
    };

    return (
        <div className="register-form">
                    <h2>Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input 
                                type="text" 
                                value={username} 
                                style={{textTransform: "capitalize"}}
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    </div>
    );
};

export default Register;
