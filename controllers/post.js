const pool = require("../db");

const createBook = async (req, res) => {
    try {
        const { title, author, published_year } = req.body;
        if (!title || !author || !published_year) {
            return res.status(400).json({ message: "Title, author and published year are required" });
        }
        const result = await pool.query("INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *", [title, author, published_year]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = createBook;
