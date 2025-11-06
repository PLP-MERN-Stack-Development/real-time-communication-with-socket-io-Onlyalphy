import React, { useState } from 'react';

// This component receives the 'onLogin' function from App.jsx as a prop
function LoginScreen({ onLogin }) {
  // This local state just holds what the user is typing in the input box
  const [nameInput, setNameInput] = useState('');

  // This function runs when the user clicks "Join"
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    if (nameInput.trim()) {
      onLogin(nameInput.trim()); // Call the function from App.jsx with the new name
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Join Chat</h2>
        <p>Please enter your name to continue</p>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Enter your name"
          autoFocus
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
}

export default LoginScreen;