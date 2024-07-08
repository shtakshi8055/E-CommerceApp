import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { useAuth } from '../Autentication/AuthContext';

const sampleProducts = [
   {
      id: 1, name: 'TV', price: 2999.99,image: 'https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjEzMzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGI4L2gyZC85ODEwMDU4NzA2OTc0LmpwZ3w2Yzg5YmJmZWM4NTdhYmY1MDA0OWRkYTFlZTA0ZWM1MzNkYjA4NzNmZDliZWFkYzg2ZWIyZmE5MmE4YjBjNzc3'
  },
  {
     id: 2, name: 'Refrigrator', price: 3000.90,image: 'https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-80010563/80010563.jpg'
  },
  {
     id: 3, name: 'Alhmirah', price: 7856.53,image: 'https://m.media-amazon.com/images/I/71chgzmX9VL._AC_UF1000,1000_QL80_.jpg'
  },
  {
     id: 4, name: 'IPhone', price: 1000.00,image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone-250x250.png'
  },
  {
      id: 5, name: 'Pen', price: 30.00,image: 'https://m.media-amazon.com/images/I/41jeWQAXPfL._AC_UF1000,1000_QL80_.jpg'
   },
   {
      id: 6, name: 'Laptop', price: 9700.45,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6WYLEZvTnqA_e1NU1cHVF03bKVPEhVUAJA&s'
   },
   {
      id: 7, name: 'Keyboard', price: 8796.65,image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSRr1N0Cdqeit0JjxQJYHMU_oGs3HW_p-vrNJhPTSyIo8xP8F995y8b05jXu6EV4Y5R0--PTpAlfBXp2czedips9GweqEGV_SplTJh-CBxOpEIjvpnMdxm9wkPUjSsdwBpcDsHaA6E&usqp=CAc'
   },
   {
      id: 8, name: 'IPad', price: 9874.50,image: 'https://www.ecom.soroltechnologies.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg'
   },
   {
      id: 9, name: 'Gaming Laptop', price: 4568.56,image: 'https://www.reliancedigital.in/medias/Asus-Strix-G-HN083W-493838344-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3Njc0NXxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaGZiLzEwMDU2ODMzMjM3MDIyLmpwZ3w1OGMxNjU5MzhmMDdjZjAxZDhhYjgzMGNjODY3MWVjYWMxN2FlNzA4YjIxZjQ4NGJkNDUyYmE0ODYzNTk5ODYy'
   },
   {
      id: 10, name: 'HeadPhone', price: 789.54,image: 'https://m.media-amazon.com/images/I/71VR6c3j2bL._AC_UF1000,1000_QL80_.jpg'
   },
   {
      id: 11, name: 'Mouse', price: 900.34,image: 'https://m.media-amazon.com/images/I/41hQB7KTFjL._AC_UF1000,1000_QL80_.jpg'
   },
   {
    id: 12, name: 'Hoodies', price: 1000.34,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3t4CHTYtzH2iVOdJwjImds9gRQLUgBzUuNA&s'
 },
 {
    id: 13, name: 'T-Shirt', price: 1000.34,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV5Qqv8wYhh61xWWk3Y-h9jlmZCv_ozHwrg&s'
 },
 {
    id: 14, name: 'General-AC', price: 1000.34,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqnH9zKWiemwXAXvbqDSKhxKnNA1Y-OGUx6g&s'
 },
 {
    id: 15, name: 'Tool-Box', price: 1000.34,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOnX-u-7u6F41jIYuzDTcDq4iVUsBoy6haA&s'
 },
 {
    id: 16, name: 'One-Plus', price: 1000.34,image: 'https://s.yimg.com/uu/api/res/1.2/t2OEhdHaeAc0zizGcesZZw--~B/Zmk9c3RyaW07aD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2024-03/da0418f0-dfcf-11ee-84fb-1c8eeb764c56'
 },
];

const ProductDetail = () => {
    const { id } = useParams();
    const { dispatch } = useCart();
    const { isLoggedIn } = useAuth();

    const product = sampleProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found!</div>;
    }

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', product });
       
    };

    const handleBuyNow = () => {
        if (isLoggedIn) {
           // alert(`Proceed to buy ${product.name}`);
        } else {
           // alert(`Please login to buy ${product.name}`);
        }
    };

    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <div className="product-buttons">
                <button onClick={handleAddToCart}>Add to Cart</button>
                {isLoggedIn ? (
                    <button onClick={handleBuyNow}>Buy Now</button>
                ) : (
                    <button onClick={() => alert('Please, first add to cart...')}>Buy Now</button>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
