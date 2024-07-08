// import React, { createContext, useContext, useEffect, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(
//         localStorage.getItem('isLoggedIn') === 'true'
//     );

//     useEffect(() => {
//         localStorage.setItem('isLoggedIn', isLoggedIn);
//     }, [isLoggedIn]);

//     const login = ({ username, password }) => {
//         // Implement your authentication logic here
//         if (username === 'admin' && password === 'admin') { // Example logic
//             setIsLoggedIn(true);
//         }
//     };

//     const logout = () => {
//         setIsLoggedIn(false);
//     };

//     // const login = () => setIsLoggedIn(true);
//     // const logout = () => setIsLoggedIn(false); 

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem('users');
        return storedUsers ? JSON.parse(storedUsers) : [];
    });

    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const register = (username, password) => {
        const newUser = { username, password };
        setUsers((prevUsers) => {
            const updatedUsers = [...prevUsers, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return updatedUsers;
        });
    };

    const login = (username, password) => {
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            setCurrentUser(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        }
        return false;
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };


    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    return (
        <AuthContext.Provider value={{ users, currentUser, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
