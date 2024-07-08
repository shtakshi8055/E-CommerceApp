import React, { useState } from 'react';
import { useAuth } from '../Autentication/AuthContext';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const { isLoggedIn, login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (login(username, password)) {
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
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleLogin}>
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

                        <p>Don't have an Account? 
                            <Link to='/register'>Sign-up</Link></p>
                    </form>
                </div>
            ) : (
                navigate('/')
            )}
        </div>
    );
};

export default Login;
