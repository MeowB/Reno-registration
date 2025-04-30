# 📋 Reno use-case

This is a small full-stack application built with **React**, **Express**, and **SQLite**. The app features a basic user registration form that sends input to the backend and stores the data in a local database.

---

## 🛠️ Technologies Used

### Frontend
- **React** – For building the interactive user interface
- **Vite** (or Create React App) – For fast development and bundling

### Backend
- **Express.js** – Lightweight Node.js framework for building the REST API
- **SQLite** – Lightweight, file-based relational database perfect for small applications

---

## 🔒 Features
- Simple registration form with input validation
- REST API to handle user submissions
- Data persistence with SQLite
- Clean project structure for easy extension

---

## 🧱 Database Note

SQLite is used for simplicity and rapid development. It's ideal for small-scale apps or prototypes.  
If the application grows, it can be easily migrated to a more powerful relational database like **PostgreSQL** or **MySQL** with minimal changes, especially if an ORM (like Sequelize or Prisma) is used.

---

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
