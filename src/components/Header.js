import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useAuth } from '../Autentication/AuthContext';
import './Header.css';

const Header = () => {
    const { cart } = useCart();
    const { currentUser, logout } = useAuth();

    return (
        <header className="header">
            <div className="logo">
            {/* <img src="https://cdn-icons-png.flaticon.com/512/3029/3029478.png"/> */}
                <h1><i>My Store</i></h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                
            </nav>

            <div className="header-buttons">

            {cart.length === 0 ? (
                              <Link to="/cart">
                        <img src='https://cdn-icons-png.flaticon.com/128/3916/3916630.png'/></Link>
                        ) : (
                            <Link to="/cart">
                            <img src='https://cdn-icons-png.flaticon.com/128/3916/3916609.png' />  
                            <p className='count'>{cart.length}</p>
                        </Link>
                       
                        )}
                {!currentUser ? (
                    <Link to="/login"><button className="login-btn">Login</button></Link>
                ) : (
                    <React.Fragment>
            
                      <i> <b>{currentUser.username}</b></i> 
                        
                        <button className="logout-btn" onClick={logout}>Logout</button>
                        
                    </React.Fragment>
                )}
            </div>
        </header>
    );
};

export default Header;
