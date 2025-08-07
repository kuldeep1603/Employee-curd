🧑‍💼 Employee Management Full Stack App

This is a full-stack Employee Management system with the following tech stack:

- **Frontend**: React.js + Redux Toolkit + Tailwind CSS + JavaScript
- **Backend**: Node.js + Express.js + PostgreSQL
- **Features**: Full CRUD (Create, Read, Update, Delete) for employees


## 🛠️ Tech Stack

| Layer     | Tech                                |
|-----------|-------------------------------------|
| Frontend  | React.js, Redux Toolkit, Tailwind   |
| Backend   | Node.js, Express.js                 |
| Database  | PostgreSQL                          |
| Styling   | Tailwind CSS                        |
| State     | Redux Toolkit + Thunk               |

## 📦 Backend Setup (Express + PostgreSQL)

### 1. 📁 Navigate to `server` folder:

cd server

📥 Install dependencies:

npm install

⚙️ Create PostgreSQL DB

CREATE DATABASE employee_db;


Then create the employees table:


CREATE TABLE employees (

  id SERIAL PRIMARY KEY,
  
  name VARCHAR(255),
  
  email VARCHAR(255),
  
  position VARCHAR(100)

);


▶️ Run backend server:

npm start


💻 Frontend Setup (React + Tailwind + Redux)

📁 Navigate to client-side folder:

cd client-side

npm install

npm run dev


🔀 API Endpoints (Backend)

Method	Endpoint	Description

GET	/api/employees	Get all employees

POST	/api/employees	Create new employee

PUT	/api/employees/:id	Update employee by ID

DELETE	/api/employees/:id	Delete employee by ID
