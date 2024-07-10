import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Autentication/AuthContext';
import { useCart } from '../components/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, dispatch, subtotal } = useCart();
    const { currentUser } = useAuth();

    const handleRemove = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', product });
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <React.Fragment>
                    <div className="cart-items">
                        {cart.map((product, index) => (
                            <div className="cart-item" key={index}>
                                <div className="cart-item-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="cart-item-details">
                                    <h3>{product.name}</h3>
                                    <p>Price: ${product.price.toFixed(2)}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <div className="cart-item-actions">
                                        <button onClick={() => handleRemove(product)}>Remove</button>
                                    </div>
                                </div>
                                <div className="cart-item-subtotal">
                                   
                                    Subtotal: ${(product.price * product.quantity).toFixed(2)}
                                </div>
                                </div>

                        ))}
                    </div>
                    <div className="cart-subtotal">
                        
                        <h3>Total: ${subtotal.toFixed(2)}</h3>
                        {!currentUser ? (
                            <Link to="/login">
                            <button className="checkout-button">Checkout</button>
                        </Link>
                        ):(
                            <Link to="/checkout">
                            <button className="checkout-button">Checkout</button>
                        </Link>
                        )}
                        
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

export default Cart;
