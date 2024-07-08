import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { useAuth } from '../Autentication/AuthContext';
import './Checkout.css';

const Checkout = () => {
    const { cart, subtotal, dispatch } = useCart();
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    const handlePay = () => {
        setOrderConfirmed(true);
        setTimeout(() => {
            dispatch({ type: 'ADD_ORDER' });
            navigate('/');
        },2000); 
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <div className="checkout-items">
                {cart.map((product, index) => (
                    <div className="checkout-item" key={index}>
                        <div className="checkout-item-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="checkout-item-details">
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>Subtotal: ${(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="checkout-total">
                <h3>Total: ${subtotal.toFixed(2)}</h3>
                <button className="pay-button" onClick={handlePay}>Pay Now</button>
            </div>
            <Link to="/cart" className="back-to-cart">Back to Cart</Link>
            
            {orderConfirmed && (
                <div className="order-confirmation">
                    <div className="order-confirmation-dialog">
                        <h3>Order Confirmed!</h3>
                        <p>Thanks for shopping with us, {currentUser.username}</p>
                        <img src='https://static.vecteezy.com/system/resources/previews/023/527/506/original/abstract-green-check-mark-circle-icon-sign-symbol-transparent-background-free-png.png' alt='purchase'/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
