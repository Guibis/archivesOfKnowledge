const pool = require("../db");

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, published_year } = req.body;
    try {
        if (!title) {
            const result = await pool.query("UPDATE books SET author = $1, published_year = $2 WHERE id = $3 RETURNING *", [author, published_year, id]);
        }
        if (!author) {
            const result = await pool.query("UPDATE books SET title = $1, published_year = $2 WHERE id = $3 RETURNING *", [title, published_year, id]);
        }
        if (!published_year) {
            const result = await pool.query("UPDATE books SET title = $1, author = $2 WHERE id = $3 RETURNING *", [title, author, id]);
        } else {
            const result = await pool.query("UPDATE books SET title = $1, author = $2, published_year = $3 WHERE id = $4 RETURNING *", [title, author, published_year, id]);
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = updateBook;
