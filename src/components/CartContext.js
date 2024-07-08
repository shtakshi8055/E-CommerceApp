import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProductIndex = state.cart.findIndex(
                item => item.id === action.product.id
            );
            if (existingProductIndex >= 0) {
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex].quantity += 1;
                return { ...state, cart: updatedCart, subtotal: calculateSubtotal(updatedCart) };
            } else {
                const updatedCart = [...state.cart, { ...action.product, quantity: 1 }];
                return { ...state, cart: updatedCart, subtotal: calculateSubtotal(updatedCart) };
            }
        case 'REMOVE_FROM_CART':
            const filteredCart = state.cart.filter(item => item.id !== action.product.id);
            return { ...state, cart: filteredCart, subtotal: calculateSubtotal(filteredCart) };
        case 'CLEAR_CART':
            return { ...state, cart: [], subtotal: 0 };
        case 'ADD_ORDER':
            const newOrder = {
                id: Date.now(),
                items: state.cart,
                total: state.subtotal,
                date: new Date().toLocaleString()
            };
            const updatedOrders = [...state.orders, newOrder];
            localStorage.setItem('orders', JSON.stringify(updatedOrders));
            return { ...state, orders: updatedOrders, cart: [], subtotal: 0 };
        case 'FETCH_ORDERS':
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            return { ...state, orders };
        default:
            return state;
    }
};

const calculateSubtotal = (cart) => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { cart: [], subtotal: 0, orders: [] });

    useEffect(() => {
        dispatch({ type: 'FETCH_ORDERS' });
    }, []);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    return useContext(CartContext);
};

export { CartProvider, useCart };

