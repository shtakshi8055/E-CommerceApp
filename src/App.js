import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import PrivateRoute from './Routes/PrivateRoute';
import ProtectedComponent from './Routes/ProtectedComponents';
import Cart from './pages/Cart';
import { AuthProvider } from './Autentication/AuthContext';
import { CartProvider } from './components/CartContext';
import ProductDetail from './components/ProductDetails';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Sidebar from './components/Sidebar';
import Register from './pages/Registeration';
import Profile from './pages/Profile';
import './App.css';
import Footer from './components/Footer';

function App() {
    
    return (
        <AuthProvider>
            <CartProvider>
               
                    <div className="App">
                      
                        <Sidebar/>
                        <Header/>
                        
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />}/>
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/product/:id" element={<ProductDetail />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/orders" element={<Orders/>} />
                                <Route path="/register" element={<Register/>} />
                                <Route path="/profile" element={<Profile/>} />
                                <Route path="/protected" element={
                                    <PrivateRoute>
                                        <ProtectedComponent />
                                    </PrivateRoute>
                                } />
                            </Routes>
                        </main>
                    </div>
                 <Footer/> 
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
