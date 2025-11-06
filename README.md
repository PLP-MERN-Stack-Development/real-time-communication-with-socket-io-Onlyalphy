🚀 Real-Time Chat Application
This project is a real-time chat application built for the Week 5 assignment of the PLP Full-Stack MERN Development course. It demonstrates bidirectional communication between a Node.js server and a React client using Socket.io.

Overview
The application allows multiple users to join a global chat room by providing a username. Once connected, they can send and receive messages in real-time. The application also shows a live list of all currently online users and notifies the chat when a user joins or leaves.

Built With
Backend: Node.js, Express, Socket.io

Frontend: React, Socket.io-client

Dev: Vite (for the React frontend)

✨ Features Implemented
Simple "Authentication": Users join the chat by providing a username.

Global Chat Room: All connected users can send and receive messages in a single, shared chat room.

Real-Time Messaging: Messages appear instantly for all users without needing to refresh the page.

Online User List: A sidebar shows a live list of all users currently connected to the chat.

Connection Status: The UI displays a "Connected" or "Disconnected" status indicator.

System Messages: The chat window displays a system message when a user "joins the chat" or "left the chat."

"User is Typing" Indicator: When a user types in the message box, a notification appears for all other users (e.g., "Míhozi is typing...").

Stable Connection: Implements useCallback on the client to prevent re-render loops and maintain a stable WebSocket connection.

📸 Screenshots
Note: Replace the placeholder text below with your own screenshots.

How to add screenshots:

Take a screenshot of your application.

Drag and drop the image file directly into the GitHub text editor for this README.md file. It will automatically upload it and give you a link.

1. Login Screen
This is the first screen the user sees to enter their name.

2. Main Chat Interface
Shows the online user list, chat messages (from you and others), and system messages.

3. "User is Typing" Indicator
Shows the app when another user is actively typing a message.

🛠️ Setup and Installation
Follow these instructions to get a local copy of the project up and running.

Prerequisites
Node.js (v18+ recommended)

npm (comes with Node.js)

1. Clone the Repository
Bash

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
2. Backend (Server) Setup
Navigate to the server directory:

Bash

cd server
Install the required npm packages:

Bash

npm install
Start the backend server:

Bash

npm run dev
The server will start on http://localhost:5000.

3. Frontend (Client) Setup
Open a new terminal and navigate to the client directory:

Bash

cd client
Install the required npm packages:

Bash

npm install
Start the frontend development server:

Bash

npm run dev
The application will automatically open in your browser at http://localhost:5174.

4. Run the Application
Open two (or more) browser tabs or incognito windows to http://localhost:5174.

Enter a different username in each tab.

You can now chat between the two (or more) users!