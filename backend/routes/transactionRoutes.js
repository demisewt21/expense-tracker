const express = require('express');
const protect = require('../middleware/auth');
const { addTransaction, getTransactions, deleteTransaction, getDashboard } = require('../controllers/transactionController');

const router = express.Router();

router.post('/', protect, addTransaction);
router.get('/', protect, getTransactions);
router.delete('/:id', protect, deleteTransaction);
router.get('/dashboard', protect, getDashboard);

module.exports = router;