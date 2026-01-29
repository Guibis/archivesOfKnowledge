const pool = require("../db");

const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM books WHERE id = $1 RETURNING title", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json({ message: `The book ${result.rows[0].title} has been deleted successfully` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = deleteBook;
