import React, { useState, useRef } from 'react';

// Receives the functions to send messages and typing status
function MessageInput({ onSendMessage, onSetTyping, typingUsers, myUsername }) {
  const [message, setMessage] = useState('');
  
  // We use a ref to manage the "stop typing" timeout
  const typingTimeoutRef = useRef(null);

  // Runs when the user presses "Send"
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim()); // Send the message
      onSetTyping(false); // Immediately say we stopped typing
      clearTimeout(typingTimeoutRef.current); // Clear any pending timeout
      setMessage(''); // Clear the input box
    }
  };

  // Runs on every single key press
  const handleTyping = (e) => {
    setMessage(e.target.value);
    
    // Tell the server we are typing
    onSetTyping(true);

    // Clear the *previous* timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set a *new* timeout. If the user doesn't type for 2 seconds,
    // we'll tell the server we stopped typing.
    typingTimeoutRef.current = setTimeout(() => {
      onSetTyping(false);
    }, 2000);
  };

  // Filter out our own name from the typing list
  const otherTypingUsers = typingUsers.filter(user => user !== myUsername);

  return (
    <div className="message-input-container">
      <div className="typing-indicator">
        {otherTypingUsers.length > 0 && 
          `${otherTypingUsers.join(', ')} ${otherTypingUsers.length === 1 ? 'is' : 'are'} typing...`}
      </div>
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={message}
          onChange={handleTyping}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default MessageInput;