const express = require("express");
const router = express.Router();

const getBooks = require("../controllers/get");
const getBookById = require("../controllers/get");
const createBook = require("../controllers/post");
const updateBook = require("../controllers/put");
const deleteBook = require("../controllers/delete");

router.post("/books", createBook);
router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
