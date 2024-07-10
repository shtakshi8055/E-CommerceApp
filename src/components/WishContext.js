import React, { createContext, useContext, useReducer, useEffect } from 'react';

const WishContext = createContext();

const wishReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_WISH':
            const existingProductIndex = state.wish.findIndex(
                item => item.id === action.product.id
            );
            if (existingProductIndex >= 0) {
                const updatedCart = [...state.wish];
                updatedCart[existingProductIndex].quantity += 1;
                return { ...state, wish: updatedCart, subtotal: calculateSubtotal(updatedCart) };
            } else {
                const updatedCart = [...state.wish, { ...action.product, quantity: 1 }];
                return { ...state, cart: updatedCart, subtotal: calculateSubtotal(updatedCart) };
            }
            // case 'ADD_TO_WISHLIST':
            //     const WishListProductIndex = state.wish.find(
            //         items => items.id === action.product.id
            //     );  
            // return{...state,WishListProductIndex};

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

const calculateSubtotal = (wish) => {
    return wish.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const WishProvider = ({ children }) => {
    const [state, dispatch] = useReducer(wishReducer, { cart: [], subtotal: 0, orders: [] });

    useEffect(() => {
        dispatch({ type: 'FETCH_ORDERS' });
    }, []);

    return (
        <WishContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WishContext.Provider>
    );
};

const useWish = () => {
    return useContext(WishContext);
};

export { WishProvider, useWish };

