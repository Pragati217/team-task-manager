# Team Task Manager

## Project Overview

Team Task Manager is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application developed to help teams manage tasks and monitor project progress efficiently.

The application provides a dashboard interface where users can view total tasks, completed tasks, and pending tasks. It improves productivity by organizing project activities in one place.

This project demonstrates frontend development, backend API creation, MongoDB integration, deployment, and full-stack application structure.

---

# Features

- User Authentication Interface
- Dashboard UI
- Task Management System
- Add New Tasks
- View Completed Tasks
- View Pending Tasks
- Responsive User Interface
- Backend API Integration
- MongoDB Database Setup
- GitHub Version Control
- Railway Deployment

---

# Tech Stack

## Frontend Technologies

- React.js
- Vite
- CSS

### Description

React.js is used to build the user interface of the application.  
Vite is used as the frontend build tool for faster development and performance.  
CSS is used for styling the dashboard and components.

---

## Backend Technologies

- Node.js
- Express.js

### Description

Node.js is used to run the backend server.  
Express.js is used to create APIs and handle routes for the application.

---

## Database

- MongoDB

### Description

MongoDB is used to store user and task-related data in the database.

---

## Deployment & Version Control

- GitHub
- Railway

### Description

GitHub is used for storing and managing project code.  
Railway is used for backend deployment.

---

# Project Structure

```bash
Team-Task-Manager/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Installation & Setup

## Frontend Setup

Open terminal and run the following commands:

```bash
cd client
npm install
npm run dev
```

### Description

- `cd client` moves into the frontend folder.
- `npm install` installs all required frontend packages.
- `npm run dev` starts the React development server.

Frontend runs on:

```bash
http://localhost:5173
```

---

## Backend Setup

Open another terminal and run:

```bash
cd server
npm install
node server.js
```

### Description

- `cd server` moves into backend folder.
- `npm install` installs backend dependencies.
- `node server.js` starts the backend server.

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/signup | Register new user |
| POST | /api/auth/login | Login existing user |

---

# Screenshots

Dashboard Screenshot
<img width="1080" height="681" alt="image" src="https://github.com/user-attachments/assets/7f8e3098-28f7-4a7c-9b4f-be66aba31814" />

GitHub Repository Screenshots
<img width="1078" height="708" alt="image" src="https://github.com/user-attachments/assets/c74ce195-b6ff-450a-8200-427c3b57870f" />
<img width="1080" height="702" alt="image" src="https://github.com/user-attachments/assets/f7e471f5-2ed4-4efa-8a0a-ed5da9434b53" />
<img width="1080" height="688" alt="image" src="https://github.com/user-attachments/assets/e3bf4064-244c-407d-921a-042ecbc96dda" />

Railway Deployment Screenshot
<img width="1080" height="692" alt="image" src="https://github.com/user-attachments/assets/94fb3ccd-b533-4568-a416-5c782c60a853" />



### Description

These screenshots show the working interface of the Team Task Manager application.

---

#  Deployment

The backend server of the project is deployed successfully using Railway.

Deployment allows the application backend to run online and be accessible through a public URL.

---

# Future Improvements

The following features can be added in future versions of the project:

- Edit Task Feature
- Delete Task Feature
- JWT Authentication
- Dark Mode
- Team Collaboration
- Real-time Notifications

---

# Author

Pragati Yadav

---

# GitHub Repository

https://github.com/Pragati217/team-task-manager

---

# Conclusion

Team Task Manager is a MERN stack project that demonstrates frontend development, backend API integration, database connectivity, deployment, and responsive dashboard design.

The project helps improve understanding of full-stack web development concepts and practical implementation of MERN technologies.
