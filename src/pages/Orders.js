import React, { useEffect } from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import './Order.css';

const Orders = () => {
    const { orders, dispatch } = useCart();

    useEffect(() => {
        dispatch({ type: 'FETCH_ORDERS' });
    }, [dispatch]);

    return (
        <div className="orders">
            <h2>My Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map((order, index) => (
                    <div className="order-card" key={index}>
                        <div className="order-header">
                            <h3><FaShoppingBag /> Order #{order.id}</h3>
                            <p>Date: {order.date}</p>
                        </div>
                        <div className="order-items">
                            {order.items.map((product, index) => (
                                <div className="order-item" key={index}>  
                                    <div className="order-item-image">
                                    <Link to={`/product/${product.id}`} key={product.id}>
                                        <img src={product.image} alt={product.name} />
                                        </Link>
                                    </div>
                                    <div className="order-item-details">
                                        <h4>{product.name}</h4>
                                        <p>Price: ${product.price.toFixed(2)}</p>
                                        <p>Quantity: {product.quantity}</p>
                                        <p>Subtotal: ${(product.price * product.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="order-total">
                            <h3>Total: ${order.total.toFixed(2)}</h3>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Orders;
