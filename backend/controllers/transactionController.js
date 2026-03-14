const db = require('../config/db');

// Add transaction
const addTransaction = async (req, res) => {
    const { category_id, amount, type, description, date } = req.body;
    try {
        await db.execute(
            'INSERT INTO transactions (user_id, category_id, amount, type, description, date) VALUES (?, ?, ?, ?, ?, ?)',
            [req.user.id, category_id, amount, type, description, date]
        );
        res.status(201).json({ message: 'Transaction added' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all transactions (with optional filters)
const getTransactions = async (req, res) => {
    const { startDate, endDate, category } = req.query;
    let query = 'SELECT t.*, c.name as category_name FROM transactions t JOIN categories c ON t.category_id = c.id WHERE t.user_id = ?';
    const params = [req.user.id];

    if (startDate) { query += ' AND t.date >= ?'; params.push(startDate); }
    if (endDate)   { query += ' AND t.date <= ?'; params.push(endDate); }
    if (category)  { query += ' AND c.name = ?'; params.push(category); }

    const [rows] = await db.execute(query, params);
    res.json(rows);
};

// Delete transaction
const deleteTransaction = async (req, res) => {
    await db.execute('DELETE FROM transactions WHERE id = ? AND user_id = ?', [req.params.id, req.user.id]);
    res.json({ message: 'Transaction deleted' });
};

// Get balance + spending by category (for dashboard)
const getDashboard = async (req, res) => {
    const [balanceRows] = await db.execute(`
        SELECT 
            COALESCE(SUM(CASE WHEN type='income' THEN amount ELSE 0 END), 0) as totalIncome,
            COALESCE(SUM(CASE WHEN type='expense' THEN amount ELSE 0 END), 0) as totalExpense
        FROM transactions WHERE user_id = ?
    `, [req.user.id]);

    const [categoryRows] = await db.execute(`
        SELECT c.name, SUM(t.amount) as total 
        FROM transactions t 
        JOIN categories c ON t.category_id = c.id 
        WHERE t.user_id = ? AND t.type = 'expense'
        GROUP BY c.name
    `, [req.user.id]);

    res.json({
        balance: balanceRows[0].totalIncome - balanceRows[0].totalExpense,
        totalIncome: balanceRows[0].totalIncome,
        totalExpense: balanceRows[0].totalExpense,
        spendingByCategory: categoryRows
    });
};

module.exports = { addTransaction, getTransactions, deleteTransaction, getDashboard };