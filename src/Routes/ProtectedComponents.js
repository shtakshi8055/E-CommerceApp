import React from 'react';

const ProtectedComponent = () => {
    return (
        <div>
            <h2>Protected Page</h2>
            <p>This page is only accessible to logged-in users.</p>
        </div>
    );
};

export default ProtectedComponent;
