import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
const Footer = () =>{

    return(
        <div>
            <footer className="footer" >
                {/* <h2>
                    <img src="https://cdn-icons-png.flaticon.com/128/5867/5867244.png"/>
                </h2> */}
               
            
            <br/>
            <div>
                <h4>Product</h4>
                <ul>
                    <li>Clothes</li>
                    <li>Electronics</li>
                    <li>Furniture</li>
                    <li>Stationary</li>
                    <li>Many More</li>
                </ul>
            </div>
            <div>
                <h4>Join Us On</h4>
                <ul>
                    <div className="instagram">
                    <img src="https://freepngimg.com/download/icon/logo/69807-logo-computer-instagram-icons-png-image-high-quality.png" alt="insta"/>
                    <li>Instagram</li></div>
                    <div className="instagram">
                    <img src="https://cdn-icons-png.flaticon.com/128/4494/4494464.png" alt="fb"/>
                    <li>Facebook</li></div>
                </ul>
            </div>
            <div>
                <h4>UseFull Links</h4>
                <ul>
                   <Link style={{textDecoration:'none',
                    color:'black'
                   }} to='/profile'><li>Your Account</li></Link> 
                    <li>Shipping Price</li>
                    <li> Become an Affilates</li>
                    <li>Help Centre</li>
                    <li>Sell on Store</li>
                    <li>Advertise Your Products</li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                <div className="instagram">
                    <img src="https://cdn-icons-png.freepik.com/512/4820/4820122.png" alt="home"/>
                    <li>Address</li></div>
                    <div className="instagram">
                    <img src="https://cdn-icons-png.flaticon.com/128/455/455705.png" alt="phone"/>
                    <li>Phone</li></div>
                    <div className="instagram">
                    <img src="https://cdn-icons-png.flaticon.com/128/2165/2165061.png" alt="mail"/>
                    <li>E-Mail</li></div>
                </ul>
                
            </div>
            </footer>
        </div>
    )
}
export default Footer;