import React, { useEffect } from 'react';
// IMPORTANT: This path must match your file structure.
// We are in 'src/components' so we go up ('../') and then into 'socket/socket.js'
import { useSocket } from '../socket/socket.js'; 

// We will create these components in the next steps
import UserList from './UserList';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

// It receives the username from App.jsx
function ChatScreen({ username }) {
  // This is it! We are using your custom hook.
  // It gives us all the data and functions from your socket.js file.
  const {
    connect,
    disconnect,
    isConnected,
    messages,
    users,
    typingUsers,
    sendMessage,
    sendPrivateMessage, // We can use this later
    setTyping,
  } = useSocket();

  // This useEffect hook runs ONE TIME when the component is created
  // It's the perfect place to connect to the server.
  useEffect(() => {
    // Connect to the socket server and send our username
    connect(username);

    // This 'return' function is a cleanup.
    // It runs when the component is destroyed (e.g., user logs out).
    return () => {
      disconnect();
    };
  }, [username, connect, disconnect]); // Dependencies

  return (
    <div className="chat-container">
      {/* SECTION 1: USER LIST */}
      <div className="user-list-container">
        <h3>Online Users ({users.length})</h3>
        <UserList users={users} />
      </div>

      {/* SECTION 2: CHAT AREA */}
      <div className="message-area-container">
        <div className="connection-status">
          Status: {isConnected ? <span className="connected">Connected</span> : <span className="disconnected">Disconnected</span>}
        </div>
        
        {/* Pass messages and your username to the list */}
        <MessageList messages={messages} myUsername={username} />
        
        {/* Pass the functions to the input box */}
        <MessageInput 
          onSendMessage={sendMessage} 
          onSetTyping={setTyping}
          typingUsers={typingUsers}
          myUsername={username}
        />
      </div>
    </div>
  );
}

export default ChatScreen;