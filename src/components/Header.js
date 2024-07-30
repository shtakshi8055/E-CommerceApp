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

                <h1><i>My Store</i></h1>
            </div>
            <nav>
                <ul>
                    <li style={{ marginRight: "90px", fontSize: "27px" }}><Link to="/">Home</Link></li>
                    <li style={{ marginRight: "90px", fontSize: "27px" }}><Link to="/about">About</Link></li>
                    <li style={{ marginRight: "90px", fontSize: "27px" }}><Link to="/contact">Contact</Link></li>
                </ul>

            </nav>
            {/* <Link to='/wishlist'>
                <img style={{
                    width: "44px", height: "46px",
                    marginRight: "-300px"
                }}
                    src='https://cdn-icons-png.flaticon.com/128/7245/7245022.png' alt='wishlist' />
            </Link> */}
            <div className="header-buttons">
                {cart.length === 0 ? (
                    <Link to="/cart">
                        <img className='wishlist'
                            src='https://cdn-icons-png.flaticon.com/128/3916/3916630.png' alt='img' />
                    </Link>
                ) : (
                    <Link to="/cart">
                        <img src='https://cdn-icons-png.flaticon.com/128/3916/3916609.png' alt='img' />
                        <p className='count'>{cart.length}</p>
                    </Link>
                )}
                {!currentUser ? (
                    <Link to="/login"><button className="login-btn">Login</button></Link>
                ) : (
                    <React.Fragment>

                        <div class="navbar">
                            <div class="dropdown">
                                <button class="dropbtn">{currentUser.firstName}
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <Link to='/profile'>
                                    <a href="#">Profile</a>
                                    </Link>
                                    <Link to='/orders'>
                                    <a href="#">My Orders</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <button className="logout-btn" onClick={logout}>Logout</button>

                    </React.Fragment>
                )}
            </div>
        </header>
    );
};

export default Header;
