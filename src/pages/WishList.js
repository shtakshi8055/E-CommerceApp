import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Autentication/AuthContext';
import { useCart } from '../components/CartContext';
import './Cart.css';

const WishList = () => {
    const { wish, dispatch} = useCart();
    const { currentUser } = useAuth();

    const handleRemove = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', product });
    };

    return (
        <div className="cart">
            <h2><i>Your WishList</i></h2>
        </div>
    );
};

export default WishList;
