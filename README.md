# 📚 Archives Of Knowledge

A simple **Books CRUD REST API** built with **Node.js** and **Express**, using a JSON file as a lightweight data store.  
This project is focused on learning backend fundamentals, REST concepts, and file-based persistence.

---

## 🚀 Overview

**Archives Of Knowledge** is a backend application that allows you to manage a collection of books.  
It provides a RESTful API with full CRUD operations:

- 📖 List all books  
- 🔍 Get a book by ID  
- ➕ Add a new book  
- ✏️ Update an existing book  
- 🗑️ Delete a book  

All data is stored in a local `books.json` file, making it easy to understand how persistence works without using a database.

---

## 🧠 Technologies Used

- **Node.js** – JavaScript runtime environment  
- **Express** – Web framework for building APIs  
- **fs (File System)** – Native Node.js module for file handling  
- **JSON** – Data format used for persistence  

---

## 📦 Installation

Clone the repository:

`git clone https://github.com/Guibis/archivesOfKnowledge.git`

Navigate to the project folder:

`cd archivesOfKnowledge`

Install dependencies:

`npm install`

## ▶️ Running the Server

Start the server with:

`npm start`

The API will be available at:

http:`//localhost:3000`

## 📍 API Endpoints
### 🔹 GET /books

Returns all books.

`curl http://localhost:3000/books`

### 🔹 GET /books/:id

Returns a single book by its ID.

`curl http://localhost:3000/books/123`

### 🔹 POST /books

Creates a new book.

Request body (JSON):
`
{
  "title": "The Lord of the Rings",
  "author": "J. R. R. Tolkien"
}
`

### 🔹 PUT /books/:id

Updates an existing book.

Request body (JSON):
`
{
  "title": "1984",
  "author": "George Orwell"
}
`

### 🔹 DELETE /books/:id

Deletes a book by its ID.

`curl -X DELETE http://localhost:3000/books/123`
