import React, { useState, useEffect } from 'react';
import { getTransactions } from '../../services/transactionService';   // ←←← FIXED PATH (adjust to '../services' if error)

const ExpenseTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch real transactions from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransactions();
        
        // Transform backend data to match your table format
        const transformed = data.map(t => ({
          id: t.id,
          date: t.date,
          description: t.description || 'ያልተገለጸ',
          category: t.category_name || 'ሌላ',
          type: t.type,
          amount: parseFloat(t.amount)
        })).sort((a, b) => new Date(b.date) - new Date(a.date));

        setTransactions(transformed);
      } catch (err) {
        console.error(err);
        // Keep empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-zinc-900 rounded-xl shadow-sm border overflow-hidden mt-8">
      <div className="bg-blue-950 p-4 border-b">
        <h3 className="font-semibold text-white text-lg">የቅርብ ጊዜ እንቅስቃሴዎች</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm font-medium text-zinc-400 border-b">
              <th className="p-4">ቀን</th>
              <th className="p-4">መግለጫ</th>
              <th className="p-4">ምድብ</th>
              <th className="p-4">መጠን</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="p-8 text-center text-zinc-400">በመጫን ላይ...</td>
              </tr>
            ) : transactions.length > 0 ? (
              transactions.map((t) => (
                <tr key={t.id} className="border-b hover:bg-zinc-800 transition">
                  <td className="p-4 text-sm text-zinc-400">{t.date}</td>
                  <td className="p-4 text-sm font-medium text-white">{t.description}</td>
                  <td className="p-4 text-sm">
                    <span className="bg-zinc-700 text-white px-2 py-1 rounded-full text-xs">
                      {t.category}
                    </span>
                  </td>
                  <td
                    className={`p-4 text-sm font-bold ${
                      t.type === 'income' ? 'text-emerald-500' : 'text-red-500'
                    }`}
                  >
                    {t.type === 'income' ? `+${t.amount} ETB` : `-${t.amount} ETB`}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-8 text-center text-zinc-400">ገና ምንም ግብዓት የለም</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;