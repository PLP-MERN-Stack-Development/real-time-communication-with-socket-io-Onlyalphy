import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import ChatScreen from './components/ChatScreen';
import './index.css'; // We will add styles here later

function App() {
  // This state holds the user's name.
  // If it's empty (null), we show the login screen.
  // If it has a name, we show the chat screen.
  const [username, setUsername] = useState(null);

  if (!username) {
    // Pass the setUsername function to the login screen
    // so it can "log us in" by setting the name.
    return <LoginScreen onLogin={setUsername} />;
  }

  // Once we have a username, show the main chat screen
  return <ChatScreen username={username} />;
}

export default App;