# 📚 Book Library API

A simple Node.js and Express.js REST API that performs CRUD (Create, Read, Update, Delete) operations for a book library. This project is built for learning and testing with Postman.

---

## 🚀 Features

- Get all books
- Get a single book by ID
- Create a new book
- Update a book by ID
- Delete a book by ID

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Nodemon (for development)

---

## 📁 Project Structure

book_library_api/
├── controllers/
│ └── bookController.js
├── data/
│ └── books.js
├── routes/
│ └── bookRoutes.js
├── index.js
├── package.json
└── README.md

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/JOULifestyle/book_library_api.git
cd book_library_api
2. Install Dependencies
npm install
and express
3. Start the Server
npm run dev   # Uses nodemon
# or
npm start     # Uses node
4. Test with Postman
Base URL:
http://localhost:3000/api/books
📬 API Endpoints
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/:id	Get a book by ID
POST	/api/books	Add a new book
PUT	/api/books/:id	Update a book by ID
DELETE	/api/books/:id	Delete a book by ID

