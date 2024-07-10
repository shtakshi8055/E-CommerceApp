import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { useAuth } from '../Autentication/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
    const { currentUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
       // <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-toggle">
            <img src="https://cdn-icons-png.flaticon.com/128/6662/6662866.png" alt='img'/>
            </div>
        //     <nav className="sidebar-menu">
        //         <div>
        //         {currentUser ? (
        //             <Link to ='/profile'>
        //              <img src='https://cdn-icons-png.flaticon.com/128/5649/5649782.png' alt='profile'/>
        //                 {currentUser.firstName}
        //              </Link>
        //         ):(   
        //         ('')
        //         )}
        //         </div>

        //         {!currentUser ? (
        //             <Link to="/login" onClick={toggleSidebar}>My Orders</Link>
        //         ) : 
        //         <Link to="/orders" onClick={toggleSidebar}>My Orders</Link>
        //         }
        //         <Link to="/cart" onClick={toggleSidebar}>Cart</Link>
        //         <Link to ='/register' onClick={toggleSidebar}>Register</Link>

        //     </nav>
        // </div>
    );
};

export default Sidebar;
