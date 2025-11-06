import React from 'react';

// This is a simple component that just receives the 'users' array
function UserList({ users }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-list-item">
          {user.username}
        </li>
      ))}
    </ul>
  );
}

export default UserList;