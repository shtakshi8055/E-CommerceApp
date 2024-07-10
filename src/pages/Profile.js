// src/pages/Profile.js
import React, { useState } from 'react';
import { useAuth } from '../Autentication/AuthContext';
import './Profile.css';

const Profile = () => {
    const { currentUser, updateProfile } = useAuth();
    const [editMode, setEditMode] = useState(false);
    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [address, setAddress] = useState ('');
    const [dob, setDob] = useState(currentUser.dob);
    const [email, setEmail] = useState(currentUser.email);

    const handleUpdate = () => {
        const updatedUser = {
            ...currentUser,
            firstName,
            lastName,
            email, 
            dob,
            address
        };
        updateProfile(updatedUser);
        setEditMode(false);
    };

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            {!editMode ? (
                // <div className="profile-details">
                //     <p><strong>First Name:</strong> {currentUser.firstName}</p>
                //     <p><strong>Last Name:</strong> {currentUser.lastName}</p>
                //     <p><strong>Email:</strong> {currentUser.email}</p>
                //     <p><strong>Address:</strong> {currentUser.address}</p>
                //     <button onClick={() => setEditMode(true)} className="edit-button">Edit</button>
                // </div>

                <div className="profile-edit">
                <div className="form-group">
                    <label>First Name:</label>
                    <input value={currentUser.firstName} />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input value={currentUser.lastName}/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input value={currentUser.email}  />
                </div>
                <div className="form-group">
                    <label>Date-Of-Birth:</label>
                    <input value={currentUser.dob}  />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input  value={currentUser.address} />               
                </div>
                <button onClick={() => setEditMode(true)} className="edit-button">Edit</button>
            </div>

            ) : (
                <div className="profile-edit">
                    <div className="form-group">
                        <label>First Name:</label>
                        <input 
                            type="text" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Date-Of-Birth:</label>
                        <input 
                            type="date" 
                            value={dob} 
                            onChange={(e) => setDob(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input 
                            type="text" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                        />
                    </div>
                    <button onClick={handleUpdate} className="save-button">Save</button>
                    <button onClick={() => setEditMode(false)} className="cancel-button">Cancel</button>
                </div>
            )}

        </div>
    );
};

export default Profile;
