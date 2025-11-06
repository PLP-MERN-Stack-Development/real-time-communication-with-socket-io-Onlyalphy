import React, { useEffect, useRef } from 'react';

// Receives the list of messages and your own username
function MessageList({ messages, myUsername }) {
  // This is a 'ref'. It's a way to point to a DOM element,
  // in this case, the bottom of the message list.
  const messagesEndRef = useRef(null);

  // This function will scroll our list to the bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // This 'useEffect' runs every time the 'messages' array changes.
  // This is how we auto-scroll when a new message arrives.
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Helper function to format the timestamp
  const formatTimestamp = (isoString) => {
    return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="message-list">
      {messages.map((msg) => {
        // --- System Message ---
        if (msg.system) {
          return (
            <div key={msg.id} className="message system">
              {msg.message}
            </div>
          );
        }

        // Check if the message is from you
        const isMine = msg.sender === myUsername;

        // --- Chat Message ---
        return (
          <div key={msg.id} className={`message ${isMine ? 'mine' : 'theirs'}`}>
            <div className="message-bubble">
              {!isMine && <div className="message-sender">{msg.sender}</div>}
              <div className="message-text">{msg.message}</div>
              <div className="message-timestamp">{formatTimestamp(msg.timestamp)}</div>
            </div>
          </div>
        );
      })}
      
      {/* This empty div is our "anchor" to scroll to */}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;