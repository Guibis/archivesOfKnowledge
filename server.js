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

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});