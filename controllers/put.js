const pool = require("../db");

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, published_year } = req.body;
    try {
        let result;
        if (title && author && published_year) {
            result = await pool.query("UPDATE books SET title = $1, author = $2, published_year = $3 WHERE id = $4 RETURNING *", [title, author, published_year, id]);
        }
        if (title && author) {
            result = await pool.query("UPDATE books SET title = $1, author = $2 WHERE id = $3 RETURNING *", [title, author, id]);
        }
        if (title && published_year) {
            result = await pool.query("UPDATE books SET title = $1, published_year = $2 WHERE id = $3 RETURNING *", [title, published_year, id]);
        }
        if (author && published_year) {
            result = await pool.query("UPDATE books SET author = $1, published_year = $2 WHERE id = $3 RETURNING *", [author, published_year, id]);
        }
        if (title) {
            result = await pool.query("UPDATE books SET title = $1 WHERE id = $2 RETURNING *", [title, id]);
        }
        if (author) {
            result = await pool.query("UPDATE books SET author = $1 WHERE id = $2 RETURNING *", [author, id]);
        }
        if (published_year) {
            result = await pool.query("UPDATE books SET published_year = $1 WHERE id = $2 RETURNING *", [published_year, id]);
        }
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = updateBook;
