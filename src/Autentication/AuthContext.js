import React, { createContext, useContext, useState} from 'react';

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

    const register = (newUser) => {
        setUsers((prevUsers) => {
            const updatedUsers = [...prevUsers, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return updatedUsers;
        });
    };

    const login = (email, password) => {
        const user = users.find((user) => user.email === email && user.password === password);
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

    const updateProfile = (updatedUser) => {
        setUsers((prevUsers) => {
            const updatedUsers = prevUsers.map(user =>
                user.email === updatedUser.email ? updatedUser : user
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return updatedUsers;
        });
        setCurrentUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    };

    return (
        <AuthContext.Provider value={{ users, currentUser, register, login, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
