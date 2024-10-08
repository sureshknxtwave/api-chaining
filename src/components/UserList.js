import React from 'react';
import '../styles/UserList.css'; 

function UserList({ users, onSelectUser }) {
  return (
    <div className="user-list-container">
      <h2 className="user-list-title">Users</h2>
      <ul className="list-disc">
        {users.map(user => (
          <li key={user.id} className="user-list-item">
            <span className="user-name">{user.name} ({user.email})</span>
            <button 
              className="select-user-button"
              onClick={() => onSelectUser(user)}
            >
              Select User
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
