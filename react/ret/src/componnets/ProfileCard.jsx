import React from 'react';

export default function ProfileCard({ name, age, isOnline }) {
    return (
        <div data-testid="profile-card" className="card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <span className={isOnline ? 'online' : 'offline'}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
            <button>Send Message</button>
        </div>
    );
}
