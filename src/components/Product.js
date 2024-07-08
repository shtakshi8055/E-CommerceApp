import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ product, handleAddToCart, handleBuyNow}) => {

    return (
        <div className="product">
            <Link to={`/product/${product.id}`} key={product.id} >
            <img className='product-img' src={product.image} alt={product.name} />
            </Link>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <div className="product-buttons">
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <button onClick={() => handleBuyNow(product)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;
