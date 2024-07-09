import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../Autentication/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <Link className="sidebar-toggle" onClick={toggleSidebar}>
            <img src="https://cdn-icons-png.flaticon.com/128/6662/6662866.png"/>
            </Link>
            <nav className="sidebar-menu">
                <div>
                {currentUser ? (
                    <Link to ='/profile'>
                     <img src='https://cdn-icons-png.flaticon.com/128/5649/5649782.png' alt='profile'/>
                        {currentUser.firstName}
                     </Link>
                ):(   
                ('')
                )}
                </div>

                <Link to="/" onClick={toggleSidebar}>Home</Link>
                
                {!currentUser ? (
                    <Link to="/login" onClick={toggleSidebar}>Order</Link>
                ) : 
                <Link to="/orders" onClick={toggleSidebar}>Order</Link>
                }
                <Link to="/cart" onClick={toggleSidebar}>Cart</Link>
                <Link to="/about" onClick={toggleSidebar}>About</Link>
                <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
                <Link to ='/register' onClick={toggleSidebar}>Register</Link>

            </nav>
        </div>
    );
};

export default Sidebar;
