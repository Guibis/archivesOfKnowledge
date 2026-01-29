const pool = require("../db");

const getBooks = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM books");
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getBookById = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM books WHERE id = $1", [req.params.id]);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { getBooks, getBookById };
