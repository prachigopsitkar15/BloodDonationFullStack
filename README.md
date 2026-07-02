# Blood Donation Management System

A full-stack Blood Donation Management System built using **React.js**, **Node.js**, **Express.js**, and **PostgreSQL**. The application helps manage donors, patients, blood requests, donations, and blood stock efficiently.

---

## Features

- User-friendly dashboard
- Donor management
- Patient management
- Blood donation records
- Blood request management
- Blood stock tracking
- Secure backend APIs
- PostgreSQL database integration

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- CSS

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- bcrypt
- dotenv
- CORS

---

## Project Structure

```
blooddonation3/
│
├── myapp/                 # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                # Express Backend
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── database.sql
│   ├── db.js
│   └── index.js
│
├── package.json
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd blooddonation3
```

---

### 2. Install backend dependencies

```bash
npm install
```

---

### 3. Install frontend dependencies

```bash
cd myapp
npm install
```

---

## Database Setup

1. Install PostgreSQL.
2. Create a new database.
3. Run the SQL script:

```sql
server/database.sql
```

4. Update your database credentials in the backend configuration.

Example:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=blood_donation
JWT_SECRET=your_secret_key
```

---

## Running the Backend

From the project root:

```bash
node server/index.js
```

or

```bash
nodemon server/index.js
```

---

## Running the Frontend

```bash
cd myapp
npm start
```

The application will be available at:

```
http://localhost:3000
```

---

## Application Modules

- Home
- Donor Management
- Patient Management
- Blood Donation
- Blood Request
- Blood Stock
- Admin Panel

---

## API

The backend exposes REST APIs for:

- Authentication
- Donors
- Patients
- Donations
- Blood Requests
- Blood Inventory

---

## Dependencies

### Backend

- Express
- PostgreSQL (pg)
- bcrypt
- jsonwebtoken
- dotenv
- cors

### Frontend

- React
- React Router DOM

---

## Author

Developed as a Blood Donation Management System project using the MERN-style architecture (React + Node.js + PostgreSQL).
