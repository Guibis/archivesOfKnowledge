const express = require("express");

const app = express();

const fs = require("fs");

app.use(express.json());

const BOOKS_FILE = "./books.json";

const readBooks = () => {
    try {
        const data = fs.readFileSync(BOOKS_FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const writeBooks = (books) => {
    fs.writeFileSync(BOOKS_FILE, JSON.stringify(books, null, 2));
};

app.get("/books", (req, res) => {
    const books = readBooks();
    res.json(books);
});

app.get("/books/:id", (req, res) => {
    const books = readBooks();
    const book = books.find((b) => b.id === req.params.id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

app.post("/books", (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ message: "Title and author are required" });
    }
    const books = readBooks();
    const newBook = {
        id: Date.now().toString(),
        title,
        author,
    };
    books.push(newBook);
    writeBooks(books);
    res.status(201).json(newBook);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});