# 🎥 Streamify - Full Stack Video Streaming Platform

A full-stack video streaming platform built using **React + Vite** on the frontend and **Spring Boot** on the backend. StreamHub allows users to browse, watch, and manage video content with role-based access for both users and admins.

---

## 📁 Project Structure
```
/streamify
├── /frontend                   # React + Vite Frontend
│   ├── /public                 # Public assets
│   ├── /src
│   │   ├── /assets             # Images, videos, icons
│   │   ├── /components         # Reusable UI components (Navbar, MovieCard, etc.)
│   │   ├── /pages              # Pages (Home, Details, Login, Signup, Dashboard)
│   │   ├── /redux              # Redux store & slices (authSlice, videoSlice)
│   │   ├── /services           # API calls
│   │   ├── /routes             # Route configurations
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js

├── /backend                    # Spring Boot Backend
│   ├── /src
│   │   ├── /main
│   │   │   ├── /java/com/streamify
│   │   │   │   ├── controller  # REST controllers
│   │   │   │   ├── model       # Entity classes
│   │   │   │   ├── repository  # JPA repositories
│   │   │   │   ├── service     # Business logic
│   │   │   │   └── security    # JWT, Role-based auth
│   │   │   └── /resources
│   │   │       ├── application.properties
│   │   │       └── static      # Serve frontend build (optional)
│   ├── pom.xml

├── /docs                      # Optional documentation, diagrams, flowcharts
├── /scripts                   # Deployment, CI/CD, setup scripts
├── LICENSE
├── README.md
└── .gitignore
```
---

## 🚀 Features

### 🖥️ Frontend (React + Vite)
- Responsive and clean UI
- Video streaming with React Player
- Dynamic pages: Landing, Details, Dashboard
- User login/signup with JWT auth
- Role-based routing (User & Admin)
- Watchlist and personalized recommendations

### ⚙️ Backend (Spring Boot)
- Secure REST APIs with Spring Security
- JWT-based authentication & role management
- Video content CRUD for admin
- MongoDB/PostgreSQL for data persistence
- API documentation with Swagger (optional)

### 🧩 Additional Features
- Search & filter module
- Google Maps integration (optional)
- Payment gateway integration (e.g. Stripe)
- Captcha validation on signup/login
- File storing for thumbnails or profile pics

---

## 🧪 Tech Stack

| Layer     | Tools / Libraries |
|-----------|-------------------|
| Frontend  | React, Vite, TailwindCSS / CSS Modules |
| Backend   | Spring Boot, Spring Security, JPA, MongoDB/PostgreSQL |
| Auth      | JWT, Role-based access |
| Dev Tools | Git, GitHub, Postman, VS Code |
| Deployment | Vercel / Netlify (Frontend), Heroku / Render (Backend) |
| CI/CD     | GitHub Actions (Build, Lint, Deploy)

---

## ⚙️ Setup Instructions

### 🔹 Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev

cd backend
./mvnw spring-boot:run

```

## Contributors

- [Ganesh](https://github.com/MSGanesh23)  
- [Balaji](https://github.com/KvnBalaji45)  
- [Charan](https://github.com/BeesuCharanSai)
