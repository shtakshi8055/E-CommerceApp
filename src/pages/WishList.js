// import React from 'react';
// import './Cart.css';
// import { useWish } from '../components/WishContext';

// const WishList = () => {
//     const { wish, dispatch} = useWish();

//     const handleRemove = (product) => {
//         dispatch({ type: 'REMOVE_FROM_CART', product });
//     };

//     return (
//         <div className="cart">
//             <h2><i>WishList</i></h2>
//             {wish.length === 0 ? (
//                 <p>Your wishlist is empty.</p>
//             ) : (
//                 <React.Fragment>
//                     <div className="cart-items">
//                         {wish.map((product, index) => (
//                             <div className="cart-item" key={index}>
//                                 <div className="cart-item-image">
//                                     <img src={product.image} alt={product.name} />
//                                 </div>
//                                 <div className="cart-item-details">
//                                     <h3>{product.name}</h3>
//                                     <p>Price: ${product.price.toFixed(2)}</p>
//                                     <p>Quantity: {product.quantity}</p>
//                                     <div className="cart-item-actions">
//                                         <button onClick={() => handleRemove(product)}>Add to Cart</button>
//                                         <button onClick={() => handleRemove(product)}>Remove</button>
//                                     </div>
//                                 </div>
//                                 <div className="cart-item-subtotal">   
//                                     Subtotal: ${(product.price * product.quantity).toFixed(2)}
//                                 </div>
//                                 </div>
//                         ))}
//                     </div>
//                 </React.Fragment>
//             )}
//         </div>
//     );
// };

// export default WishList;
