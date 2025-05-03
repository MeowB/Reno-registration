# 📋 Reno registration

This is a small full-stack application built with **React**, **Express**, and **SQLite**. The app features a basic user registration form that sends input to the backend and stores the data in a local database.

---

## 🛠️ Technologies Used

### Frontend
- **React** – For building the interactive user interface
- **Vite** – For fast development and bundling
- **sass** – For styling the components

### Backend
- **Express.js** – Lightweight Node.js framework for building the REST API
- **SQLite** – Lightweight, file-based relational database perfect for small applications

---

## 🔒 Features
- Simple registration form with input validation
- REST API to handle user submissions
- Data persistence with SQLite
- Clean project structure for easy extension
- Password hashing for security
---

## API Documentation

This project provides endpoints for user registration and login. Users can register as **merchants** or **agents**, and log in to their accounts.

### 🚀 Endpoints

---

### 1. **Register as a Merchant**

**Endpoint:** `POST /api/register/merchant`

This route allows merchants to create an account.

#### **Request Body:**

```json
{
	"firstName": "Ada",                   // First name of the merchant
	"companyLocation": "Philippines",     // Location of the company
	"email": "merchant@example.com",      // The merchant's email address (must be unique)
	"industry": "Tech",                   // The industry the merchant operates in
	"phoneNumber": "123-456-7890",        // Merchant's contact phone number
	"password": "test1234",               // Password for the merchant's account
}
```

### 2. **Register as a agent**

**Endpoint:** `POST /api/register/agent`

This route allows agent to create an account.

#### **Request Body:**

```json
{
  "email": "agent@example.com",         // The agent's email address (must be unique)
  "password": "agentpass",              // Password for the agent's account
  "first_name": "John",                 // First name of the agent
  "last_name": "Doe",                   // Last name of the agent
  "region": "North America",            // The region the agent serves
  "phone_number": "555-1234"            // Agent's contact phone number
}
```
### 3. **Login**

**Endpoint:** `POST /api/login`

This route allows users to login.

#### **Request Body:**

```json
{
  "email": "merchant@example.com",     // The email address used for registration
  "password": "test1234"                // The password for the account
}
```

## 🧱 Database Note

SQLite is used for simplicity and rapid development. It's ideal for small-scale apps or prototypes.  
If the application grows, it can be easily migrated to a more powerful relational database like **PostgreSQL** or **MySQL** with minimal changes, especially if an ORM (like Sequelize or Prisma) is used.


## Command Line Tools
- `npm run cleandb`

Clean the database (removes all records, keeps tables)


- `npm run resetdb`

Hard reset the database (drops and recreates all tables)

---

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install

2. **Run the backend server**

   ```bash
   cd backend
   npm run dev
   ```
   The backend server will run on `http://localhost:3000`

3. **Run the frontend server**

   ```bash
   cd frontend
   npm run dev
   ```
   The frontend server will run on `http://localhost:5173`
