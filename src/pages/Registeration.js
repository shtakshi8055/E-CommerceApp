// src/pages/Register.js
import React, { useState } from 'react';
import { useAuth } from '../Autentication/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Registeration.css'; // Add CSS for styling

const Register = () => {
    const { register } = useAuth();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState ('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const newUser = { firstName, lastName, dateOfBirth, email, password, address };
        register(newUser);
        navigate('/login');
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                   
                    <input 
                    placeholder='First Name'
                        type="text" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                   
                    <input 
                    placeholder='Last Name'
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    
                    <input 
                    placeholder='Date- of- Birth'
                        type="date" 
                        value={dateOfBirth} 
                        onChange={(e) => setDateOfBirth(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    
                    <input 
                    placeholder='Email'
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
              
                    <input 
                    placeholder='Address'
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
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
                <div className="form-group">
                   
                    <input 
                    placeholder='Confirm Password'
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default Register;
