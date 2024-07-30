import React from 'react';
import { useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
// import saved from "../assests/saved.png";
// import unsaved from "../assests/unsaved.png";

const Product = ({ product, handleAddToCart, handleBuyNow, handleAddToWish}) => {
    //  const [name, setName] = useState(unsaved);

    // const changeImg = () => {
    //     let value = name;
    //     if (value === unsaved) {
    //         setName(saved)
    //     } 
    //     else {
    //         setName(unsaved)
    //     }
    // }

    return (
        <div className="product">
            <Link to={`/product/${product.id}`} key={product.id} >
                <img src={product.image} alt={product.name} />
            </Link>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <div className='main-content'>
                <div className="product-buttons">
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    <button onClick={() => handleBuyNow(product)}>Buy Now</button>
                    {/* <img src={name} onClick={changeImg} alt='wishlist' /> */}

                </div>
            </div>
        </div>
    );
};

export default Product;
