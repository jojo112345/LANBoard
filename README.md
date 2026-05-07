# LANBoard

A realtime collaborative whiteboard built with Node.js and websockets.

Users on the same network can instantly draw together in shared rooms.

---

# Features

- Realtime drawing
- Multiplayer cursors
- Room system
- Brush colors
- Brush sizes
- Eraser tool
- Live synchronization
- Undo system
- Canvas clearing
- Image upload
- Sticky notes
- Dark mode
- LAN hosting
- Mobile support

---

# Tech Stack

## Backend

- Node.js
- Express
- Socket.IO

## Frontend

- HTML5 Canvas
- JavaScript
- CSS

---

# Project Structure

```txt
lanboard/
│
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── style.css
│   └── client.js
```

---

# Installation

## 1. Create the project

```bash
mkdir lanboard
cd lanboard
```

## 2. Initialize npm

```bash
npm init -y
```

## 3. Install dependencies

```bash
npm install express socket.io
```

---

# Running The Project

Start the server:

```bash
node server.js
```

Open in browser:

```txt
http://localhost:3000
```

To use on another device in the same network:

```txt
http://YOUR_LOCAL_IP:3000
```

Example:

```txt
http://192.168.1.15:3000
```

---

# How It Works

The backend:
1. Receives drawing data from clients
2. Broadcasts drawing updates through Socket.IO
3. Stores drawing history
4. Synchronizes all connected users in realtime

The frontend:
1. Captures mouse input
2. Draws lines on the canvas
3. Sends drawing data to the server
4. Receives updates from other users

---

# Included Tools

- Brush tool
- Color picker
- Brush size slider
- Clear canvas button

---

# Future Upgrades

## Drawing Features

- Shape tools
- Text tool
- Sticky notes
- Image uploads
- Infinite canvas
- Layers
- Selection tool
- Pressure sensitivity

## Collaboration

- User accounts
- Rooms
- Permissions
- Voice chat
- Live cursors
- User colors
- Drawing replay

## Storage

- Save/load boards
- Database persistence
- PNG export
- PDF export
- Automatic backups

## Performance

- Canvas optimization
- Compression
- WebRTC peer-to-peer mode
- Low latency synchronization

---

# Learning Goals

This project teaches:
- realtime networking
- websocket communication
- canvas rendering
- frontend/backend synchronization
- multiplayer systems
- event-driven programming

---

# Recommended Libraries

Optional additions:

```bash
npm install mongoose uuid multer
```

Useful for:
- MongoDB storage
- unique room IDs
- image uploads

---

# Possible Use Cases

- School collaboration
- Brainstorming
- Team planning
- Diagram creation
- Wireframing
- Local office collaboration
- Remote teamwork

---

# License

MIT License

Free to modify and expand.
